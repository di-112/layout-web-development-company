const gridBtns = document.querySelectorAll('.btn--mod');


if (gridBtns.length > 0) {
    gridBtns.forEach(gridBtn => {
        gridBtn.addEventListener('mouseover', () => {
            const gridItem = gridBtn.closest('.grid__item');
            gridItem.classList.add('hover');
            gridItemChildren = gridItem.childNodes;
            for (let gridItemChild of gridItemChildren) {
                if (gridItemChild.classList) gridItemChild.classList.add('hover');
            }
        })
        gridBtn.addEventListener('mouseout', () => {
            const hoverElements = document.querySelectorAll('.hover');
            for (let hoverElement of hoverElements) hoverElement.classList.remove('hover');
        })
    })
}


