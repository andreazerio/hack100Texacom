import React from 'react'
import './Map.css'
class Map extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div id="schema" className= "uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style={{backgroundImage:"./GNWSchema.png"}}>
            </div>
        )
    }
}

export default Map