function addTask() {
    const task = document.getElementsByClassName("section1")[0].querySelector("input").value;
    
    let  li = document.createElement("li");
    let checkebox = document.createElement("input");
    let labels = document.createElement("label");

    checkebox.setAttribute("type", "checkbox");
    labels.innerHTML = task;
    
    li.appendChild(checkebox);
    li.appendChild(labels);


    let doclist = document.getElementById("incomplete-tasks");
    doclist.appendChild(li);
    
}





function clearAll() {
    const tasks = document.getElementById("completed-tasks");

    tasks.innerHTML ="";

    console.log(tasks);
}

