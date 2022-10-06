const grid = () => {
    const newDivs = document.createElement('div');
    const divGrid = document.getElementById('container');
    document.body.insertBefore(newDivs, divGrid);
}

grid();