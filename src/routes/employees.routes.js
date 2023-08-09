import {Router} from 'express';
import {getEmployees, createEmployees, updateEmployees, deleteEmployees, getEmployee} from '../controllers/employees.controller.js'

const router = Router()

router.get('/employees', getEmployees );

router.get('/employees/:id', getEmployee );

router.post('/employees', createEmployees);

router.patch('/employees/:id', updateEmployees); // put: para actualizar todos los campos de un tabla en la db; patch: para actualizar algunos campos y no todos los de la tabla;

router.delete('/employees/:id', deleteEmployees);

export default router