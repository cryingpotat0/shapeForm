$(document).ready(function(){
  shapeForm("f(x) = x^2/500", $('.shaped'));

});

var shapeForm = function(fn, div){
  var parser = math.parser();
  parser.eval(fn);
  //console.log(parser.eval(fn))
  var polygonValues = [];

  for(i =0; i<div.width(); i++){
    polygonValues.push(i +"px "+ parser.eval("f(" + i + ")") + "px");
  }
//  console.log(polygonValues.join());
  $('.shaped').css("-webkit-clip-path", "polygon(" + polygonValues.join() + ")");

}
