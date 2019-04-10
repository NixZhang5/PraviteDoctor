import React from 'react';

import { Menu, Icon, Layout } from 'antd';

import {
  HashRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import ContentPage from '@/pages/Content';

const { Sider, Header, Footer, Content } = Layout;

export default class DefaultLayout extends React.Component {
  state = {
    collapsed: true,
    menus: [
      {
        type: 'iOS',
        name: 'iOS'
      },
      {
        type: 'React',
        name: 'React'
      },
      {
        type: 'Flutter',
        name: 'Flutter'
      }
    ]
  }

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
              {
                this.state.menus.map(item => (
                  <Menu.Item key={item.name} >
                    <Link to={`/catalogs/${item.type}`}><span>{item.name}</span></Link>
                  </Menu.Item>
                ))
              }
            </Menu>
          </Sider>

          <Layout style={{ marginLeft: 230 }}>
            <Header style={{ background: '#F0F2F5', padding: 0 }}>
              React + webpack + router + redux
            </Header>
            <Content>
              <Switch>
                <Route exact path="/" component={ContentPage} />
                <Route path="/catalogs/:type" component={ContentPage} />
              </Switch>
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