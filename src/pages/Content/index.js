import React from 'react';
import { List } from 'antd';

export default class ContentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    const data = [];
    for (let i = 0; i < 20; i++) {
      data.push(`${params.type} Title ${i + 1}`);
    }

    this.setState({
      data
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.match.params.type !== nextProps.match.params.type) {
      const data = [];
      for (let i = 0; i < 20; i++) {
        data.push(`${nextProps.match.params.type} Title ${i + 1}`);
      }
      this.state.data = data;
      return true;
    }
    if (this.state.data.length !== nextState.data.length) {
      return true;
    }
    return false;
  }

  render() {
    const data = this.state ? this.state.data : [];
    return (
      <div style={{ backgroundColor: '#FFFFFF' }}>
        <List
          size="mid"
          bordered
          dataSource={data}
          renderItem={item => {
            return <List.Item>{item}</List.Item>;
          }}
        />
      </div>
    );
  }
}