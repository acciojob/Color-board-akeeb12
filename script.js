//your JS code here. If required.
let container = document.createElement('div');
container.className = 'container';
for(let i = 0; i <800; i ++){
	let square = document.createElement('div');
	square.className = 'square';
	container.appendChild(square);
}
document.body.appendChild(container);

let square = document.querySelectorAll('.square');
square.forEach(square => {
	square.addEventListener('mouseover', () =>{
		square.style.backgroundColor = 'red';
	setTimeout (() =>{
		square.style.backgroundColor = 'white';
	}, 1000);
});
});






