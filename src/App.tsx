// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useState } from "react";
import "./App.css";
// import RecordButton, { Result } from './components/RecordButton'
import { Divider, List, Typography } from "antd";
import RecordButton, { Result } from "./RecordButton";

function App() {
  const [list, setList] = useState<Result[]>([]);

  const onResult = (result: Result) => {
    setList((prev) => [...prev, result]);
  };

  return (
    <div className="App">
      <RecordButton onResult={onResult} />

      <Divider orientation="left">识别记录</Divider>
      <List
        bordered
        dataSource={list}
        renderItem={(item, index) => (
          <List.Item style={{ justifyContent: "flex-start" }}>
            {/* 序号 */}
            <span>[{index + 1}]</span>
            {/* 耗时 */}
            <Typography.Text mark style={{ margin: "0 6px" }}>
              识别耗时：{item.transcribe_time}s
            </Typography.Text>
            {/* 内容 */}
            <span style={{ margin: "0 6px" }}>{item.text}</span>
          </List.Item>
        )}
      />
    </div>
  );
}

export default App;
