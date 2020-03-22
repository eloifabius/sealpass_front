import React, { Component } from 'react'

export default class password_card_component extends Component {
    
    render() {
        const { password } = this.props;
        return (
            <div className="card">
                <div className="content">
                    {/* {password.site}
                    {password.email}
                    {password.password} */}
                </div>
            </div>
        )
    }
}
