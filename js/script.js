/*$(document).ready(function() {
	$('.btn__mod').hover( function(event) {
		$('.item__title,.item__text, .btn__mod, .grid__item, .imgPhone').toggleClass('hover');
	});
});*/
const gridBtns = document.querySelectorAll('.btn__mod');

if(gridBtns.length>0) for(let gridBtn of gridBtns) gridBtn.addEventListener('mouseover',  ()=> {
		const gridItem = gridBtn.closest('.grid__item');
		gridItem.classList.add('hover');
		gridItemChildren = gridItem.childNodes;
		for(let gridItemChild of gridItemChildren){
			if(gridItemChild.classList)gridItemChild.classList.add('hover');
		}
})

	if(gridBtns.length>0) for(let gridBtn of gridBtns) gridBtn.addEventListener('mouseout',  ()=> {
		const hoverElements = document.querySelectorAll('.hover');
		for(let hoverElement of hoverElements)hoverElement.classList.remove('hover');
})
