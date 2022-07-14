import {createContext, useState, useContext, useEffect} from "react";
import logo from "../png-transparent-double-decker-bus-aec-routemaster-london-buses-bus-text-logo-london.png";
import '../App.css';
import {apiContext} from "../App";
import ArrivalDisplay from "./ArrivalDisplay";
import SearchBar from "./SearchBar";
import {busStopCodeContext, postcodeContext} from "./HomePage";
import PostcodesTabFirstSearch from "./PostcodesTabFirstSearch";



//TODO: bouncing bus logo
export default function ArrivalDisplayTab(){
  const apiService = useContext(apiContext)
  const busStopCode = useContext(busStopCodeContext)

  const [arrivals, setArrivals] = useState([]);
  const [output, setOutput] = useState("");
  const [hasBuses, setHasBuses] = useState(false);

    let formatArrivals = () => {
      return (
          <ArrivalDisplay title={"Arrivals:"} arrivalsList = {arrivals}/>
      )
    }

    let getArrivalsByStopID = (stopID) => {
        apiService.getArrivalsByStopID(stopID).then((response) => {
            if (response.hasOwnProperty("error")){
                setOutput(response.error)
                setHasBuses(false)
            }else{
                if (response.data.length === 0){
                    setOutput("There are no arriving buses.")
                    setHasBuses(false)
                }else{
                    setArrivals(response.data)
                    setHasBuses(true)
                }


            }
        })
    }

    let refreshArrivals =() => {
        getArrivalsByStopID(busStopCode.data);
    }

    let getBusStopCode = () => {
        return busStopCode.data;
    }

    let tableIfBuses = () => {
        if (!hasBuses){
            return (<div>{output}</div>)
        }
        else{
            return (<div>{formatArrivals()}</div>)
        }
    }

    //TODO: dynamic search bar
    return (
      <div className="ArrivalDisplay Tab">
          {/*<SearchBar getState = {getBusStopCode} context = {busStopCodeContext} callWhenSubmit = {refreshArrivals} />*/}
          <PostcodesTabFirstSearch getState = {getBusStopCode} context = {busStopCodeContext} callWhenSubmit = {refreshArrivals}/>
          {tableIfBuses()}

      </div>
  );
}