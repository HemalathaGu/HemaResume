// function LoadJson(file,callback){
//   var a=new XMLHttpRequest();
//   a.overrideMimeType("application/json");
//   a.open("GET",file,true);
//   a.onreadystatechange=funtion(){
//     if(a.readyState==4 && a.status=="200"){
//       callback(a.responseText);
//     }
//   }
//   a.send();
// }
function LoadJson(file,callback) {
  var a=new XMLHttpRequest();
  a.overrideMimeType("application/json");
  a.open("GET",file,true);
  a.onreadystatechange=function(){
    if (a.readyState===4 && a.status=="200") {
      callback(a.responseText);
    }
  }
  a.send();
}
LoadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  careerObject(data.co);
});
var right= document.getElementById('right');
//career:
function careerObject(careerdata) {
  var career=document.createElement("h4");
  career.textContent="Career Object :";
  career.appendChild(document.createElement("HR"));
  var para=document.createElement("p");
  para.textContent=careerdata;
  right.appendChild(career);
  right.appendChild(para);
}
//educational qulification
function education(){
var Educational=document.careerElement("h4");
Educational.textContent="Educational Qualification :";
Educational.appendChild(document.createElement("HR"));
}
