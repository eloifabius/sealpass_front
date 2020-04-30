import React, { Component } from 'react'
import PasswordCard from '../components/password_card_component'
import Card from '../components/cards_component'
import Loader from './loader_component'

export default class cards extends Component {
    constructor(props){
        super(props);
        this.state = {
            showLoading: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
           this.setState({showLoading: false}) 
        }, 3000);
    }
    callParent2() {
        //Todo
        console.log("todo")
    }
    render() {
        const { passwords, cards } = this.props;
        return (
            <div>
                {this.state.showLoading && <div className="loaderWrapper"><Loader /><h3>Chargement</h3></div>}
                {!this.state.showLoading && 
                     <div>
                        <div className="title_span"><h4 className="title_text">Passwords</h4></div>
                        <div className="passwords_card_view">
                            {
                                passwords.map(password => <PasswordCard password={password} key={password._id} callParent2={this.callParent2}/>)
                            }
                        </div>
                        <div className="title_span"><h4 className="title_text">Cards</h4></div>
                        <div className="passwords_card_view">
                            {
                                cards.map(card => <Card password={card} key={card.cardId} callParent2={this.callParent2}/>)
                            }
                        </div>
                     </div>  
                }         
            </div>
        )
    }
}
