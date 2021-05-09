const LogComponent = (props) => {
  const log = props.value;
  const queue = log.split('#');
  return (
    <div className='log'>
      <h2 className="logs">Logs</h2>
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
