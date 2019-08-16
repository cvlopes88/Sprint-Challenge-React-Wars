import React from "react";
import { Card } from 'semantic-ui-react';
import { AST_PropAccess } from "terser";

const WarCards = props => {
    return (
    // <div className="warCard" key={AST_PropAccess.height}>
    //     <h2>Name:{props.name}</h2>
    //     <p>Height:{props.height}</p>
    //     <p>Mass:{props.mass}</p>
    //     <p>Hair Color:{props.hairColor}</p>
    //     <p>Skin Color:{props.skinColor}</p>
    //    </div>

<Card>
    <Card.Content header={props.name} />
    <Card.Content extra>
       
    height:<Card.Content description={props.height} />
    
    Mass:<Card.Content description= {props.mass}/>
    Hair Color:<Card.Content description={props.hairColor} />
    Skin Color:<Card.Content description={props.skinColor} />
</Card.Content>
</Card>



    )
}

export default WarCards;