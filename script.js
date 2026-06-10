let boardMatrix = [[],[],[],[],[],[],[],[]];

function matrixFill(matrix) {
    matrix.forEach((e, e_idx, e_arr) => {
        let val = 0;
        let fill = true;
        if(e_idx % 2 == 0) {val = 0} else {val = 1}
        for(let i=0;i<=7;i++) {
            if(e_idx > 2 && e_idx < 5) {fill = false};
            e.push({"value": val, "filled": fill})
            if(val == 1) {val = 0} else {val = 1}
        }
    });
}

function boardFill(matrix) {
    matrix.forEach((e, e_idx) => {
        e.forEach((f, f_idx) => {
            if(f.value == 0) {
                elementID = `${e_idx}_${f_idx}`;
                board.innerHTML += `<div id="${elementID}" class="box black" onclick="move('${elementID}')"></div>`
                if(f.filled == true) {
                    let element = document.getElementById(elementID); 
                    let txtClass = "";
                    if (e_idx < 3) {txtClass = `green`} else if (e_idx >= 5) {txtClass = `blue`}
                    element.innerHTML += `<div class="filled ${txtClass}"></div>`;
                }
            } else {
                elementID = `${e_idx}_${f_idx}`;
                board.innerHTML += `<div id="${elementID}" class="box white" onclick="move('${elementID}')"></div>`
            }
        });
    });
}

function move(elementID) {
    let element = document.getElementById(elementID); 
    element.classList.add('selected');

    console.log(getColor(elementID));
    console.log(getPos(elementID));
}

function getPos(elementID) {
    let element = document.getElementById(elementID);
    let x = parseInt(elementID[2]) + 1;   
    let y = parseInt(elementID[0]) + 1;

    return {"x": x, "y": y}
}

function getColor(elementID) {
    let element = document.getElementById(elementID);
    if(getPos(elementID).y % 2 == 0) {
        if(getPos(elementID).x % 2 == 0) {
            return 0
        } else {
            return 1
        }
    } else {
        if(getPos(elementID).x % 2 == 0) {
            return 1
        } else {
            return 0
        }
    }
}

matrixFill(boardMatrix);
boardFill(boardMatrix);