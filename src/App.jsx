/*
 * @Author: zhangfengfei
 * @Date: 2023-05-12 16:01:42
 * @LastEditTime: 2023-05-12 16:49:19
 * @LastEditors: zhangfengfei
 */
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
    </div>
  );
}

export default App;
