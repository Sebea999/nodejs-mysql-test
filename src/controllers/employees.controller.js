import {pool} from '../db.js';


export const getEmployees = async (req, res) => {
    try {
        // throw new Error('error database'); // instanciando un error para probar el try-catch (para manejar errores y no detener el servidor)
        const [rows] = await pool.query('SELECT * FROM ope_marca');
        //res.send('obteniendo empleados');
        res.json(rows);
    } catch(error) {
        return res.status(500).json({ message: 'something goes wrong' })
    }
};


export const getEmployee = async (req, res) => {
    try {
        console.log(req.params.id);
        const [rows] = await pool.query('SELECT * FROM ope_marca WHERE IDMARCA = ?', [req.params.id]);
    
        if (rows.length <= 0) return res.status(404).json({
            message: 'Employee not found'
        });
    
        //console.log(rows);
        //res.send('obteniendo empleado');
        res.json(rows[0]);
    } catch(error) {
        return res.status(500).json({ message: 'something goes wrong' });
    }
};


export const createEmployees = async (req, res) => {
    try {
        const {name, state} = req.body;
        const [rows] = await pool.query('INSERT INTO ope_marca(MARCA, ESTADO) VALUES (?, ?)', [name, state]);
        //res.send('post success');
        //res.send({rows});
        res.send({
            id: rows.insertId,
            name,
            state,
        });
    } catch(error) {
        return res.status(500).json({ message: 'something goes wrong' });
    }
};


export const updateEmployees = async (req, res) => {
    const {id} = req.params;
    const {name, state} = req.body;

    try {
        const [result] = await pool.query('UPDATE ope_marca SET MARCA = IFNULL(?, MARCA), ESTADO = IFNULL(?, ESTADO) WHERE IDMARCA = ?', [name, state, id]);

        console.log(result);
    
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'employee not found'
            });
        }
    
        const [rows] = await pool.query('SELECT * FROM ope_marca WHERE IDMARCA = ?', [id]);
    
        res.json(rows[0]);
    } catch(error) {
        return res.status(500).json({ message: 'something goes wrong' });
    }
};


export const deleteEmployees = async (req, res) => {
    try{
        console.log('id-for-delete: ',req.params.id);
        const [result] = await pool.query('DELETE FROM ope_marca WHERE IDMARCA = ?', [req.params.id]);
    
        if (result.affectedRows <= 0) {
            return res.status(404).json({message: 'employee not found'})
        }
    
        console.log(result);
        res.sendStatus(204);
    } catch(error) {
        return res.status(500).json({ message: 'something goes wrong' });
    }
};
