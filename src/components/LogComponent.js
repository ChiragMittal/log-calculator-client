const LogComponent = (props) => {
  const log = props.value;
  const queue = log.split('#');
  return (
    <div className='log'>
      <ul>
        { queue.map((item) => {
            return <li>{ item }</li>
          }) 
        }
      </ul>
    </div>
  );
}

export default LogComponent;
