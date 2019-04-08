import React from 'react';

import { Menu, Icon, Layout } from 'antd';

import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import ContentPage from '@/pages/Content';

const { Sider, Header, Footer, Content } = Layout;

export default class DefaultLayout extends React.Component {
  
  render() {
    return (
      <Router>
        <Layout>
          <Sider style={{
            overflow: 'auto', height: '100vh', position: 'fixed', left: 0, background: '#FFF'
          }}>
            <Menu
              onClick={this.handleClick}
              defaultSelectedKeys={["iOS"]}
              mode="inline"
              theme="light"
            >
              <Menu.Item key="iOS"><Link to="/catalogs/iOS"><span>iOS</span></Link></Menu.Item>
              <Menu.Item key="React"><Link to="/catalogs/React"><span>React</span></Link></Menu.Item>
              <Menu.Item key="Flutter"><Link to="/catalogs/Flutter"><span>Flutter</span></Link></Menu.Item>
            </Menu>
          </Sider>

          <Layout style={{ marginLeft: 230 }}>
            <Header style={{ background: '#F0F2F5', padding: 0 }}>
              React + webpack + router + redux
            </Header>
            <Content>
              <Route exact path="/" component={ContentPage} />
              <Route path="/catalogs/:type" component={ContentPage} />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              React + webpack + router + redux
            </Footer>
          </Layout>
        </Layout>
      </Router>
    )
  }
}