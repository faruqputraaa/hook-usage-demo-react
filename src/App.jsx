import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {setCount(count + 1);
  }
  
  useEffect(() => {
    console.log("Counter berubah: ", count);
  }, [count]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Hooks Tutorial</h1>

      <p>Belajar useState dan useEffect</p>
      <p>Counter : {count}</p>
      <button onClick={increment}>Tambah</button>
    </div>
  );
}

export default App;