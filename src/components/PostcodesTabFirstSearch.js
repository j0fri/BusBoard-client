import './PostcodesTabFirstSearch.css';
import {useContext, useEffect, useState} from "react";

export default function PostcodesTabFirstSearch(props){

    const [searchBarContents, setSearchBarContents] = useState("")
    const context = useContext(props.context)

    let handleStateChange = (event) => {
        setSearchBarContents(event.target.value)
        // context.data = event.target.value
    }

    useEffect( () => {
        if (context.data !== "") {
            setSearchBarContents(context.data)
            props.callWhenSubmit()
        }
    }, [])

    return (
        <form className="search-bar">
            <input type="search" name="search" pattern=".*\S.*" value={searchBarContents} onChange={(event) => handleStateChange(event)} required />
                <button className="search-btn" type="button" onClick = {() => {context.data = searchBarContents;
                props.callWhenSubmit();}}>
                    <span>Search</span>
                </button>
        </form>
  );
}