import React, { Component } from 'react';
import './Rest.css';

export class Manager extends Component {
  constructor(props) {
    super(props)
    this.state = Home;
  }
  goAboutMe() {
    this.setState({state:AboutMe})
  };
  render() {
    return (
      <div className="Manager">
      (this.state)
      </div>
    );
  }
}

class Home extends Component {
    constructor(props) {
        super(props)
        this.wholeCode = "I'll just write some code out on this site."
        this.state = {
            index: 0,
            text: "",
        }
        };
    

    componentDidMount(){
        var intervalID = window.setInterval(() => this.tick(), 100)
    }

    tick() {
        this.setState({
            text: this.wholeCode.substr(0, this.state.index++)
        });
    }
    
  render() {
    return (
      <div className="Home">
        <header className="Home-header">Hopefully I'll have something smart to write here in the future</header>
        <span></span>
        <code>But for now {this.state.text}</code>
      </div>
    );
  }
}

class AboutMe extends Component {
  render() {
    return (
      <div className="AboutMe">
      <p>hello</p>
      </div>
    );
  }
}

export default Home