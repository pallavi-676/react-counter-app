import React , {useState} from 'react'

const App = () => {

  const [num, setNum] = useState(0);

  function increaseNum() {
    setNum(num + 1);
  }

  function decreaseNum() {
    setNum(num - 1);
  }

  function resetNum() {
    setNum(0);
  }

  function changeNum() {
    setNum(num + 5);
  }


  return (
    <div>
      <h1> {num} </h1>
      <div className='btn-container'>

        <button onClick={increaseNum} > increase </button>
        <button onClick={decreaseNum}> decrease </button>
        <button onClick={resetNum}> reset </button>
        <button onClick={changeNum}> increase by 5 </button>
      </div>
    </div>
    )
}

      export default App



