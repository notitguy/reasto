import { useState } from 'react';

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    alert(walk ? 'Stop is next' : 'Walk is next');
  }

  return (
    <>
      <button onClick={handleClick} >
        Change to {walk ? 'Stop' : 'Walk'}
      </button>
      <h3 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Walk' : 'Stop'}
      </h3>
    </>
  );
}

// https://react.dev/learn/queueing-a-series-of-state-updates