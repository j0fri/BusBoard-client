import {TableContainer} from "./ArrivalDisplayComponents.css";
import './ArrivalDisplayComponents.css';

export default function ArrivalDisplayMultiple(props){
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
                    {props.allArrivals.map(arrivalList => {
                        let busListAtIndicator = arrivalList["arrivals"].map(arrival => (
                                <tr>
                                    <td>{arrival.lineID}</td>
                                    <td>{arrival.destinationName}</td>
                                    <td>{arrival.minsToArrival}</td>
                                </tr>))
                        busListAtIndicator.unshift(<tr className="fl-table-indicator-row"> <td className="fl-table-indicator-row" colSpan="3"><h3>{arrivalList["indicator"]}</h3></td></tr>)
                        return busListAtIndicator
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

