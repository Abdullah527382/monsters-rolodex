import React from 'react';

import { Card } from '../card/card.component'

import './card-list.styles.css'

// Props has a properties called children which exist between the 
// <CardList></CardList> tags
export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map( monster => (
          <Card key={monster.id} monster={monster} />
          ))}
    </div>
);