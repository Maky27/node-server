const express = require('express');
const app = express();

// Ruta principal para obtener la lista de tareas
app.get('/', (req, res) => {
  const tareas = [
    {
      id: 1,
      descripcion: 'Hacer la compra',
      completado: false
    },
    {
      id: 2,
      descripcion: 'Lavar los platos',
      completado: true
    },
    {
      id: 3,
      descripcion: 'Pasear al perro',
      completado: false
    }
  ];
  res.json(tareas);
});

// Iniciar el servidor
const port = 5000;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
