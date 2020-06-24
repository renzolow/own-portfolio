import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

import CardInfo from '../components/CardInfo';

const tooltip = (
    <Tooltip id="tooltip">Click for more info.</Tooltip>
  );

function Card(props) {
    return(
        <div className="d-inline-block g-card" onClick={props.click}>
             <OverlayTrigger trigger="hover" placement="right" overlay={tooltip}>
                 <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
             </OverlayTrigger>
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle}
                link={props.item.link}/>}
        </div>
       
        
    );
}

export default Card;