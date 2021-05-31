{
    let tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            { content: newTaskContent },
        ];
        render();
    };

    const removeTask = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            ...tasks.slice(taskIndex, +1),
        ];
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        const task = tasks[taskIndex];
        tasks = [
            ...tasks.slice(0, taskIndex),
           {...task, done: !tasks[taskIndex].done },
        ];
        render();
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
            <li class="tasksList__item">
              <button class="tasksList__button tasksList__button--done js-done">
                ${task.done ? "✓" : " "}
               </button>
               <span class="tasksList__span
                ${task.done ? "tasksList__span--done\"" : "\""}
                >
                ${task.content}
                </span>
                <button class="tasksList__button tasksList__button--remove js-remove">🗑</button>
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