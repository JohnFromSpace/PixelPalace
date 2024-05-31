
document.addEventListener("DOMContentLoaded", function(event){
	const allContainers = document.getElementsByClassName("category-content");
	console.log(allContainers);
	
	const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
	const names=["Borderlands 2", "Draconball Z", "Zelda", "Ghost Recon", "Sims4"];
	
	function makeRows(rows,cols,container){
		container.style.setProperty('--grid-rows', rows);
		container.style.setProperty('--grid-cols', cols);
	
		for(i = 0; i < (rows*cols); i++){
			let gameDiv = document.createElement('div');
			gameDiv.className='game-card';
			let gameImg = document.createElement('img');
			gameImg.src="img/games_logos/" + images[i];
			console.log(gameImg.src);
			gameDiv.appendChild(gameImg);
	
			let gameName = document.createElement('p');
			let text = document.createTextNode(names[i].toUpperCase());
			gameName.appendChild(text);
			gameDiv.appendChild(gameName);
	
			let button = document.createElement('button');
			button.innerHTML="<i class='fas fa-gamepad fa-2x'></i>";
			button.className="btn-play";
			button.title="Invite for game";
			button.onclick = function(){location.href="screen.html";};
			gameDiv.appendChild(button);
	
			container.appendChild(gameDiv);
		};
	};
	for(let i=0; i<allContainers.length; i++)
	{makeRows(1,4, allContainers[i]);}
});

function changeContent(element_id){
	let currentElement = document.getElementById(element_id);
	if(currentElement.innerHTML.includes("Add friend"))
	{	currentElement.innerHTML = "<i class='fas fa-minus'></i>Remove friend";}
	else
	{
		currentElement.innerHTML = "<i class='fas fa-plus'></i>Add friend";
	}

}


