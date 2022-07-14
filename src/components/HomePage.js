import {createContext, useState, useContext, useEffect} from "react";
import logo from "../png-transparent-double-decker-bus-aec-routemaster-london-buses-bus-text-logo-london.png";
import '../App.css';
import {apiContext} from "../App";
import ArrivalDisplay from "./ArrivalDisplay";
import SearchBar from "./SearchBar";
import ArrivalDisplayTab from "./ArrivalDisplayTab";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {ApiService} from "../ApiService";
import StationsByPostcodeTab from "./StationsByPostcodeTab";

export const postcodeContext = createContext({data: ""})
export const busStopCodeContext = createContext({data: ""})

//TODO: bouncing bus logo
export default function HomePage(){

    //TODO: dynamic search bar
    return (
      <div className="App">

          <Tabs>
            <TabList>
              <Tab>By Bus Stop ID</Tab>
              <Tab>By Postcode</Tab>
            </TabList>

            <TabPanel>
              <ArrivalDisplayTab />
            </TabPanel>

            <TabPanel>
                <StationsByPostcodeTab />
            </TabPanel>
          </Tabs>

          {/*<ArrivalDisplayTab/>*/}

      </div>
  );
}
