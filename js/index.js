console.log("hello browser!");

const addTaskButton = document.getElementById("view__addtaskbutton");
const view = document.getElementById("view");

const tasks = [];


const createTaskComponent = () => {
    const container = document.createElement("div");
    const checkbox  = document.createElement("input");
    const text   = document.createElement("input");
    const remove = document.createElement("input");

    container.setAttribute("class", "view__task")
    
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "view__checkbox");

    text.setAttribute("type", "text");
    text.setAttribute("class", "view__textplace");

    remove.setAttribute("type", "button");
    remove.setAttribute("class", "view__removetaskbutton");

    container.appendChild(checkbox);
    container.appendChild(text);
    container.appendChild(remove);

    remove.addEventListener("click", () => {
        container.parentElement.removeChild(container);
        tasks.pop();
    });

    return container;
};

addTaskButton.addEventListener("click", () => {
    const task = createTaskComponent();
    tasks.push(task);
    view.appendChild(task);

    tasks.forEach((value) => { console.log(value)});
});