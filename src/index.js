import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/articles">Articles</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>Articles</h1>
                {this.props.children}
            </div>
        );
    }
}

class Articles extends React.Component {
    render() {
        return (
            <div>
                <h1>Articles</h1>
                {this.props.children}
            </div>
        );
    }
}

render((
    <BrowserRouter>
        <div>
            <Route path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/articles" component={Articles} />
        </div>
    </BrowserRouter>
), document.getElementById('root'))

module.hot.accept();