import style from './Lista.module.scss';
import { ITask } from '../../types/tarefa';

// Function Component
function Lista({ tasks }: { tasks: Array<ITask> }) {
	// estrutura: NomeFuncao({prop, prop1...}: {prop: tipagem da prop, prop1: tipagem da prop1....})
	return (
		<aside className={style.listaTarefas}>
			<h2>Today Studies</h2>
			<ul>
				{tasks.map((item: ITask, index: number) => (
					<li key={index} className={style.item}>
						<h3>{item.task}</h3>
						<span>{item.time}</span>
					</li>
				))}
			</ul>
		</aside>
	);
}

export default Lista;
