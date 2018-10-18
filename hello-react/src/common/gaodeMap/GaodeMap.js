import React from 'react';
import { Map } from 'react-amap';

export default class GaodeMap extends React.Component {

	constructor(props) {
		super(props);
		this.mapCenter = { longitude: 116.403981, latitude: 39.915599 };
	}

	render() {
		return (
			<div style={{width: '100%' ,height: '100vh'}}>
				<Map zoom={5} center={this.mapCenter}/>
			</div>
		);
	}
}
