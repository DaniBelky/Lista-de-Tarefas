const inputElement = document.querySelector(".newTask-input");
const addTaskButton = document.querySelector(".newTask-button");
const TasksConteiner = document.querySelector(".taskContainer");

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
  const inputIsValid = validateInput();

  if (!inputIsValid) {
    return inputElement.classList.add("error");
  }

  const taskItemContainer = document.createElement("div");
  taskItemContainer.classList.add("taskItem");

  let taskContentParagrafo = document.createElement("p");
  taskContentParagrafo.innerText = inputElement.value;

  const deleteItem = document.createElement("i");
  deleteItem.classList.add("far");
  deleteItem.classList.add("fa-trash-alt");

  taskItemContainer.addEventListener(
    "click",
    function () {
      this.classList.toggle("active");
    },
    false
  );

  deleteItem.addEventListener("click", (event) => handleDeleteClick(event, taskItemContainer));

  taskItemContainer.appendChild(taskContentParagrafo);
  taskItemContainer.appendChild(deleteItem);
  TasksConteiner.appendChild(taskItemContainer);

  inputElement.value = "";
};

const handleDeleteClick = (event, taskItemContainer) => {
  event.stopPropagation(); // Impede o clique no ícone de ativar a tarefa
  taskItemContainer.remove(); // Remove a tarefa da lista
};

const handleInputChange = () => {
  const inputIsValid = validateInput();

  if (inputIsValid) {
    return inputElement.classList.remove("error");
  }
};

addTaskButton.addEventListener("click", () => handleAddTask());
inputElement.addEventListener("change", () => handleInputChange());
