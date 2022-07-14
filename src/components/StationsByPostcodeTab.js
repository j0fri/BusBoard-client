import {createContext, useState, useContext, useEffect} from "react";
import logo from "../png-transparent-double-decker-bus-aec-routemaster-london-buses-bus-text-logo-london.png";
import '../App.css';
import {apiContext} from "../App";
import ArrivalDisplay from "./ArrivalDisplay";
import SearchBar from "./SearchBar";
import {postcodeContext} from "./HomePage";
import PostcodesTabFirstSearch from "./PostcodesTabFirstSearch";



//TODO: bouncing bus logo
export default function StationsByPostcodeTab(){
  const apiService = useContext(apiContext);
  const postcode = useContext(postcodeContext)

  const [arrivals1, setArrivals1] = useState([]);
  const [arrivals2, setArrivals2] = useState([]);
  const [stationName1, setStationName1] = useState([]);
  const [stationName2, setStationName2] = useState([]);
  const [output, setOutput] = useState("");
  const [hasStations, setHasStations] = useState(false);

    let formatArrivals = () => {
        console.log("Reloading")
        console.log(arrivals1)
      return (
          <div>
              <ArrivalDisplay title = {"Arrivals at " + stationName1 + ":"} arrivalsList = {arrivals1}/>
              <ArrivalDisplay title = {"Arrivals at " + stationName2 + ":"} arrivalsList = {arrivals2}/>
          </div>
      )
    }

    let getArrivalsByPostcode = (postcode) => {
        apiService.getArrivalsByPostcode(postcode).then((response) => {
            if (response.hasOwnProperty("error")){
                setOutput(response.error)
                setHasStations(false)
            }else{
                console.log(response["stop1"]["buses"])
                setArrivals1(response["stop1"]["buses"])
                setArrivals2(response["stop2"]["buses"])
                setStationName1(response["stop1"]["name"])
                setStationName2(response["stop2"]["name"])
                setHasStations(true)
                //tableIfBuses()
            }
        })
    }

    let refreshArrivals =() => {
        getArrivalsByPostcode(postcode.data);
    }

    let getPostcode = () => {
        return postcode.data;
    }

    let tableIfBuses = () => {
        if (!hasStations){
            return (<div>{output}</div>)
        }
        else{
            return (<div>{formatArrivals()}</div>)
        }
    }

    //TODO: dynamic search bar
    return (
      <div>
          <PostcodesTabFirstSearch getState = {getPostcode} context = {postcodeContext} callWhenSubmit = {refreshArrivals}/>
          {/*<SearchBar getState = {getPostcode} context = {postcodeContext} callWhenSubmit = {refreshArrivals} />*/}
          {tableIfBuses()}

      </div>
  );
}