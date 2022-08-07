import React from 'react';
import Botao from '../Botao/Botao';
import style from './Formulario.module.scss';

class Formulario extends React.Component {
	render() {
		return (
			<form className={style.novaTarefa}>
				<div className={style.inputContainer}>
					<label htmlFor='task'>Add a new study</label>
					<input
						type='text'
						name='task'
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
						id='time'
						min='00:00:00'
						max='01:30:00'
						required
					/>
				</div>
				<Botao />
			</form>
		);
	}
}

export default Formulario;
