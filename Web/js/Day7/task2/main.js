import {
    addTaskCallback,
    deleteTaskCallback,
    listTasksCallback,
    addTaskPromise,
    deleteTaskPromise,
    listTasksPromise
} from "./taskStorage.js";

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");


// ==========================================
// 1️⃣ CALLBACK DEMO (Console Only)
// ==========================================

addTaskCallback("Learn JS", (msg) => {
    console.log(msg);
    listTasksCallback((tasks) => {
        console.log("Callback Tasks:", tasks);
    });
});


// ==========================================
// 2️⃣ PROMISE DEMO (Console Only)
// ==========================================

addTaskPromise("Learn Promises")
    .then(msg => {
        console.log(msg);
        return listTasksPromise();
    })
    .then(tasks => {
        console.log("Promise Tasks:", tasks);
    })
    .catch(error => console.log(error));


// ==========================================
// 3️⃣ ASYNC / AWAIT (MAIN UI LOGIC)
// ==========================================

const renderTasks = async () => {
    try {
        const tasks = await listTasksPromise();

        taskList.innerHTML = "";

        tasks.forEach((task, index) => {
            taskList.innerHTML += `
                <li>
                    ${task}
                    <button onclick="deleteTask(${index})">Delete</button>
                </li>
            `;
        });

    } catch (error) {
        message.textContent = `❌ ${error}`;
    }
};


const addTask = async () => {
    try {
        const task = taskInput.value;

        const msg = await addTaskPromise(task);
        message.textContent = msg;

        taskInput.value = "";
        renderTasks();

    } catch (error) {
        message.textContent = `❌ ${error}`;
    }
};


const deleteTask = async (index) => {
    try {
        const msg = await deleteTaskPromise(index);
        message.textContent = msg;
        renderTasks();

    } catch (error) {
        message.textContent = `❌ ${error}`;
    }
};


// Make deleteTask global (for button click)
window.deleteTask = deleteTask;


// Button Event
addBtn.addEventListener("click", addTask);


// Initial Render
renderTasks();