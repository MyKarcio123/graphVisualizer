var body = document.getElementsByTagName("body")[0];
var tbl = document.createElement("table");
var tblBody = document.createElement("tbody");
for (var i = 0; i < 30; i++) {
var row = document.createElement("tr");
row.setAttribute('id',"row "+i);
for (var j = 0; j < 75; j++) {
  var cell = document.createElement("td");
  cell.setAttribute('id', i+"-"+j);
  cell.className = "notvisited";
  cell.addEventListener("mousedown",onClick(i+"-"+j));
  cell.addEventListener("mouseenter",onEnter(i+"-"+j));
  cell.addEventListener("mouseleave",onLeave(i+"-"+j));
  cell.addEventListener("mouseup",onUp(i+"-"+j));
  if(i==12 && j==8){
	cell.className = "start";
  }		  
  if(i==12 && j==60){
	cell.className = "end";
  }
  row.appendChild(cell);
}
tblBody.appendChild(row);
}
tbl.appendChild(tblBody);
body.appendChild(tbl);
tbl.setAttribute("border", "2");