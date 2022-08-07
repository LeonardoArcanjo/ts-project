import React from 'react';
import style from './Lista.module.scss';

function Lista() {
	const tasks = [
		{
			task: 'React',
			time: '02:00',
		},
		{
			task: 'TypeScript',
			time: '01:00',
		},
		{
			task: 'C#',
			time: '03:30',
		},
	];

	return (
		<aside className={style.listaTarefas}>
			<h2>Today Studies</h2>
			<ul>
				{tasks.map((item, index) => (
					<li key={index} className={style.item}>
						<h3>{item.task}</h3>
						<p>{item.time}</p>
					</li>
				))}
			</ul>
		</aside>
	);
}

export default Lista;
