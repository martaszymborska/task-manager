{

    const tasks = [
    ];

    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
            <li>
            ${task.content}
            </li>
            `;
        }
        document.querySelector(".js-taskList").innerHTML = htmlString;
    };
    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", (event) => {
        event.preventDefault();
        const newTaskContent = document.querySelector(".js-newTask").nodeValue.trim();
if (newTaskContent === "") {
    return;
}
    });
};
init();
}