import React from 'react';
import { Map, Marker, NavigationControl, InfoWindow, DrivingRoute } from 'react-bmap';


const simpleMapStyle = {
    // styleJson: [
    //     {
    //         "featureType": "all",
    //         "elementType": "all",
    //         "stylers": {
    //             "lightness": 41,
    //             "saturation": -70
    //         }
    //     }
    // ]
}

export default class BaiduMap extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Map center = {{
                lng: 105.403119,
                lat: 38.028658
            }} 
            zoom = '5' 
            mapStyle={simpleMapStyle}>
            <Marker 
                position={{lng: 116.402544, lat: 39.928216}} 
                icon="simple_red" 
                events={{
                    click: () => {
                        console.log('marker click event');
                    }
                }}
            />
            <Marker position={{lng: 119.0874, lat: 36.665582}} icon="simple_blue" />
            <Marker position={{lng: 112.538537, lat: 37.874899}} icon="loc_blue" />
            <Marker position={{lng: 114.501011, lat: 33.920864}} icon="loc_red" />
            <Marker position={{lng: 109.210063, lat: 34.339622}} icon="start" />
            <Marker position={{lng: 109.430831, lat: 38.211366}} icon="end" />
        </Map>
			</div>
		);
	}
}
