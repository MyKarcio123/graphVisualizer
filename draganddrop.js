var state=0
var prevClass="notvisited"
var onClick = function(id){
	return function curried_func(e){
		e.preventDefault();
		if(state==0 && blockMouse!=1){
			var startCoords = id.split("-");
			var y=startCoords[0]
			var x=startCoords[1]
			if(document.getElementById(id).className == "start"){
				document.getElementById(id).className = "notvisited";
				graph[y][x][1]=0;
				state=1
			}else if(document.getElementById(id).className == "end"){
				document.getElementById(id).className = "notvisited";
				graph[y][x][1]=0;
				state=2
			}else if(document.getElementById(id).className == "notvisited" || document.getElementById(id).className == "path" || document.getElementById(id).className == "visited"){
				document.getElementById(id).className = "block";
				graph[y][x][1]=1;
				state=3				
			}else if(document.getElementById(id).className == "block"){
				document.getElementById(id).className = "notvisited";
				graph[y][x][1]=0;
				state=3		
			}
		}
	}
}
var onUp = function(id){
	return function curried_func(e){
		if(blockMouse!=1){
			if(state==1){
				document.getElementById(id).className = "start";
				state=0			
			}			
			else if(state==2){
				document.getElementById(id).className = "end";
				state=0			
			}
			else if(state==3){
				state=0				
			}
		}
	}
}
var onEnter = function(id){
	return function curried_func(e){
	if(blockMouse!=1){
			if(state==1){
				prevClass=document.getElementById(id).className
				document.getElementById(id).className = "start";
			}			
			else if(state==2){
				prevClass=document.getElementById(id).className
				document.getElementById(id).className = "end";
			}
			else if(state==3){
				var startCoords = id.split("-");
				var y=startCoords[0]
				var x=startCoords[1]
				if(document.getElementById(id).className == "notvisited" || document.getElementById(id).className == "path" || document.getElementById(id).className == "visited"){
					document.getElementById(id).className = "block";
					graph[y][x][1]=1;
				}else if(document.getElementById(id).className == "block"){
					document.getElementById(id).className = "notvisited"
					graph[y][x][1]=0;
				}
			}
		}
	}
}	
var onLeave = function(id){
	return function curried_func(e){
	if(blockMouse!=1){
			if(state==1 || state==2){
				document.getElementById(id).className = prevClass;
			}
		}
	}
}