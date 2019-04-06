import React from 'react';
import { Menu, Icon } from 'antd';

const MenuItem = Menu.Item;

export default class Home extends React.Component {
    render() {
        return (
            <Menu mode="horizontal">
                <MenuItem key="mail1">
                    <Icon type="mail" />Mail
                </MenuItem>
                <MenuItem key="mail2">
                    <Icon type="mail" />Mail2
                </MenuItem>
                <MenuItem key="mail3">
                    <Icon type="mail" />Mail3
                </MenuItem>
                <MenuItem key="mail4">
                    <Icon type="mail" />Mail4
                </MenuItem>
                <MenuItem key="mail5">
                    <Icon type="mail" />Mail5
                </MenuItem>
                <MenuItem key="mail6">
                    <Icon type="mail" />Mail6
                </MenuItem>
            </Menu>
        );
    }
}