const taskList = [];

const addButtonElement = document.getElementById("add-button");
const taskListElement = document.getElementById("tast-list");

addButtonElement.addEventListener("click", function () {
  const taskName = prompt("Enter your task: ");
  if (taskName) {
    const taskObject = {
      name: taskName,
      time: new Date(),
      status: false,
    };
    taskList.push(taskObject);
    updateUI();
  }
});

function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const strTime = hours + ":" + minutes + ampm;
  return strTime;
}

function updateUI() {
  taskListElement.innerHTML = "";
  let taskUis = "";
  for (let i = 0; i < taskList.length; i++) {
    const task = taskList[i];

    taskUis += `<div class="list-container" onclick="onItemClick(${i})">
                    <input type="checkbox" id="checkbox" name="veg" value="veg" ${task.status ? "checked" : ""}>
                    <label id="mylabel" ${
                      task.status
                        ? `style="text-decoration: line-through; color: white;"`
                        : ""
                    }>${task.name}  </label>
                    <button onclick="onDeleteClick(${i})">delete</button>
                    <span>${formatTime(task.time)}</span>

                    
                    
                    
                </div>`;
  }

  taskListElement.innerHTML = taskUis;

}
  
function onItemClick(position){
  taskList[position].status=!taskList[position].status
  updateUI()

}
function onDeleteClick(){
  const question=confirm("do you want to delete this task?");
  if (question){
    taskList.pop(onItemClick.position)
    updateUI()
    alert("hurray task deleted")
  }
  else{
    alert("operation was cancelled")
  }
}
