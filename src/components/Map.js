import React from 'react';
import './Map.css'; 
import * as heatmap from 'heatmap.js';
import dataPoints from './dataPoints.js'
import axios from 'axios'; 


class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataPoints: dataPoints
        }
        this.renderHeatmap = this.renderHeatmap.bind(this);
        this.setRadii = this.setRadii.bind(this);
    }
    
    componentDidMount() {
        this.renderHeatmap();
    }
    componentWillMount() {
        this.setRadii();
    }

    renderHeatmap() {
        const config = {
            container: document.getElementById('schema'),
            blur: 0.6 
        }
        const heatmapInstance = heatmap.create(config);
        const data = [];
        Object.keys(this.state.dataPoints).forEach(point => {
            data.push(this.state.dataPoints[point]);
        })
        heatmapInstance.addData(data)
    }
    setRadii() {
        axios.get('https://polar-bayou-82516.herokuapp.com/last5mins')
            .then((data) => {
                const newState = Object.assign({}, this.state);
                Object.keys(data.data).forEach(sensor => {
                    console.log(sensor);
                    if (data[sensor.toLocaleLowerCase()] < 80) newState.dataPoints[sensor.toLocaleLowerCase()].radius = 1; 
                    else {
                        newState.dataPoints[sensor.toLocaleLowerCase()].radius = parseInt(data[sensor.toLocaleLowerCase()]) * 0.125;
                    }
                })
                return newState
            })
            .then((newState) => {
                this.setState(newState)
            })
            .catch(console.error)
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