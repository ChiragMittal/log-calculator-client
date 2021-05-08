# Web Calculator
The frontend applcation of the web calcultor implemented by React.
## Instuctions
* Basic arithmetic operations include '+'(Addition), '-'(Subtraction), 'x'(Multiplication), '÷'(Division), 'CE'(Clear Entry) and 'AC'(All Clear).
* The textbox will show 'Invalid expression' when the expression is invalid, and show 'Infinity' when divide by 0.
* 'Invalid expression' and 'Infinity' would be not be recorded by server. You could use 'AC' to reset the textbox to empty.
* Each valid calculation will be recorded by server, and the update will be broadcasted to all the connected clients immediately.
* The most recent 10 logs with cooresponding timestamp are showed in the right part chronologically from bottom to top.
* For easy checking, you could click the 'Clear' button to empty the logs in the server.
## Link
* [The github repositories for backend server](https://github.com/DongZiyuan/web-calculator-server)
* [Demo that deployed on Heroku](https://web-calculator-server.herokuapp.com/)
