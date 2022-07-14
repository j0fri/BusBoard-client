import React from "react"
import {createContext, useState, useContext, useEffect} from "react";
import logo from "../png-transparent-double-decker-bus-aec-routemaster-london-buses-bus-text-logo-london.png";
import '../App.css';
import {apiContext} from "../App";
import ArrivalDisplay from "./ArrivalDisplay";
import SearchBar from "./SearchBar";
import ArrivalDisplayTab from "./ArrivalDisplayTab";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {ApiService} from "../ApiService";
import StationsByPostcodeTab from "./StationsByPostcodeTab";

export const postcodeContext = createContext({data: ""})
export const busStopCodeContext = createContext({data: ""})

//TODO: bouncing bus logo
export default function HomePage(){

    //TODO: dynamic search bar
    return (
        <div>
        <div className="App.logo">
             <img src={logo} className="App-logo" alt="logo"/>
        </div>
      <div className="App">
          <div className="tabs">
              <Tabs>

                  <Tab label = "Search by Postcode">
                      <StationsByPostcodeTab />
                  </Tab>
                  <Tab label = "Search by Stop ID">
                      <ArrivalDisplayTab />
                  </Tab>
                {/*<TabList>*/}
                {/*    <Tab>By Postcode</Tab>*/}
                {/*    <Tab>By Bus Stop ID</Tab>*/}
                {/*</TabList>*/}

                {/*<TabPanel>*/}
                {/*    */}
                {/*</TabPanel>*/}
                {/*<TabPanel>*/}
                {/*  <ArrivalDisplayTab />*/}
                {/*</TabPanel>*/}


              </Tabs>

          {/*<ArrivalDisplayTab/>*/}
          </div>
      </div>
        </div>
  );
}

class Tabs extends React.Component{
  state ={
    activeTab: this.props.children[0].props.label
  }
  changeTab = (tab) => {

    this.setState({ activeTab: tab });
  };
  render(){

    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, child =>{
          buttons.push(child.props.label)
          if (child.props.label === this.state.activeTab) content = child.props.children
        })}

        <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
        <div className="tab-content">{content}</div>

      </div>
    );
  }
}

const TabButtons = ({buttons, changeTab, activeTab}) =>{

  return(
    <div className="tab-buttons">
    {buttons.map(button =>{
       return <button className={button === activeTab? 'active': ''} onClick={()=>changeTab(button)}>{button}</button>
    })}
    </div>
  )
}

const Tab = props =>{
  return(
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}