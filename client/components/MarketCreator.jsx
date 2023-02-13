/**
 * ************************************
 *
 * @module  MarketCreator
 * @author
 * @date
 * @description presentation component that takes user input for new market creation
 *
 * ************************************
 */

import React from 'react';

const MarketCreator = props => {
  // how do we update the store from a presentation component?
  // how do we create the circuit between the store and an input field?\

  function addMarket(e) {
    console.log('here');
    //
    const input = document.getElementById('location-input');
    const value = input.value;
  }
  return (
    <>
      <h1>Create New Market</h1>
      <label htmlFor="location-input">Location: </label>
      <input id="location-input"></input>
      <button onClick={addMarket}>Add Market</button>
    </>
  );
};


export default MarketCreator;