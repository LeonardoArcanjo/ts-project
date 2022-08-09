import React, { useState } from 'react';
import Cronometro from '../Components/Cronometro';
import Formulario from '../Components/Formulario';
import Lista from '../Components/Lista';
import { ITask } from '../types/tarefa';
import style from './App.module.scss';

function App() {
	const [tasks, setTasks] = useState<Array<ITask> | []>([]); // A tipagem de uma variavel pode aceitar mais de um valor
	const [isSelected, setIsSelected] = useState<ITask>();

	const selectTask = (selectedTask: ITask) => {
		setIsSelected(selectedTask);
		setTasks((oldTasks) =>
			oldTasks.map((task) => ({
				...task,
				selected: task.id === selectedTask.id ? true : false,
			}))
		);
	};

	return (
		<div className={style.AppStyle}>
			<Formulario setTasks={setTasks} />
			<Lista tasks={tasks} selectTask={selectTask} />
			<Cronometro selected={isSelected} />
		</div>
	);
}

export default App;
