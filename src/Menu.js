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
        <ol>
          <li>如果一个细胞周围有3个细胞为生（一个细胞周围共有8个细胞），则该细胞为生（即该细胞若原先为死，则转为生，若原先为生，则保持不变） 。</li>
          <li>如果一个细胞周围有2个细胞为生，则该细胞的生死状态保持不变；</li>
          <li>在其它情况下，该细胞为死（即该细胞若原先为生，则转为死，若原先为死，则保持不变）</li>
        </ol>
      </div>
    )
  }
}

export default Menu