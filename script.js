const form = document.querySelector("#form-task");
const btnAdd = document.querySelector("#add-task-button");
const task = document.querySelector("#task")
const tasksContainer = document.querySelector(".actual-tasks") 

btnAdd.addEventListener("click", function(e){

    e.preventDefault()

    if (task.value != ""){

        const taskBlock = document.createElement('div');
		taskBlock.classList.add('main-div');

        const task_input = document.createElement('input');
		task_input.classList.add('task-saved');
		task_input.type = 'text';
		task_input.value = task.value;
		task_input.setAttribute('readonly', 'readonly');

		const task_edit = document.createElement('button');
		task_edit.classList.add('edit');
		task_edit.innerText = 'EDIT';

        const task_delete = document.createElement('button');
		task_delete.classList.add('delete');
		task_delete.innerText = 'DELETE';

		taskBlock.appendChild(task_input);
		taskBlock.appendChild(task_edit);
		taskBlock.appendChild(task_delete);

        tasksContainer.appendChild(taskBlock);

        task.value = "";

        task_edit.addEventListener('click', (e) => {
			if (task_edit.textContent.toLowerCase() == "edit") {
				task_edit.textContent = "SAVE";
				task_input.removeAttribute("readonly");
				task_input.focus();
			} else {
				task_edit.textContent = "EDIT";
				task_input.setAttribute("readonly", "readonly");
			}
		});

		task_delete.addEventListener('click', (e) => {
			tasksContainer.removeChild(taskBlock);
		});

    }
})