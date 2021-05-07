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
        document.querySelector(".js-tasksList").innerHTML = htmlString;
    };
    const init = () => {


        const form = document.querySelector(".js-form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const newTaskContent = document.querySelector(".js-newTask").value.trim();
            if (newTaskContent === "") {
                return;
            };
            tasks.push({
                content: newTaskContent,
            });
            render()
        });
    };
    init();
}