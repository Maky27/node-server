const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function askQuestion(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function addTask() {
  const indicator = await askQuestion('Indicador de la tarea: ');
  const description = await askQuestion('Descripción de la tarea: ');

  tasks.push({
    indicator,
    description,
    completed: false
  });

  console.log('Tarea añadida correctamente.');
}

async function removeTask() {
  const index = await askQuestion('Índice de la tarea a eliminar: ');

  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    console.log('Tarea eliminada correctamente.');
  } else {
    console.log('Índice inválido.');
  }
}

async function completeTask() {
  const index = await askQuestion('Índice de la tarea completada: ');

  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log('Tarea marcada como completada.');
  } else {
    console.log('Índice inválido.');
  }
}

function showTasks() {
  console.log('Lista de tareas:');
  tasks.forEach((task, index) => {
    console.log(`${index}. [${task.completed ? 'X' : ' '}] ${task.indicator}: ${task.description}`);
  });
}

async function showMenu() {
  console.log('\n=== Menú ===');
  console.log('1. Añadir tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Marcar tarea como completada');
  console.log('4. Mostrar tareas');
  console.log('5. Salir');

  const option = await askQuestion('Elige una opción: ');

  console.log();

  switch (option) {
    case '1':
      await addTask();
      break;
    case '2':
      await removeTask();
      break;
    case '3':
      await completeTask();
      break;
    case '4':
      showTasks();
      break;
    case '5':
      rl.close();
      return;
    default:
      console.log('Opción inválida.');
  }

  await showMenu();
}

console.log('Bienvenido al Administrador de Tareas.');
showMenu().catch((error) => {
  console.log(`Error: ${error}`);
});
