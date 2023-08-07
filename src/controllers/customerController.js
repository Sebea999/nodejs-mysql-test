const controller = {};

controller.list = (req, res) => {
    //res.send('hellow');
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM rh_ciudad LIMIT 10', (err, customers) => {
            if (err) {
                res.json(err);
            }
            //console.log(customers);
            res.render('customers', {
                data: customers
            });
        });
    });
};




module.exports = controller;