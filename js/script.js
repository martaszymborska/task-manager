{
    const tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };


    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const toggleTaskContentDone = (taskContent, taskIndex) => {
        if (tasks[taskIndex].done) {
            taskContent.classList.add("tasksList__span--done");
        }
    };

    const toggleTaskButtonTextDone = (taskButtonText, taskIndex) => {
        if (task[taskIndex].done) {
            taskButtonText.classList.add("tasksList__buttonSpan--done");
        }
    };


    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const bindContentEvents = () => {
        const taskContents = document.querySelectorAll(".js-tasksContent");
        taskContents.forEach((taskContent, index) => {
            toggleTaskContentDone(taskContent, index);
        });

        const taskButtonTexts = document.querySelectorAll(".js-tasksButtonText");
        taskButtonTexts.forEach((taskButtonTexts, index) => {
            toggleTaskButtonTextDone(taskButtonText, index);
        });
    };


    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
            <li
            class="tasksListItem">
            
            <button class="tasksList__button tasksList__button--done js-done">
            <span class="tasksList_buttonSpan js-tasksButtonText">✔</span>
            </button>
            <span class="tasksList__span js-tasksContent">
            ${task.content}
            </span>
            <button class="tasksList__button tasksList__button--remove js-remove"> 🗑
            </button>
            </li>
            `;
        }

        document.querySelector(".js-tasksList").innerHTML = htmlString;
        bindEvents();
        bindContentEvents();

    };

    const clearInput = (newTask) => {
        newTask.value = "";
        newTask.focus();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        clearInput(newTaskElement);
        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);

    };

    init();
}