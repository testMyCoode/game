let arr = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
];

let result = [];

let startPoint = new Point(1, 2);

function Game() {
    checkNeighbor(startPoint, 0);
    console.log(result);
}

Game();

function Point(x, y) {
    this.x = x;
    this.y = y;
    this.value = arr[this.y][this.x]
}

function checkNeighbor(point, parent) {

    if (parent === 0) {
        result.push(point)
    }

    if (parent !== 1) {
        let point1 = stepUp(point);
        if (point1.value === point.value) {

            // loop check if current point isn't duplicated point
            // if duplicated - return result
            for (let i = 0; i < result.length; i++) {
                if (point1.x === result[i].x && point1.y === result[i].y) {
                    return result
                }
            }

            result.push(point1);
            checkNeighbor(point1, 3)
        }
    }

    if (parent !== 2) {
        let point2 = stepRight(point);
        if (point2.value === point.value) {

            for (let i = 0; i < result.length; i++) {
                if (point2.x === result[i].x && point2.y === result[i].y) {
                    return result
                }

            }
            result.push(point2);
            checkNeighbor(point2, 4)
        }
    }

    if (parent !== 3) {
        let point3 = stepDown(point);
        if (point3.value === point.value) {

            for (let i = 0; i < result.length; i++) {
                if (point3.x === result[i].x && point3.y === result[i].y) {
                    return result
                }

            }
            result.push(point3);
            checkNeighbor(point3, 1)
        }
    }

    if (parent !== 4) {
        let point4 = stepLeft(point);
        if (point4.value === point.value) {

            for (let i = 0; i < result.length; i++) {
                if (point4.x === result[i].x && point4.y === result[i].y) {
                    return result
                }

            }
            result.push(point4);
            checkNeighbor(point4, 2)
        }
    }
}

function stepUp(point) {
    if (point.y > 0) {
        return new Point(point.x, point.y - 1);
    }

    return new Point(point.x, point.y);
}

function stepRight(point) {
    return new Point(point.x + 1, point.y);
}

function stepDown(point) {
    if (point.y < 4) {
        return new Point(point.x, point.y + 1);
    }

    return new Point(point.x, point.y);
}

function stepLeft(point) {
    return new Point(point.x - 1, point.y);
}


