const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function addTask() {
  rl.question('Indicador de la tarea: ', (indicator) => {
    rl.question('Descripción de la tarea: ', (description) => {
      tasks.push({
        indicator,
        description,
        completed: false
      });
      console.log('Tarea añadida correctamente.');
      showMenu();
    });
  });
}

function removeTask() {
  rl.question('Índice de la tarea a eliminar: ', (index) => {
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      console.log('Tarea eliminada correctamente.');
    } else {
      console.log('Índice inválido.');
    }
    showMenu();
  });
}

function completeTask() {
  rl.question('Índice de la tarea completada: ', (index) => {
    if (index >= 0 && index < tasks.length) {
      tasks[index].completed = true;
      console.log('Tarea marcada como completada.');
    } else {
      console.log('Índice inválido.');
    }
    showMenu();
  });
}

function showTasks() {
  console.log('Lista de tareas:');
  tasks.forEach((task, index) => {
    console.log(`${index}. [${task.completed ? 'X' : ' '}] ${task.indicator}: ${task.description}`);
  });
  showMenu();
}

function showMenu() {
  console.log('\n=== Menú ===');
  console.log('1. Añadir tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Marcar tarea como completada');
  console.log('4. Mostrar tareas');
  console.log('5. Salir');

  rl.question('Elige una opción: ', (option) => {
    console.log();

    switch (option) {
      case '1':
        addTask();
        break;
      case '2':
        removeTask();
        break;
      case '3':
        completeTask();
        break;
      case '4':
        showTasks();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Opción inválida.');
        showMenu();
    }
  });
}

console.log('Bienvenido al Administrador de Tareas.');
showMenu();
