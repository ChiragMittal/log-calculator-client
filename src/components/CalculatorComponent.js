const CalculatorComponent = (props) => {
  return (
    <div className='calculator'>
      <div className='result'>
        <p>{ props.value }</p>
      </div>
      <div class="keypad">
    
    <button type="button" class="operator" value="+" onClick={ e => props.onClick(e.target.value) }>+</button>
    <button type="button" class="operator" value="-" onClick={ e => props.onClick(e.target.value) }>-</button>
    <button type="button" class="operator" value="*" onClick={ e => props.onClick(e.target.value) }>&times;</button>
    <button type="button" class="operator" value="/" onClick={ e => props.onClick(e.target.value) }>&divide;</button>

    <button type="button" value="7" onClick={ e => props.onClick(e.target.value) }>7</button>
    <button type="button" value="8" onClick={ e => props.onClick(e.target.value) }>8</button>
    <button type="button" value="9" onClick={ e => props.onClick(e.target.value) }>9</button>
    <button type="button" value="4" onClick={ e => props.onClick(e.target.value) }>4</button>
    <button type="button" value="5" onClick={ e => props.onClick(e.target.value) }>5</button>
    <button type="button" value="6" onClick={ e => props.onClick(e.target.value) }>6</button>
    <button type="button" value="1" onClick={ e => props.onClick(e.target.value) }>1</button>
    <button type="button" value="2" onClick={ e => props.onClick(e.target.value) }>2</button>
    <button type="button" value="3" onClick={ e => props.onClick(e.target.value) }>3</button>
    <button type="button" value="0" onClick={ e => props.onClick(e.target.value) }>0</button>
    
    <button type="button" class="decimal" value="." onClick={ e => props.onClick(e.target.value) }>.</button>
    <button type="button" class="operator" value="all_clear" onClick={ e => props.onClick(e.target.value) }>AC</button>
    <button type="button" class="equal-sign operator" value="=" onClick={ e => props.onClick(e.target.value) }>=</button>
    <button value='Back' className='operator' onClick={ e => props.onClick(e.target.value) }>Back</button>

  </div>
    </div>
  );
}

export default CalculatorComponent;
