import React from 'react';

export default class ContentPage extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { match: {params}} = this.props;
    return (
      <div style={{ backgroundColor: '#E6E6E6', textAlign: 'center' }}> Content page {params.type} </div>
    );
  }
}