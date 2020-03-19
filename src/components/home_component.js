import React, { Component } from 'react'
import "../styles/home_component_style.css"

export default class home_component extends Component {
    render() {
        return (
            <div className="home_container">
                <div className="title_span"><h4 className="title_text">Pawwords</h4></div>
                <div className="passwords_card_view"></div>
                <div className="title_span"><h4 className="title_text">Cards</h4></div>
                <div className="passwords_card_view"></div>
            </div>
        )
    }
}
