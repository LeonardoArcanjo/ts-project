import React from 'react';
import { ITask } from '../../types/tarefa';
import Botao from '../Botao/Botao';
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

// Class Component
class Formulario extends React.Component<{
	setTasks: React.Dispatch<React.SetStateAction<Array<ITask>>>;
}> {
	state = {
		task: '',
		time: '00:00',
	};

	selectTime = (evt: { target: HTMLInputElement }) => {
		this.setState({ ...this.state, time: evt.target.value });
	};

	setTask = (evt: { target: HTMLInputElement }) => {
		this.setState({ ...this.state, task: evt.target.value });
	};

	saveNewTask = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // evita que a pagina atualize logo após o onSubmit

		this.props.setTasks((oldTasks) => [
			...oldTasks,
			{
				...this.state,
				isSelected: false,
				isComplete: false,
				id: uuidv4(),
			},
		]);

		this.setState({
			task: '',
			time: '00:00',
		});
	};

	render() {
		return (
			<form className={style.novaTarefa} onSubmit={this.saveNewTask.bind(this)}>
				<div className={style.inputContainer}>
					<label htmlFor='task'>Add a new study</label>
					<input
						type='text'
						name='task'
						value={this.state.task}
						onChange={(e) => this.setTask(e)}
						id='task'
						placeholder='What do you want to study?'
						required
					/>
				</div>
				<div className={style.inputContainer}>
					<label>Time</label>
					<input
						type='time'
						step='1'
						name='time'
						value={this.state.time}
						onChange={(e) => this.selectTime(e)}
						id='time'
						min='00:00:00'
						max='01:30:00'
						required
					/>
				</div>
				<Botao type='submit' />
			</form>
		);
	}
}

export default Formulario;
