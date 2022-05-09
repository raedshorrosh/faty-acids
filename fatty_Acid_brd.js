[[jsxgraph  width="800px" height="300px"  input-ref-carbon='carbonRef'  input-ref-double='doubleRef']] JXG.Options.text.cssDefaultStyle = 'direction:ltr; font-family:Arial;';
  JXG.Options.text.highlightCssDefaultStyle = 'direction:ltr';

//board
var board = JXG.JSXGraph.initBoard(divid, {
  boundingbox:[-15, 12, {#xmax#}, -1],
   axis: false,
  showCopyright: false,
  showNavigation: false,
  keepaspectratio: false,
  pan:{enabled:false},
  zoom:{enabled:false},
  resize: {enabled:true}
});
  var findit = function(arr, item) {
  for (var k = 0; isless(k ,arr.length); k++) { if (arr[k][0] == item) {return k} };
  return -1;
  }
var answered=false;

const low = 5,
  high = low+2,
  left = -13;
var x = [left],y;
var initial={#initial#};
if (initial=="low")  {y = [low]} else {y=[high]};
var imup={#img1#}, imdown={#img2#};

var cis = [],
  trans = [];
	var imgcup=[-1.2,4],imgcdown=[2.0,2.8];
	var imgup = board.create('image', [imup, [function(){return imgcup[0]},function(){return imgcup[1] }], [5.5,5.5]],{visible:false});
var imgdown = board.create('image', [imdown, [function(){return imgcdown[0]},function(){return imgcdown[1] }], [5,5]],{visible:false});


var Double=[];
var Carbon=document.getElementById(carbonRef);
var D=document.getElementById(doubleRef);
if (D.value !='') {Double=JSON.parse(D.value);}

var curve = board.create('curve', [x, y],{strokeColor: 'red',strokewidth:3});

if ({#showLength#}=='yes'){  var t1 = board.create('text',[15,0,function(){return " אורך השרשרת: " +x.length}]);}

var addpoint = function() {
//if ((imgup.getAttribute('visible'))||(imgdown.getAttribute('visible'))) {return}
if  (D.value==''){ D.value=JSON.stringify(Double);}
  var temp = (y[y.length - 1] == low) ? high : low;
  var temp2 = x[x.length - 1] + 1;
  y.push(temp);
  x.push(temp2);
}

var removepoint = function() {
if ((imgup.getAttribute('visible'))||(imgdown.getAttribute('visible'))){imgup.setAttribute({visible: false});imgdown.setAttribute({visible: false});} else

  if (y.length == 1) {
if ({#initial#}=='low')  {y[0] = low} else { y[0]=high};
//    y[0] = low;
    x[0] = left;
		}
		else {
    var temp = y[y.length - 1]

    if (y[y.length - 1] == y[y.length - 2]) {
      var temp = cis.pop();
      board.removeObject(temp);
	  } 
	else if (trans.length!=0) {if (trans[trans.length-1][0]==y.length-1) {
		var temp=trans.pop();
	  board.removeObject(temp);
		}
}

   y.pop();
   x.pop();
}
   




}
var addcis = function() {
//if ((imgup.getAttribute('visible'))||(imgdown.getAttribute('visible'))) {return false};
  var temp = y[y.length - 1];
  var temp2 = x[x.length - 1] + (high - low);

  y.push(temp);
  x.push(temp2);
  var last = x.length - 1;
  var tx = x[last];
  var dy = (y[last] == high) ? -0.2 : 0.2;
  var ty = (y[last]) + dy;

  var temp = board.create('segment', [
    [tx, ty],
    [tx - (high - low), ty]
  ], {
    fixed: true,
		strokeColor: 'red'
  });
  cis.push(temp);
board.update();

return true;

}

var addtrans = function() {
  var last = y.length - 1;
  var ty = (y[last] == low) ? high : low;
  var oldY = y[last];
  var tx = x[last];
  var slp = (y[last] == low) ? 1 : -1;
  var dy = 0.2;
  y.push(ty);
  x.push(tx + 1);

  var seg = [];
  if (slp == 1) {
    seg = [
      [tx + dy, oldY],
      [tx + 1, ty - (high-low) * dy]
    ]
  } else {
    seg = [
      [tx, oldY - (high-low) * dy],
      [tx + 1 - dy, ty]
    ]
  }

  var t = board.create('segment', seg, {
    fixed: true,
    strokeColor: 'red'
  });
  trans.push([last + 1, t]);
  board.update();
  return true;
}


var addhead=function(){ 
//if ((imgup.getAttribute('visible'))||(imgdown.getAttribute('visible'))) {return false}
var last=y.length-1;
  if (y[last]==high){
	imgup.setAttribute({visible: true});;
	imgcup[0]=x[last]-1.2;
	imgcup[1]=y[last]-3
	}
	else{
	imgdown.setAttribute({visible: true});
	imgcdown[0]=x[last]-1.05;
	imgcdown[1]=y[last]-2.35
	}
return true;
}

if (Carbon.value !='') {
  for (let i = 1; isless(i, Carbon.value); i++) { 
      var row=findit(Double,i);
     if (row !=-1)  {if (Double[row][1]=='cis') {addcis()} else {addtrans()}} else {addpoint()};
     }
if (Double[Double.length-1]=='COOH') {addhead()};
board.update();  
}
 
  //-------X--------
var xbtnf=function(){
if (answered) {return};
var cNo=Carbon.value;
var cislen=cis.length;
var translen=trans.length;
var rmvHead=false;
 removepoint();
Carbon.value=x.length;
if (x.length ==cNo) {rmvHead=true};
//if (x.length !=cNo){Carbon.value=x.length} else {rmvHead=true};

if ((cislen!=cis.length) || (translen!=trans.length) || rmvHead){
     Double.pop();
     D.value=JSON.stringify(Double);
  }
 
}

//-------C-C--------  
var ccbtnf=function(){
if (answered) {return};
if ((imgup.getAttribute('visible'))||(imgdown.getAttribute('visible'))) {return};
addpoint();
if (Carbon.value=='') {Carbon.value=1};
Carbon.value++;
}  


//-------cis--------
var cisbtnf=  function(){
if (answered) {return};
if ((imgup.getAttribute('visible'))||(imgdown.getAttribute('visible'))) {return};
addcis();

   if (Carbon.value=='') {Carbon.value=1};
   Carbon.value++;
   Double.push([Carbon.value-1,'cis']);
   D.value=JSON.stringify(Double);
}

  
//-------trans--------
 var  transbtnf=function(){
if (answered) {return};
if ((imgup.getAttribute('visible'))||(imgdown.getAttribute('visible'))) {return false};
addtrans();
  if (Carbon.value=='') {Carbon.value=1};
   Carbon.value++;
   Double.push([Carbon.value-1,'trans']);
   D.value=JSON.stringify(Double);
}
  
//-------head--------
var headbtnf= function(){
if (answered) {return};
  if ((imgup.getAttribute('visible'))||(imgdown.getAttribute('visible'))) {return}
  addpoint();Carbon.value=x.length;
  addhead();
  Double.push(['COOH']);
  D.value=JSON.stringify(Double);
}
 
checkAnswer[{#rqm#}] =function() {
answered=true;
}

//document.getElementById(BOARDID0+"_"+headbtnBS.id).style.cursor = "pointer";
//headbtnBS.rendNode.setAttribute("style","cursor: pointer;");
//headbtnBS.rendNode.style.cursor='pointer';
//headbtnBS.rendNode.style.outline= "1px solid transparent";


var bbb=document.getElementById("cx");bbb.id={#rqm#}+"cx";
document.getElementById(bbb.id).onclick =function(){xbtnf();board.update()};

var bbb=document.getElementById("cc");bbb.id={#rqm#}+"cc";
document.getElementById(bbb.id).onclick =function(){ccbtnf();board.update()};

var bbb=document.getElementById("cis");bbb.id={#rqm#}+"cis";
document.getElementById(bbb.id).onclick =function(){cisbtnf();board.update()};
var bbb=document.getElementById("trans");bbb.id={#rqm#}+"trans";
document.getElementById(bbb.id).onclick =function(){transbtnf();board.update()};
var bbb=document.getElementById("carb");bbb.id={#rqm#}+"carb";
document.getElementById(bbb.id).onclick =function(){headbtnf();board.update()};


[[/jsxgraph]]