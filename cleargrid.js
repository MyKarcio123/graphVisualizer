function clearGraphWithWalls(){
blockMouse=0;
graph = new Array(30);
	for (var i = 0; i < 30; i++){
		graph[i]=new Array(75)
		for (var j = 0;j<75;j++){
			//distance,visited,parrenty,parrentx
			graph[i][j]=[Infinity,0,0,0]
			var id = i+"-"+j;
			var cell = document.getElementById(id);
			cell.className = "notvisited";
			if(i==12 && j==8){
				cell.className = "start";
				graph[i][j][0]=0;
			}		  
			else if(i==12 && j==60){
				cell.className = "end";
			}
		}
	}
	search = [];
	path = [];
}
function clearGraphWithoutWalls(){
	for (var i = 0; i < 30; i++){
	for (var j = 0;j < 75; j++){
		var id = i+"-"+j;
		var cell = document.getElementById(id);
		if(cell.className == "visited" || cell.className == "path" || cell.className == "notvisited"){
			graph[i][j]=[Infinity,0,0,0];
			cell.className = "notvisited";
		}
		else if(cell.className == "end"){
			graph[i][j]=[Infinity,0,0,0];
			}
		}
	}
	search = [];
	path = [];
	return 1;
}