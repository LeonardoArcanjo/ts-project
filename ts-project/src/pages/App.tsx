import React, { useState } from 'react';
import Formulario from '../Components/Formulario';
import Lista from '../Components/Lista';
import { ITask } from '../types/tarefa';
import style from './App.module.scss';

function App() {
	const [tasks, setTasks] = useState<Array<ITask> | []>([]); // A tipagem de uma variavel pode aceitar mais de um valor

	return (
		<div className={style.AppStyle}>
			<Formulario setTasks={setTasks} />
			<Lista tasks={tasks} />
		</div>
	);
}

export default App;
