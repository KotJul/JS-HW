const spinner = document.body.querySelector('.lds-ring');
const leftList = document.body.querySelector('#list-left');
const rightList = document.body.querySelector('#done-items');
const form = document.forms[0];

form.addEventListener('submit', function (event) {/*вешаем событие на форму*/
    const data = {/*переменная хранящая данные секшона*/
        text: this.elements.text.value,
        isCompleted: this.elements.isCompleted.checked,
        priority: Number.parseInt(this.elements.priority.value)
    }

    fetch('http://localhost:3000/tasks/create', {/*отправляем запрос*/
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())/*получаем ответ*/
        .then(task => {
            addTask(task)
            console.log(task);
        })

    event.preventDefault();
})

function addToLeft(task) {/*добавление задач*/
    const html = `<li> <input type="checkbox" data-id="${task.id}" aria-label="set completed" > <span class="badge bg-${task.priority === 1 ? 'primary' : task.priority === 2 ? 'warning' : 'danger'}">${task.priority === 1 ? 'low' : task.priority === 2 ? 'medium' : 'high'}</span> <p>${task.text}</p> </li>`
    leftList.insertAdjacentHTML('beforeend', html);

}

function addToRight(task) {
    const html = `<li> <input checked type="checkbox" data-id="${task.id}" aria-label="is completed"> <span class="badge bg-${task.priority === 1 ? 'primary' : task.priority === 2 ? 'warning' : 'danger'}">${task.priority === 1 ? 'low' : task.priority === 2 ? 'medium' : 'high'}</span> <p>${task.text}</p> <button data-id="${task.id}" class="btn btn-danger">delete</button> </li>`
    rightList.insertAdjacentHTML('beforeend', html);
}

function addTask(task) {/*функция выполненых задач в правую сторону иначе в лево*/
    if (task.isCompleted) {
        addToRight(task)
    } else {
        addToLeft(task)
    }
}

setInterval(() => {/*добавление задачи каждые 5 сек*/
    spinner.style.display = 'block';
    fetch('http://localhost:3000/tasks/')
        .then(response => response.json())
        .then(tasks => {/*очистка*/
            leftList.innerHTML = '';
            rightList.innerHTML = '';
            tasks.forEach(task => addTask(task))/*проходимся по всем задачам и возвращаем готовую*/
        })
        .catch(error => {/*перехват ошибок*/
            console.error(error)
        })
        .finally(() => {
            spinner.style.display = 'none';/*крутелка видна каждык 5 секунд*/
        })
}, 5000)

leftList.addEventListener('click', function (event) {/*вешаем событие на левую сторону*/
    if (event.target.tagName === 'INPUT') {/*event.target – это исходный элемент , на котором произошло событие*/
        console.log(event.target);
        const data = {
            id: Number.parseInt(event.target.dataset.id),
            isCompleted: true
        }
        spinner.style.display = 'block';
        fetch('http://localhost:3000/tasks/update', {/*отправляем запрос*/
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(task => {
                event.target.closest('li').remove();
                addToRight(task)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                spinner.style.display = 'none';
            })
    }
})

rightList.addEventListener('click', function (event){
    if(event.target.tagName === 'BUTTON'){
        const data = {
            id: Number.parseInt(event.target.dataset.id),
        }
        spinner.style.display = 'block';
        fetch('http://localhost:3000/tasks/delete', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                if(response.status === 200){
                    event.target.closest('li').remove();/*удаляет готовую задачу при нажатии кнопки удалить*/
                }
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                spinner.style.display = 'none';
            })
    }
})


rightList.addEventListener('click', function (event) {/*при снятии флажка готово, вернет обратно в левую сторону ко всем таскам*/
    if (event.target.tagName === 'INPUT') {
        console.log(event.target);
        const data = {
            id: Number.parseInt(event.target.dataset.id),
            isCompleted: false
        }
        spinner.style.display = 'block';
        fetch('http://localhost:3000/tasks/update', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(task => {
                event.target.closest('li').remove();
                addToLeft(task)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                spinner.style.display = 'none';
            })
    }
})