{
    let tasks = [];
    let hideDoneTasks = false;

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
        tasks = [
            ...tasks.slice(0, taskIndex),
            {
                ...tasks[taskIndex],
                done: !tasks[taskIndex].done,
            },
            ...tasks.slice(taskIndex + 1),
        ];
        render();
    };

    const checkAllTasksDone = () => {
        tasks = tasks.map((task) => ({
            ...task,
            done: true,
        }));

        render();
    };

    const toggleHideDoneTasks = () => {
        hideDoneTasks = !hideDoneTasks;

        render();
    };


    const bindRemoveEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener("click", () => {
                removeTask(taskIndex);
            });
        });
    };


    const bindToggleDoneEvents = () => {
        const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

        toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {
            toggleDoneButtons.addEventListener("click", () => {
                toggleTaskDone(taskIndex);
            });
        });
    };


    const renderTasks = () => {
        let taskToHTML = task => `
            <li class="taskList__item${task.done && hideDoneTasks ? " taskList__item--hidden" : ""}">
                <button class="tasksList__button tasksList__button--toggleDone js-toggledDone">
                    ${ task.done ? "✓" : " "}
                </button>
        <span class=" $ {task.done ? " tasksList__spanTask--done : "" } tasksList__spanTask">
            ${ task.content}
                </span>
        <button class="tasksList__button tasksList__button--remove js-remove">🗑</button>
            </li >
        `;

        const tasksElement = document.querySelector(".js-tasksList");
        tasksElement.innerHTML = tasks.map(taskToHTML).join("");

    };

    const bindButtonsEvents = () => {
        const checkAllDoneButton = document.querySelector("js-checkAllDone");
        if (checkAllDoneButton) {
            checkAllDoneButton.addEventListener("click", checkAllTaskDone);
        }

        const toggleHideDoneTasksButton = document.querySelector(".js-toggleHideDoneTasks");

        if (toggleHideDoneTasksButton) {
            toggleHideDoneTasksButton.addEventListener("click", toggleHideDoneTasks);
        }
    };


    const renderButtons = () => {
        const buttonsElement = document.querySelector(".js-buttons");

        if (!tasks.lenght) {
            buttonsElement.innerHTML = "";
            return;
        };


        buttonsElement.innerHTML = `
        < button class="buttons js-toggleHideDoneTasks" >
            ${ hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
      </button >
        <button
            class="buttons js-checkAllDone"
            ${ tasks.every(({ done }) => done) ? " disabled" : ""}
        >
            Ukończ wszystkie
       </button>
    `;
    };


    const render = () => {
        renderTasks();
        bindRemoveEvents();
        bindToggleDoneEvents();

        renderButtons();
        bindButtonsEvents();

    };



    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        }

        newTaskElement.focus();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);

    };

    init();

}