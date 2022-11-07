import React from'react';
import ReactDOM from 'react-dom';
const user = {
  firstName: 'Elon',
  lastName:'Musk',
  age: 49
}
const element = (
<div>
  <h1>first name: Elon</h1>
  <h1>last name: Musk</h1>
  <h1>age: 49</h1>
</div>
);
ReactDOM. render(element, document.getElementById( 'root')) ;