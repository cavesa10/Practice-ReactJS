import React from 'react'

class HolaMundo extends React.Component {
    render(){
        return (
            <div>
                
                <p>Hola {this.props.nombre} tienes {this.props.edad} años de edad</p>
                <input/>
            </div>
            
        )
    }
}

export default HolaMundo;

