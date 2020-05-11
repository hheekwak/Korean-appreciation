var Body = {
  setColor:function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor:function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
    if(self.value === '어둡게'){
      Body.setBackgroundColor('rgb(41,41,61)');
      Body.setColor('white');
      self.value = '밝게';
    } else {
      Body.setBackgroundColor('azure');
      Body.setColor('black');
      self.value = '어둡게';
    }
  }
