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
            dataPoints: dataPoints
        }
        this.renderHeatmap = this.renderHeatmap.bind(this);
    }
    
    componentDidMount() {
        this.renderHeatmap();
    }

    renderHeatmap() {
        const config = {
            container: document.getElementById('schema'),
            blur: 0.6 
        }
        const heatmapInstance = heatmap.create(config);
        const data = [dataPoints.m4, dataPoints.m17]
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