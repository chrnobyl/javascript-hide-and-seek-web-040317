function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested')
}

function increaseRankBy(n) {
  const rank = document.getElementsByClassName('ranked-list')
  // debugger
  for(var i = 0; i < rank.length; i++) {
    rank[i].innerHTML = i + n
  }
}

function deepestChild() {
  // return document.getElementById('grand-node').querySelector('#grand-node div div div div')
  let current = document.getElementById('grand-node')
  let next = current.children[0]

  while (next) {
    current = next
    next = current.children[0]
  }
  return current

}
  // // let nodeArray = []
  // //
  // // for (let i = 0; i < grandNode.length; i++) {
  // //   nodeArray[i] = grandNode[i]
  // //   for (let i = 0; i < nodeArray.length; i++) {
  // //     if (nodeArray[i].innerHTML) {
  // //       return nodeArray[i]
  // //     }
  // //   debugger
  // }
  //
  //
  //
  //
  //
  // }
  //   // if (nodeArray[i].innerHTML) {
  //   //   return nodeArray[i]
  // //   }
  // // }
