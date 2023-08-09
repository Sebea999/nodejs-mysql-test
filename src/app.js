// archivo encargado de ejecutar e inicializar todo el servidor
import express from 'express';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express();

app.use(express.json());

// routes 
//app.use('/', customerRoutes);
app.use(indexRoutes);
app.use('/api', employeesRoutes);
// obs :va a mostrar este mensaje en caso de que la ruta cargada por el usuario no sea encontrada o ubicada.
app.use((req, res, next) => { res.status(404).json({ message: 'endpoint not found' }); });

export default app;