import React, { Component } from 'react';
import './block.css'
import Config from './config.js'

class Block extends Component{
  render(){
    const alive = this.props.alive
    const wh = Config.blockWidth + 'px'
    const style = {
      width: wh,
      height: wh,
      transitionTransition: Config.circle
    }
    return (
      <div className="block-wapper" style={style}>
        <div className={['block-inner', alive && 'alive'].join(' ')}>
          <div className="popover">{alive}</div>
        </div>
      </div>
    )
  }
}

export default Block