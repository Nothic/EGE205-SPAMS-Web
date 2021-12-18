import "./App.css";
import "./components/Sidebar.js";
import Sidebar from "./components/Sidebar.js";
import Display from "./components/Display.js";
import io from "socket.io-client";
import Clock from "./components/Clock";

function App() {

  
  return (
    <div className="bg-emerald-900 h-screen">
      <header className="flex bg-emerald-900 text-gray-300 text-xs shadow-xs text-right p-1 justify-end">
        <div className="bg-emerald-800 p-2 m-0 rounded-md">SPAMS WEB 1.1</div>
        <div><Clock poo="pee pee poo poo"/></div>
      </header>
       <div>
      <Sidebar />
      <Display />
      
      </div>
      <footer className="text-center text-gray-300 flex justify-center">
        <div className="bg-emerald-600 rounded-md p-3 m-1">© 2019-2021 Tan Yan Hui <br></br>You are not allowed to reproduce this
        work in any media.</div>
      </footer>
    </div>
  );
}

export default App;
