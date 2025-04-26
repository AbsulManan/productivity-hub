function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();
  
    if (task === "") return;
  
    let li = document.createElement("li");
    li.textContent = task;
  
    // Add delete button
    let btn = document.createElement("button");
    btn.textContent = "❌";
    btn.style.marginLeft = "10px";
    btn.onclick = function () {
      li.remove();
    };
  
    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
  