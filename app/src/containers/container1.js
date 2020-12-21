import React, { Component } from 'react';
import Component1 from '../functional/component1'

class Container1 extends Component{
  Arr1 = [
  {id: 1, text: 'text 1', number: 1},
  {id: 2, text: 'text 2', number: 2},
  {id: 3, text: 'text 3', number: 3},
  {id: 4, text: 'text 4', number: 4},
  {id: 5, text: 'text 5', number: 5}
  ]

renderListItem = () => (
    <div>
    </div>
)


  render() {
console.log("item")
    return (
      <div>
      {this.Arr1.map((item, index)=> (console.log(item)) )}
      </div>

    )}
}

export default Container1;
