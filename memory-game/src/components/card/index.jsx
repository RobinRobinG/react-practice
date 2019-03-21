import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default function Card({
  handleClick, 
  disabled,
  id, 
  flipped, 
  type,
  solved,
  height, 
  width }) {
  return (
    <div 
      className = {`flip-container ${flipped? 'flipped' : ''}`}
      style = {{ width, height }}
      onClick = {() => disabled ? null : handleClick(id)}>
      <div className = "flipper">
        <img alt = "game card"
          style = {{height, width}} 
          className = {flipped? 'card front': 'card back'} 
          src = {flipped || solved ? `/img/${type}.png`: '/img/back.png' } />
      </div>
    </div>
  );
}

Card.propTypes = {
  disabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  solved: PropTypes.bool.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
}