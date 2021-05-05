{

    const tasks = [
    const init = () => {
        {
            content: "mlml",
                done: false,
     };
        {
            content: "mmlm",
                done: false,
    };
        {
            content: "",
                done: false,
    };
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
    }
    document.querySelector(".js-TasksList").innerHTML = htmlString;
};
const init = () => {
    render();
};
init();
}

const form = document.querySelector(".js-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask").nodeValue.trim();
    if (newTaskContent === "") {
        return;
    }
    tasks.push({
        content: newTaskContent,
    });
    render();
};
};

init();
}