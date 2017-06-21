import React, { PureComponent } from 'react'

export default class Program extends PureComponent {
  render() {
    return (
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <canvas
          ref={ref => {
            this.canvas = ref
          }}
        />
        hello program
      </div>
    )
  }
}
