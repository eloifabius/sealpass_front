import React, { Component } from 'react'

export default class password_card_component extends Component {
    
    render() {
        const { password } = this.props;
        return (
            <div className="card">
                <div className="content">
                    <div className="content_image_wrapper">

                    </div>
                    <div className="content_text">
                        <h4>{ password.site }</h4>
                        <h5>{ password.email }</h5>
                    </div>
                </div>
            </div>
        )
    }
}
