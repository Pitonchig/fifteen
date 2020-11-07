
export function findZeroPosition(data, xSize, ySize) {
  for (let y = 0; y < ySize ; y++){
    for (let x = 0; x < xSize ; x++){
      if(data[y][x] == 0) {
        var position = {x: x, y: y};
        return position;
      }
    }
  }
  return null;
}

export function validateMove(positionX, positionY, moveX, moveY) {
    if (positionX == moveX && positionY == moveY) {
        return false;
    }

    if (!(moveY == positionY && moveX == positionX + 1) &&
        !(moveY == positionY && moveX == positionX - 1) &&
        !(moveX == positionX && moveY == positionY + 1) &&
        !(moveX == positionX && moveY == positionY - 1)) {
            return false;
    }

    return true;
}

export function checkForWin(data, xSize, ySize) {
  for (let y = 0; y < ySize ; y++){
    for (let x = 0; x < xSize ; x++){
      if(data[y][x] != y * xSize + x + 1 &&
        !( x == xSize - 1 && y == ySize - 1 && data[y][x] == 0)) {
            return false;
      }
    }
  }
  return true;
}

export function calcMathSolutionSummForElement(data, xSize, ySize, posX, posY) {
    var result = 0;
    var element = data[posY][posX];
     console.log("[Utils::calcMathSolutionSummForElement] element=" + element);

    if (element == 0) {
        return 0;
    }

    for(let y = posY; y < ySize; y++) {
        for(let x = (y==posY?posX:0); x < xSize; x++) {
            if(data[y][x] != 0 && data[y][x] < element) {
                console.log('pair: ' + element + '-' + data[y][x])
                result++;
            }
        }
    }
    return result;
}

export function hasMathSolution(data, xSize, ySize) {
    console.log("[Utils::hasMathSolution] xSize=" + xSize + ' ySize=' + ySize);
    var result = 0;

    for(let y = 0; y < ySize; y++) {
        for(let x = 0; x < xSize; x++) {
            result =  result + calcMathSolutionSummForElement(data, xSize, ySize, x, y);
        }
    }
    var zero = findZeroPosition(data, xSize, ySize);
    result = result + zero.y + 1;
    console.log('zero row: ' + (zero.y + 1));
    console.log('*summ: ' + result);
    return (result % 2 == 0);
}

export function generateField(xSize, ySize) {
  var field = new Array(ySize);
  var data = new Array(xSize * ySize);
  for (let i = 0; i < xSize * ySize; i++) {
    data[i] = i;
  }
  data = data.sort( () => Math.random() - 0.5 );

  for (let y = 0; y < ySize ; y++){
    let row = new Array(xSize);
    for (let x = 0; x < xSize ; x++){
      var element = data.pop();
      row[x] = element;
    }
    field[y] = row;
  }
  return field;
}
