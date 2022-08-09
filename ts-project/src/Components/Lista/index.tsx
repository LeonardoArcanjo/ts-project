import style from './Lista.module.scss';
import { ITask } from '../../types/tarefa';
import Item from './Item';

interface Props {
	tasks: ITask[];
	selectTask: (selectedTask: ITask) => void;
}

// Function Component
function Lista({ tasks, selectTask }: Props) {
	// estrutura: NomeFuncao({prop, prop1...}: {prop: tipagem da prop, prop1: tipagem da prop1....})
	return (
		<aside className={style.listaTarefas}>
			<h2>Today Studies</h2>
			<ul>
				{tasks.map((item: ITask) => (
					<Item key={item.id} {...item} selectTask={selectTask} />
				))}
			</ul>
		</aside>
	);
}

export default Lista;
