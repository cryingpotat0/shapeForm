$(document).ready(function(){
  $('button').click(function(){
    shapeForm("f(x) = " + $('textarea').val(), $('.shaped'));
  })

});

var shapeForm = function(fn, div){
  var parser = math.parser();
  parser.eval(fn);
  console.log(parser.eval("f(0)"));
  var polygonValues = [];

  for(i =0; i<div.width(); i++){
    if(parser.eval("f(" + i + ")") != "Infinity"){
    polygonValues.push(i +"px "+ parser.eval("f(" + i + ")") + "px");
    polygonValues.push(i +"px "+ (parser.eval("f(" + i + ")")+3) + "px");
}
}
//  console.log(polygonValues.join());
  $('.shaped').css("-webkit-clip-path", "polygon(" + polygonValues.join() + ")");

}
