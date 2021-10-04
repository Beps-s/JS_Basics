const form=document.querySelector("form");
const taskInput=document.getElementById("task");
const heading=document.querySelector("h4");
const li=document.createElement("li");
const list=document.querySelector("ul");

li.className="collection-item";
taskInput.value = "";

form.addEventListener("submit", addTask);

function addTask(){
    li.appendChild(document.createTextNode(taskInput.value));
    const link=document.createElement("a");
    link.className="secondary-content red-text text-darken-2";
    link.appendChild(document.createTextNode("X"));
    link.setAttribute("href", "#");
    li.appendChild(link);
    list.appendChild(li);
}