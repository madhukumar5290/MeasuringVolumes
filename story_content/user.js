window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();
var unit = player.GetVar("unit");
var convVal = player.GetVar("convVal");

if(unit=="fluid ounce"){
  floz = fractionize(convVal);
  tsp = fractionize(convVal*6);
  tbsp = fractionize(convVal*2);
  c = fractionize(convVal/8);
  pt = fractionize(convVal/16);
  qt = fractionize(convVal/32);
  gal = fractionize(convVal/128);
  ml = convVal*30;
  l = convVal/33.8;
  newl = Math.round(l*100000)/100000;
}

if(unit=="teaspoon"){
  floz = fractionize(convVal/6);
  tsp = fractionize(convVal);
  tbsp = fractionize(convVal/3);
  c = fractionize(convVal/48);
  pt = fractionize(convVal/96);
  qt = fractionize(convVal/192);
  gal = fractionize(convVal/768);
  ml = convVal*5;
  l = convVal/200;
 newl = Math.round(l*100000)/100000;
}

if(unit=="tablespoon"){
  floz = fractionize(convVal/2);
  tsp = fractionize(convVal*3);
  tbsp = fractionize(convVal);
  c = fractionize(convVal/16);
  pt = fractionize(convVal/32);
  qt = fractionize(convVal/64);
  gal = fractionize(convVal/256);
  ml = convVal*15;
  l = convVal/68;
 newl = Math.round(l*100000)/100000;
}

if(unit=="cup"){
  floz = fractionize(convVal*8);
  tsp = fractionize(convVal*48);
  tbsp = fractionize(convVal*16);
  c = fractionize(convVal);
  pt = fractionize(convVal/2);
  qt = fractionize(convVal/4);
  gal = fractionize(convVal/16);
  ml = convVal*237;
  l = convVal/4.2;
 newl = Math.round(l*100000)/100000;
}

if(unit=="pint"){
  floz = fractionize(convVal*16);
  tsp = fractionize(convVal*96);
  tbsp = fractionize(convVal*32);
  c = fractionize(convVal*2);
  pt = fractionize(convVal);
  qt = fractionize(convVal/2);
  gal = fractionize(convVal/8);
  ml = convVal*473;
  l = convVal/2.1;
 newl = Math.round(l*100000)/100000;
}

if(unit=="quart"){
  floz = fractionize(convVal*32);
  tsp = fractionize(convVal*192);
  tbsp = fractionize(convVal*64);
  c = fractionize(convVal*4);
  pt = fractionize(convVal*2);
  qt = fractionize(convVal);
  gal = fractionize(convVal/4);
  ml = convVal*946;
  l = convVal/1.06;
 newl = Math.round(l*100000)/100000;
}

if(unit=="gallon"){
  floz = fractionize(convVal*128);
  tsp = fractionize(convVal*768);
  tbsp = fractionize(convVal*256);
  c = fractionize(convVal*16);
  pt = fractionize(convVal*8);
  qt = fractionize(convVal*4);
  gal = fractionize(convVal);
  ml = convVal*3785;
  l = convVal*3.84;
 newl = Math.round(l*100000)/100000;
}

if(unit=="milliliter"){
  floz = fractionize(convVal*0.033);
  tsp = fractionize(convVal*0.2);
  tbsp = fractionize(convVal*0.07);
  c = fractionize(convVal/237);
  pt = fractionize(convVal/473);
  qt = fractionize(convVal/946);
  gal = fractionize(convVal/3785);
  ml = convVal;
  l = convVal/1000;
 newl = Math.round(l*100000)/100000;
}

if(unit=="liter"){
  floz = fractionize(convVal*33.8);
  tsp = fractionize(convVal*203);
  tbsp = fractionize(convVal*68);
  c = fractionize(convVal*4.2);
  pt = fractionize(convVal*2.1);
  qt = fractionize(convVal*1.06);
  gal = fractionize(convVal*3.785);
  ml = convVal*1000;
  l = convVal;
 newl = Math.round(l*100000)/100000;
}

if(convVal<=1){
  introtext = convVal + " " + unit + " equals";
}else{
  introtext = convVal + " " + unit + "s equals";
}

player.SetVar("floz",floz);
player.SetVar("tsp",tsp);
player.SetVar("tbsp",tbsp);
player.SetVar("c",c);
player.SetVar("pt",pt);
player.SetVar("qt",qt);
player.SetVar("gal",gal);
player.SetVar("ml",ml);
player.SetVar("l",newl);
player.SetVar("introtext",introtext);

function getFrac(num){
  var a = num;
  var p = 0;
  var q = a;
  while(Math.abs(q-Math.round(q))>0.00001){
    p++;
    q=p/a;
  }
  newFrac = Math.round(q*num) + "/" + Math.round(q);
  return newFrac;
}

function fractionize(num){
  var decimal = num.toString();
  if(decimal.indexOf(".")==1){
    var leftDecimalPart = Math.floor(num);
    var rightDecimalPart = num - Math.floor(num);
    getFrac(rightDecimalPart);
    if (leftDecimalPart==0){
       var newNum = newFrac;
    }else{
       var newNum = leftDecimalPart + " " + newFrac;
    }
  }else{
    var newNum = decimal;
  }
return newNum;
}

}

};
