import React from 'react';

const Weather = (props) =>{
        return(
            <div className="info">
                {
                    props.temperature && <p className="info-key">temperature :
                     <span className="info-value">{props.temperature}</span>
                    </p>
                }
                {
                    props.city && <p className="info-key">city :
                    <span className="info-value"> {props.city} </span>
                    </p>
                }
                {
                    props.counrty && <p className="info-key">counrty 
                    <span className="info-value">: {props.counrty}</span>
                    </p>
                }
                {
                    props.humidity && <p className="info-key">humidity :
                    <span className="info-value"> {props.humidity} </span>
                    </p>
                }
                {
                    props.description && <p className="info-key">description : 
                    <span className="info-value">{props.description} </span>
                    </p>
                }
                {
                    props.error && <p className="info-key"> error :
                    <span className="info-value"> {props.error} </span>
                    </p>
                }

            </div>
        )
    }                
            
export default Weather ;