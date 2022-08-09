import Relogio from './Relogio';
import style from './Cronometro.module.scss';
import Botao from '../Botao/Botao';
import { TimeToSeconds } from '../../common/utils/time';
import { ITask } from '../../types/tarefa';
import { useState } from 'react';

interface Props {
	selected: ITask | undefined;
}

export default function Cronometro({ selected }: Props) {
	const [time, setTime] = useState<number>();

	if (selected?.time) {
		setTime(TimeToSeconds(selected.time));
	}

	return (
		<div className={style.cronometro}>
			<p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
			Time: {time}
			<div className={style.relogioWrapper}>
				<Relogio />
			</div>
			<Botao type='submit' />
		</div>
	);
}
