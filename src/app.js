import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css'
import avatar from './img.png';
export default class Hello extends Component {
	// renderContent = () =>{
	// 	return <h1>
	// 	<img src={avatar} alt="avatar" style={{ width: 400, height: 250 }} />
	// 		Hello from 枫上雾棋!
	// 	</h1>; 
	// }
	
	render() {
		// return this.renderContent
		return <h1>
		<img src={avatar} alt="avatar" style={{ width: 400, height: 250 }} />
			Hello from 枫上雾棋!
		</h1>; 
	}
}

render(<Hello />, document.getElementById('app'));