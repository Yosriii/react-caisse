import React from "react" ;

import "./Caisse.css"

class Caisse extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            y: 0 ,
            mantantAchats:0,
        }
    }

    onChangeHandle = (e) => {
        this.setState({
            mantantAchats: e.target.value
        })
    }

    onClickHandle = (e) => {
        this.setState({
            y: Number(this.state.mantantAchats) + Number(this.state.y)
        })
    }

    render(){
        return(
            <div className="container">
                <div className="input-montant">
                    <label htmlFor="montant-achats">Montant d'achats :</label>
                    <input id="montant-achats" type="text" placeholder="Veuillez entrer votre montant" onChange={this.onChangeHandle} />
                    <button onClick={this.onClickHandle}>Ajouter à la caisse</button>
                </div>
                <div className="total-achats">
                    <h2>Prix total des achats :</h2>
                    <h2>{this.state.y}<span>DT</span></h2> 
                </div>
                <div className="total-caisse">
                    <h2>Argent total dans la caisse :</h2>
                    <h2>{this.state.y}<span>DT</span></h2> 
                </div>
                <div className="rest-achats">
                    <h1>25<span>DT</span></h1>
                </div>
            </div>
        )
    }
}

export default Caisse ;