// taskStorage.js

let tasks = [];

// ===============================
// 1️⃣ CALLBACK VERSION
// ===============================

export const addTaskCallback = (task, callback) => {
    setTimeout(() => {
        tasks.push(task);
        callback("Task Added (Callback)");
    }, 1000);
};

export const deleteTaskCallback = (index, callback) => {
    setTimeout(() => {
        tasks.splice(index, 1);
        callback("Task Deleted (Callback)");
    }, 1000);
};

export const listTasksCallback = (callback) => {
    setTimeout(() => {
        callback(tasks);
    }, 1000);
};


// ===============================
// 2️⃣ PROMISE VERSION
// ===============================

export const addTaskPromise = (task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!task) {
                reject("Task cannot be empty");
            } else {
                tasks.push(task);
                resolve("Task Added (Promise)");
            }
        }, 1000);
    });
};

export const deleteTaskPromise = (index) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (index < 0 || index >= tasks.length) {
                reject("Invalid task index");
            } else {
                tasks.splice(index, 1);
                resolve("Task Deleted (Promise)");
            }
        }, 1000);
    });
};

export const listTasksPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tasks);
        }, 1000);
    });
};