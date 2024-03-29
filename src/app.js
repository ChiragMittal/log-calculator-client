import React from 'react';
import './app.css';
import CalculatorComponent from './components/CalculatorComponent';
import LogComponent from './components/LogComponent';
import socketIOClient from 'socket.io-client';
import { evaluate } from 'mathjs';

var socket = socketIOClient('https://log-calculator.herokuapp.com/', {autoConnect: true})
   
	  socket.emit('connection', `Hello`);
	  window.onbeforeunload = function () {
		socket.on("disconnect", () => {

		  });
	   }

class App extends React.Component {
 
constructor(props){
	
	super(props);
   
	this.state = {
		result:'',
		log:'',
	  };

	  socket.on('fromServer', response => {
		this.setState({log:response})
	  });
	  
}


	 click = (value) => {
		switch(value) {
			case 'all_clear':
				this.reset();
				break;
			case '=':
				this.calculate();
				break;
			case 'Back':
				this.backspace();
				break;
			default:
				this.setState({result:`${ this.state.result }${ value }`});
		}
	};

	 calculate = () => {
		try {
			let res = `${ evaluate(this.state.result) }`;
      if(res !== '' )
        socket.emit('fromClient', `${ this.state.result }=${ res }`);
			this.setState({result:res})
			
		} catch (e) {
			this.setState({result:'Invalid Expression'})
		}
	};

	 reset = () => {
		this.setState({result:''})
	};

	 backspace = () => {
	this.setState({result:this.state.result.slice(0, -1)})
	};

render() {
	return (
		<div className='app'>
			<CalculatorComponent value={ this.state.result } onClick={ this.click.bind(this) } />
      		<LogComponent value={ this.state.log }/> 
		</div>
  );
	}	
}

export default App;
