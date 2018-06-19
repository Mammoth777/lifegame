import React from 'react'
import Block from './Block.js'
import './board.css'
import Config from './config.js'
import reincarnation from './rules.js'
import Menu from './Menu'

class Board extends React.Component{
  constructor(){
    super()
    this.state = {
      dotList: [],
      lifeHistory: [],
      timer: null
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
    dotList = dotList.map(ele => Math.random() > .5 ? 1 : 0)
    // dotList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let history = this.state.lifeHistory
    history.push(dotList)
    this.setState({
      dotList,
      lifeHistory: history
    })
    const currentComp = this
    const timer =
    setInterval(
      () => {
        // 全部挂了
        if(!this.state.dotList.reduce((prev, curr) => {return curr += prev})) {
          clearInterval(this.state.timer)
          return
        }
        let newList = reincarnation(this.state.dotList)
        // 保持现状
        if(newList.join('') === this.state.dotList.join('')) {
          clearInterval(this.state.timer)
          return
        }
        history = currentComp.state.lifeHistory
        history.push(newList)
        this.setState({
          lifeHistory: history,
          dotList: newList
        })
      },
      Config.circle)
    this.setState({timer})
  }

  prevHandler(){
    clearInterval(this.state.timer)
    let history = this.state.lifeHistory
    if(history.length === 1) return
    this.setState({
      dotList: history[history.length - 1],
      lifeHistory: history.slice(0, history.length - 1)
    })
  }

  stopHandler(){
    clearInterval(this.state.timer)
  }

  nextHandler(){
    alert('还没写呢');
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
        <Menu className='menu' prevHandler={this.prevHandler.bind(this)} stopHandler={this.stopHandler.bind(this)} nextHandler={this.nextHandler.bind(this)}/>
        <ol>
          {
            this.state.lifeHistory.map( (ele, index) => {
              return <li key={index}>{ele.join(' ')}</li>
            })
          }
        </ol>
      </div>
    )
  }
}

export default Board