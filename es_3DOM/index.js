// Funzione per aggiungere un task (prodotto) alla lista
const addProduct = () => {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value;  // Prendi il valore dell'input


  if (taskValue !== "" && taskValue !== null) {
    const ul = document.getElementById("taskList");
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "taskCheckbox";

    // Creiamo un testo per il task
    const taskText = document.createElement("span");
    taskText.textContent = taskValue;

    // Aggiungiamo il checkbox e il testo al li
    li.appendChild(checkbox);
    li.appendChild(taskText);

    // Aggiungiamo il li alla lista
    ul.appendChild(li);

    // Pulisci il campo input
    taskInput.value = "";

    // Aggiungere un event listener per segnare il task come completato
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        taskText.style.textDecoration = "line-through"; // Segna il task come completato
      } else {
        taskText.style.textDecoration = "none"; // Rimuove la linea quando il task non è completato
      }
    });
  } else {
    alert("Per favore, inserisci un task valido!");
  }
};
