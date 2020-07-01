import React from 'react'
import './SeasonDisplay.css'
import Clock from './Clock'


const seasonConfig = {
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'It is chilly',
        iconName: 'snowflake'
    }
}


const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = props => {
    let season = getSeason(props.lat, new Date().getMonth())


    console.log(season)

    console.log(seasonConfig[season])
    
    const { text, iconName } = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>
                {text} 
                
                <Clock />
            </h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    )
}

export default SeasonDisplay