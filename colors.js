var body = {
  setcolor:function (color){
    document.querySelector('body').style.color = color;
  },
  setbackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
var links = {
  setcolor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i<alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}
function nightdayhandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night') {
    body.setbackgroundColor('black');
    body.setcolor('white');
    self.value = 'day';
    links.setcolor('powderblue');
  } else {
    body.setbackgroundColor('white');
    body.setcolor('black');
    self.value = 'night';
    links.setcolor ('blue');
  }
}
