const task = document.querySelector(".input-form");
const taskAdded =document.querySelector(".tasks");
let checkButtons = document.querySelectorAll(".check-task");
task.onsubmit= function(e){
    e.preventDefault();
    const inputTask = document.querySelector(".your-task").value;
    if(inputTask!=""){
        taskAdded.innerHTML+=`
        <div class="task">
        <input type="checkbox" class="check-task">
        <label>${inputTask}</label>
    </div>   
        `    
    }
}
