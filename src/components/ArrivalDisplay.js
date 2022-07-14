import {TableContainer} from "./ArrivalDisplayComponents.css";
import './ArrivalDisplayComponents.css';

export default function ArrivalDisplay(props){
    return (
        <div>
            <div>
                <h1 className="ArrivalDisplayTitle">{props.title}</h1>
            </div>
            <div className="table-wrapper">
                <table className="fl-table">
                    <thead>
                    <tr>
                        <th>Line</th>
                        <th>Destination</th>
                        <th>Time to Arrival</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.arrivalsList.map(arrival => (
                            <tr>
                                <td>{arrival.lineID}</td>
                                <td>{arrival.destinationName}</td>
                                <td>{arrival.minsToArrival}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

