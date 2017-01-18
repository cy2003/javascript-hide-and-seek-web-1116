function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  var divs = document.querySelectorAll('#grand-node div')
  return divs[divs.length - 1]
}

function increaseRankBy(n){
  var rankedLists = document.querySelectorAll('.ranked-list')
  for (var i=0; i < rankedLists.length; i++) {
    var num = parseInt(rankedLists[i].innerHTML)
    num += n
    rankedLists[i].innerHTML = '${num}'
  }
}
