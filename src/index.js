// ---------------------------------------------------------------------
// TUTORIAL:    https://www.youtube.com/watch?v=3dSkc-DIM74
// ---------------------------------------------------------------------
import  app  from './app.js';
// recuperando las variables de entorno para cargar el puerto de escucha de node.js
import { PORT } from './config.js';

app.listen(PORT, () => {
    console.log('Server running on port ',PORT);
});