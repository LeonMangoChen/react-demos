import React, { Component } from 'react';
import { Tabs, Select } from 'antd';
import BaiduMap from './../baiduMap/BaiduMap';
import GaodeMap from './../gaodeMap/GaodeMap';
import MobxTodoList from './../mobxTodoList/MobxTodoList';

const TabPane = Tabs.TabPane;

export default class TabBarMoudle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabPosition: 'bottom'
    };
	}

	render() {
		return (
			<div style={{position: 'fixed',bottom: '0px', width: '100%'}}>
        <Tabs tabPosition={this.state.tabPosition}>
          <TabPane tab="Tab 1" key="1"><BaiduMap /></TabPane>
          <TabPane tab="Tab 2" key="2"><GaodeMap /></TabPane>
          <TabPane tab="Tab 3" key="3"><MobxTodoList /></TabPane>
          <TabPane tab="Tab 4" key="4">Content of Tab 4</TabPane>
        </Tabs>
      </div>
		);
	}
}
