import React, { Component } from 'react';
import '../styles/login_page_component_style.css';
import logo from '../assets/images/logo.png';

export default class login_page_component extends Component {
    render() {
        return (
            <div>
                <div className = "red_line"></div>
                <div className = "login_block">
                    <img src={logo} alt="Logo" />
                    <div className = "sign_up_block">
                        <div className = "title_block">
                            <h3 className="sign_up_title">Sign In</h3>
                        </div>
                        <form>
                            <div className = "input_block">
                                <div className = "login_input"><input type="text" placeholder="Username" className = "inp"/></div>
                                <div className = "login_input"><input type="password" placeholder="Password" className = "inp"/></div>
                                <div className = "login_button_block"><button type="submit" className = "login_button">Login</button></div>
                            </div>
                        </form>
                        <div><h5 className = "text_sign_up">D'ont have an account? <span className = "red_text_sign_up">Sign up</span></h5></div>
                    </div>
                </div>
            </div>
        )
    }
}
