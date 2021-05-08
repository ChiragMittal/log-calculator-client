import React, { useState } from 'react';
import './App.css';
import CalculatorComponent from './components/CalculatorComponent';
import LogComponent from './components/LogComponent';
import socketIOClient from 'socket.io-client';
import { evaluate } from 'mathjs';

var socket = socketIOClient('http://localhost:5000', {autoConnect: true})
   
	  socket.emit('connection', `I am client`);
	  //window.addEventListener("beforeunload", socket.emit('clear logs'));
	  window.onbeforeunload = function () {
		socket.emit('clear logs');
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
  
  //console.log(socket)
//   setTimeout(()=>{
	
// 			//console.log("conncetd "+socket.connected)
// 			console.log(socket.io.lastPing)

// 			if(socket.connected === false && socket.io.readyState.includes('clos')){
// 				socket.emit('clear logs')
// 			}
			
		

//   },200)
  
  //https://log-calculator.herokuapp.com/

  
 

	 click = (value) => {
		switch(value) {
			case '=':
				this.calculate();
				break;
			case 'AC':
				this.reset();
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
