import React, { Component } from 'react' 
class Menu extends Component{
  static defaultProps= {
    prevHandler: () => {console.log('prev hanlder')},
    stopHandler: () => {console.log('stop hanlder')},
    nextHandler: () => {console.log('next hanlder');}
  }
  render(){
    return (
      <div className='menu'>
        <button onClick={this.props.prevHandler}>prev</button>
        <button onClick={this.props.stopHandler}>stop</button>
        <button onClick={this.props.nextHandler}>next</button>
      </div>
    )
  }
}

export default Menu