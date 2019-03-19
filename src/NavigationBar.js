import React, { Component } from 'react';
import Manager from './Rest';
import './NavigationBar.css'

export {
    TopBar,
    BotBar,
}
class TopBar extends Component {
    render() {
        return (
            <div className="TopBar"></div>
        )
    }
}

class BotBar extends Component{
    b1Click() {
        Manager.goHome()
    }
    b2Click() {
        Manager.goAboutMe()
    }
    render() {
        return (
            <div className="BotBar">
                <nav className="BotBar-nav">
                    <button onClick={(e) => this.b1Click} className="button1">Home</button>
                    <button onClick={(e) => this.b2Click()} className="button2">About me</button>
                    <button className="button3">Portfolio</button>
                </nav>
            </div>
        )
    }
}
