import React from 'react';
import ReactDOM from 'react-dom';
import { TodoContainer } from './components/TodoContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { NotMatch } from './pages/NotMatch';
import { Navbar } from './components/Navbar';
import './App.css';

// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// Component file

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
        {/* <TodoContainer /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
