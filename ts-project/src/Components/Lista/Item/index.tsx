import { ITask } from '../../../types/tarefa';
import style from './Item.module.scss';

interface Props extends ITask {
	// o extends funciona como "herança" pegando os atributos de uma interface que já existe
	selectTask: (selectedTask: ITask) => void;
}

export default function Item({
	task,
	time,
	isSelected,
	isComplete,
	id,
	selectTask,
}: Props) {
	return (
		<li
			className={`${style.item} ${isSelected ? style.itemSelecionado : ''}`}
			onClick={() =>
				selectTask({
					task,
					time,
					isSelected,
					isComplete,
					id,
				})
			}
		>
			<h3>{task}</h3>
			<span>{time}</span>
		</li>
	);
}
