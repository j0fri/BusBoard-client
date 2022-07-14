import {useContext, useEffect, useState} from "react";

export default function SearchBar(props){
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
        <div>
            <form>
                <label>Bus stop code:{"    "}
                    <input type="text" value={searchBarContents} onChange={(event) => handleStateChange(event)} />
                </label>
            </form>
            <Button text={"Search"} toCall={() => {
                context.data = searchBarContents;
                props.callWhenSubmit();
            }
            }/>
        </div>
    )
}

function Button(props){
    return (
        <button onClick={() => props.toCall()}>
            {props.text}
        </button>
    )
};