import React, { Component } from 'react'

export default class Multiples extends Component {
  render() {
    let mutiples = (num) => {
      let start3 = 3;
      let start5 = 5;
      let three_arr = [];
      let five_arr = [];

      while(start3 < num) {
        three_arr.push(start3);
        start3 = start3 + 3;
      }
      while(start5 < num) {
        five_arr.push(start5);
        start5 = start5 + 5;
      }

      const total_arr = [...three_arr, ...five_arr];
      const total = total_arr.reduce((a, b) => a + b);
      return total;
    }
    return (
      <div style={{'fontSize': '20px', 'paddingBottom': '20px'}}>
        Multiples: {mutiples(1000)}
      </div>
    )
  }
}
