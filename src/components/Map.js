import React from 'react';
import './Map.css'; 
import * as heatmap from 'heatmap.js';
import dataPoints from './dataPoints.js'


class Map extends React.Component {
    constructor(props) {
        super(props)
        this.renderHeatmap=this.renderHeatmap.bind(this);
    }
    componentDidMount() {
        this.renderHeatmap();
    }
    renderHeatmap() {
        console.log(heatmap)
        const config = {
            container: document.getElementById('schema'), 
            radius: 10,
            maxOpacity: 0.6, 
            minOpacity: 0
        }
        const heatmapInstance = heatmap.create(config);
        
        const data = []
        for (let key in dataPoints) {
            data.push(dataPoints[key])
        }
        
        heatmapInstance.addData(data)
    }
    render () {
        return (
            <div id="schema" className= "uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style={{backgroundImage:"./GNWSchema.png"}}>
            </div>
        )
    }
}



export default Map