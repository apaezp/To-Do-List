const tasksArray = [
  { id: 1, description: "Feed Cats", completed: false },
  { id: 2, description: "Buy Bread", completed: false },
  { id: 3, description: "Learn React", completed: false },
];

const inputBox = document.querySelector(".newTask");
const addButton = document.querySelector("#pressButton");
const todoBox = document.querySelector(".todo-box");
const completedTasks = document.querySelector(".footer-box");
const totalTasks = document.querySelector(".number-total-count");
const doneCount = document.querySelector(".done-count");
let finishedCount = 0;


const taskRender = () => { 
    
    let newLiTag = "";

    for(let task of tasksArray) {        
          if (task.completed == false) {
            newLiTag += `<li> ${task.id} ${task.description} <span class="fa-stack fa-1x" onclick="completedTask(${task.id})"> <i class="fa-solid fa-check fa-stack" style="--fa-stack-z-index: 2;"></i> </span> 
            <span class="fa-stack fa-1x" onClick="removeTask(${task.id})"><i class="fas fa-trash fa-stack" style="--fa-stack-z-index: 1;"></i></span>
            </li>`;
          }
          
        };
        todoBox.innerHTML = newLiTag;
        inputBox.value = "";
        totalTasks.innerHTML = tasksArray.length;       

}


inputBox.addEventListener("keyup", () => {
  let userData = inputBox.value;
  if (userData.trim() != 0) {
    addButton.classList.add("active");
  } else {
    addButton.classList.remove("active");
  }  
});

addButton.addEventListener("click", () => {   
    const userData = inputBox.value;
    if (userData.trim() != 0) {
      tasksArray.push({ id: tasksArray.length + 1, description: userData, completed: false });
      taskRender();
    }
});


const completedTask = (id) => {
    const indice = tasksArray.findIndex((task) => task.id === id);
    if (tasksArray[indice].completed === false) {
      tasksArray[indice].completed = true;
      finishedCount++;
    } else {
        tasksArray[indice].completed = false;
        finishedCount--;        
    }
    
    showTasks();

}


function showTasks() {  

  const totalCount = document.querySelector(".number-total-count");
  totalCount.textContent = tasksArray.length;

  const doneCount = document.querySelector(".number-done-count");
    doneCount.textContent = finishedCount;
    taskRender();

}
 

const removeTask = (id) => {
  const index = tasksArray.findIndex((task) => task.id === id);  
  tasksArray.splice(index, 1);
  taskRender();

}
showTasks();

window.onload = () => {  
    taskRender();
}
showTasks();
