import React from 'react'
import Block from './Block.js'
import './board.css'
import Config from './config.js'
import reincarnation from './rules.js'

class Board extends React.Component{
  constructor(){
    super()
    this.state = {
      dotList: []
    }
  }
  static defaultProps = {
    boardSize: 25
  }
  componentWillMount () {
    console.log(this, 'component will mount')
    let size = this.props.boardSize
    if(!Number.isInteger(Math.sqrt(size))) return;
    let dotList = new Array(size).fill(0)
    this.setState({
      dotList: dotList.map(ele => Math.random() > .5 ? 1 : 0)
    })
    setInterval(
      () => {
        this.setState({
          dotList: reincarnation(this.state.dotList)
        })
      }, 
      Config.circle)
  }

  render(){
    const dotList = this.state.dotList.map((ele, index) => {
      return <Block alive={ele} key={index} />
    })
    let size = this.props.boardSize
    let wh = Math.sqrt(size) * Config.blockWidth + 'px'
    let style = {
      width: wh,
      height: wh
    }
    return (
      <div className='board' style={style}>
        {
          dotList
        }
      </div>
    )
  }
}

export default Board