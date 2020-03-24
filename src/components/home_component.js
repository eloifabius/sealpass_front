import React, { Component } from 'react'
import "../styles/home_component_style.css"
import PasswordCard from "./password_card_component"
import add from "../assets/images/add.svg"

export default class home_component extends Component {
    constructor() {
        super();
        this.state = {
            passwords: [
                {
                    id: 1,
                    site: "google.fr ",
                    email: "eloifabius@gmail.com",
                    password: "fabiusfabiusfabiusdvvvvfvrrfrvfv"
                },
                {
                    id: 2,
                    site: "uvsq.fr ",
                    email: "eloifabius@gmail.com",
                    password: "fabiusfabiusfabius"
                },
                {
                    id: 3,
                    site: "youtube.fr ",
                    email: "eloifabius@gmail.com",
                    password: "fabiusfabiusfabius"
                },
                {
                    id: 4,
                    site: "twitter.fr ",
                    email: "eloifabius@gmail.com",
                    password: "fabiusfabiusfabius"
                },
                {
                    id: 5,
                    site: "spotify.fr ",
                    email: "eloifabius@gmail.com",
                    password: "fabiusfabiusfabius"
                },
                {
                    id: 6,
                    site: "facebook.fr ",
                    email: "eloifabius@gmail.com",
                    password: "fabiusfabiusfabius"
                }
            ]
        }
    }
    render() {
        const { passwords } = this.state
        return (
            <div className="home_container">
                <div className="addButton"><img src={add} alt="add" className = "add"/></div>
                <div className="control_panel">
                    <div>
                        <h2>My Seal</h2>
                    </div>
                    <div>
                        <span className="grid_view"></span>
                        <span className="list_view"></span>
                    </div>
                </div>
                <div className="title_span"><h4 className="title_text">Passwords</h4></div>
                <div className="passwords_card_view">
                    {
                        passwords.map(password => <PasswordCard password={password} key={password.id} />)
                    }
                </div>
                <div className="title_span"><h4 className="title_text">Cards</h4></div>
                <div className="passwords_card_view">
                    {
                        passwords.map(password => <PasswordCard password={password} key={password.id} />)
                    }
                </div>
            </div>
        )
    }
}
