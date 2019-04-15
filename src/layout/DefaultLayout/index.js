import React from 'react';

import { Menu, Icon, Layout } from 'antd';

import {
  HashRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import Home from '@/pages/Home';

const { Sider, Header, Footer, Content } = Layout;

export default class DefaultLayout extends React.Component {
  state = {
    collapsed: true,
    menus: [
      {
        type: 'home',
        path: 'home',
        name: 'home',
        icon: 'home',
      },
      {
        type: 'user',
        path: 'user',
        name: 'user',
        icon: 'user',
      },
      {
        type: 'setting',
        path: 'setting',
        name: 'setting',
        icon: 'setting',
      }
    ]
  }

  render() {
    return (
      <Router>
        <Layout>
          <Sider
            width={50}
            style={{
              height: '100vh',
              position: 'fixed',
              background: '#FFF'
            }}>
            <Menu
              onClick={this.handleClick}
              defaultSelectedKeys={["iOS"]}
              mode="vertical"
              theme="light"
              style={{ width: 50 }}
              inlineIndent={0}
            >
              {
                this.state.menus.map(item => (
                  <Menu.Item key={item.name}>
                    <Link to={`/${item.type}`}><span><Icon type={item.icon} /></span></Link>
                  </Menu.Item>
                ))
              }
            </Menu>
          </Sider>

          <Layout style={{ marginLeft: 50 }}>
            <Content>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    )
  }
}