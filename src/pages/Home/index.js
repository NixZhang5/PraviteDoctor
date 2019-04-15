import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: 'http://pic1.win4000.com/wallpaper/0/559b8b91b3afa.jpg'
    };
  }

  render() {
    const { imageUrl } = this.state;
    return (
      <div style={{ backgroundColor: '#FFF', position: 'relative' }}>
        <img src={imageUrl} style={{width: '100%', height: '100%'}}/>
        <div style={{position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.5)'}}></div>
        <div style={{position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, color: '#FFF'}}>
          <p>Nix Zhang</p>
          <p>I'm a web developer.</p>
        </div>
      </div>
    );
  }
}