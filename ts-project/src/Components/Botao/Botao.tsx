import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component<{
	// essa estrutura eh pra indicar que o componente espera PROP(s)
	type?: 'button' | 'submit' | 'reset' | undefined; // a '?' indica que a prop pode ser PASSADA ou NAO
}> {
	render() {
		const { type = 'button' } = this.props;
		return (
			<button type={type} className={style.botao}>
				Adicionar
			</button>
		);
	}
}

export default Botao;
