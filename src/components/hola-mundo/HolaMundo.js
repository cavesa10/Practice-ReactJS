import React from 'react'
import Button from '@material-ui/core/Button';

import './HolaMundo.css'

class HolaMundo extends React.Component {
    render() {
        return (
            <div>
                <h2>Hola {this.props.nombre} tienes {this.props.edad} años de edad</h2>
                <p className={this.props.tipo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ratione explicabo nam, ullam dolores earum cumque reiciendis. Reprehenderit, quidem? Dignissimos natus eveniet, officiis omnis iure deleniti. Iste tenetur expedita ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil perspiciatis repellendus ad impedit! Minima, magni praesentium consectetur qui at perferendis numquam ullam ipsam, pariatur eaque officia. Quo provident asperiores consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nesciunt, alias accusantium tenetur a numquam aut. Fugiat sed sunt at atque? Cumque, quas dolorem! Possimus laudantium vero reiciendis voluptatum assumenda.</p>
                <Button variant="fab" color="secondary">+</Button>
            </div>

        )
    }
}

export default HolaMundo;


