import logo from './logo.svg';
import './App.css';
import HomePage from "./components/HomePage";
import {createContext} from  "react";
import {ApiService} from "./ApiService";

export const apiContext = createContext(new ApiService())

function App() {
  return(
      <HomePage/>
  )
}

export default App;
