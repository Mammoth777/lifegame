/* 
1． 如果一个细胞周围有3个细胞为生（一个细胞周围共有8个细胞），则该细胞为生（即该细胞若原先为死，则转为生，若原先为生，则保持不变） 。
2． 如果一个细胞周围有2个细胞为生，则该细胞的生死状态保持不变；
3． 在其它情况下，该细胞为死（即该细胞若原先为生，则转为死，若原先为死，则保持不变） 
*/

/**
 * coord: {lt, t, rt, l, r, lb, rb}
 * 坐标 : {左上, 上, 右上, 左, 右, 左下, 右下}
 */
class Ceil{
  constructor(aliveState, index, arr){
    const rowLen = Math.sqrt(arr.length)
    if(!Number.isInteger(rowLen)) throw new Error('开方非整数')
    const leftSide = []
    const rightSide = []
    for(let i = 0; i < rowLen; i++){
      leftSide.push(i * rowLen)
      rightSide.push(i * rowLen + rowLen - 1)
    }
    this.coord = {
      lt: function(){
        let isAlive = 1
        // 在最左边一列
        if(leftSide.includes(index)){
          isAlive = 0
        }else{
          let i = index - rowLen - 1
          if(i < 0 || i > arr.length) isAlive = 0
          isAlive = arr[i]
        }
        return isAlive
      }(),
      t: function() {
        let i = index - rowLen
        if(i < 0 || i > arr.length) return 0
        return arr[i]
      }(),
      rt: function() {
        let isAlive = 1
        if(rightSide.includes(index)){
          isAlive = 0
        }else{
          let i = index - rowLen + 1
          if(i < 0 || i > arr.length) isAlive = 0
          isAlive = arr[i]
        }
        return isAlive
      }(),
      l: function() {
        let isAlive = 1
        if(leftSide.includes(index)){
          isAlive = 0
        }else{
          let i = index - 1
          if(i < 0 || i > arr.length) isAlive = 0
          isAlive = arr[i]
        }
        return isAlive
      }(),
      r: function() {
        let isAlive = 1
        if(leftSide.includes(index)){
          isAlive = 0
        }else{
          let i = index + 1
          if(i < 0 || i > arr.length) isAlive = 0
          isAlive = arr[i]
        }
        return isAlive
      }(),
      lb: function() {
        let isAlive = 1
        if(rightSide.includes(index)){
          isAlive = 0
        }else{
          let i = index + rowLen - 1
          if(i < 0 || i > arr.length) isAlive = 0
          isAlive = arr[i]
        }
        return isAlive
      }(),
      b: function(){
        let i = index + rowLen
        if(i < 0 || i > arr.length) return 0
        return arr[i]
      }(),
      rb: function() {
        let isAlive = 1
        if(rightSide.includes(index)){
          isAlive = 0
        }else{
          let i = index + rowLen + 1
          if(i < 0 || i > arr.length) isAlive = 0
          isAlive = arr[i]
        }
        return isAlive
      }()
    }
    let surrounding = 0
    for (const key in this.coord) {
      if(this.coord[key]) surrounding++
    }
    if(surrounding === 3){
      this.isAlive = 1
    }else if(surrounding === 2){
      this.isAlive = aliveState
    }else{
      this.isAlive = 0
    }
  }
}


function reincarnation(list){
  let tempList = list.map((ele, index, arr) => {
    return new Ceil(ele, index, arr)
  })
  console.log(tempList, 'tmp');
  let resultList = tempList.map( ele => ele.isAlive)
  console.log(resultList)
  return resultList
}

export default reincarnation