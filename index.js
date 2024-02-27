const taskList = [];

const addButtonElement = document.getElementById("add-button");
const taskListElement = document.getElementById("tast-list");
const taskDoneElement=document.getElementById("taskDone");
const taskUndoneElement=document.getElementById("taskUndone");
const todayDateElement=document.getElementById("mydate");

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
  const donetasks=taskList.filter(function(task){
    return task.status===true
  });
  const undonetasks= taskList.length- donetasks.length;
  taskDoneElement.innerHTML=donetasks.length;
  taskUndoneElement.innerHTML=undonetasks;
  todayDateElement.innerHTML= new Date().toLocaleDateString();
  


}
  
function onItemClick(index){
  taskList[index].status=!taskList[index].status
  updateUI()

}
function onDeleteClick(index){
  const question=confirm("do you want to delete this task?");
  if (question){
    taskList.splice(index,1)
    updateUI()
    alert("hurray task deleted")
  }
  else{
    alert("operation was cancelled")
  }
}

updateUI()