import React from 'react';
import './Map.css'; 
import * as heatmap from 'heatmap.js';


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
            maxOpacity: 0.6, 
            minOpacity: 0
        }
        const heatmapInstance = heatmap.create(config); 
        let datapoint = {
            x: 100, 
            y: 100, 
            value: 2
        }; 
        heatmapInstance.addData(datapoint)
    }
    render () {
        return (
            <div id="schema" className= "uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style={{backgroundImage:"./GNWSchema.png"}}>
            </div>
        )
    }
}



export default Map