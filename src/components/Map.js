import React from 'react';
import './Map.css'; 
import * as heatmap from 'heatmap.js';
import dataPoints from './dataPoints.js'
import initialConfig from './initialConfig.js'


class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            config: initialConfig,
            sensorPositions: dataPoints
        }
        this.renderHeatmap = this.renderHeatmap.bind(this);
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
        console.log(heatmapInstance)
        const data = []
        for (let key in dataPoints) {
            data.push(dataPoints[key])
        }
        heatmapInstance.addData(data)
    }

    render () {
        return (
            <div className="uk-container">
            <div id="schema" className= "uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style={{backgroundImage:"./GNWSchema.png"}}>
            </div>
            </div>
        )
    }
}

export default Map