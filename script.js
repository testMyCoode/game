let arr = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0]
];

let result = [];

function Game() {
    checkNeighbor(new Point(1, 1), 0);
    console.log(result);
}

Game();

function Point(x, y) {
    this.x = x;
    this.y = y;
    this.value = arr[this.y][this.x]
}

function checkNeighbor(point, parent = 0) {

    if (parent === 0) {
        result.push(point)
    }

    if (parent !== 1) {
        let point1 = stepUp(point);
        if (point1.value === point.value) {
            result.push(point1);
            checkNeighbor(point1, 3)
        }
    }


    if (parent !== 2) {
        let point2 = stepRight(point);
        if (point2.value === point.value) {
            result.push(point2);
            checkNeighbor(point2, 4)
        }
    }

    if (parent !== 3) {
        let point3 = stepDown(point);
        if (point3.value === point.value) {
            result.push(point3);
            checkNeighbor(point3, 1)
        }
    }

    if (parent !== 4) {
        let point4 = stepLeft(point);
        if (point4.value === point.value) {
            result.push(point4);
            checkNeighbor(point4, 2)
        }


    }
}

function stepUp(point) {
    if (point.y >= 0) {
        return new Point(point.x, point.y - 1);
    }
}

function stepRight(point) {
    return new Point(point.x + 1, point.y);
}

function stepDown(point) {
    return new Point(point.x, point.y + 1);
}

function stepLeft(point) {
    return new Point(point.x - 1, point.y + 1);
}


/*
import java.util.ArrayList;
import java.util.List;

public class Game {
    private int[][] field = {
{0, 0, 0, 0, 0},
{0, 0, 0, 0, 0},
{0, 0, 1, 1, 0},
{0, 0, 1, 0, 0},
{0, 0, 0, 0, 0}
};

private List<Point> result = new ArrayList<>();

public Game() {
    turn(new Point(2, 2), 0);
    System.out.println(result);
}

void turn(Point p, int parent){
    if(parent == 0) {
        result.add(p);
    }

    if(parent != 1) {
        Point p1 = stepUp(p);
        if (p1.value == 1) {
            result.add(p1);
            turn(p1, 3);
        }
    }

    if(parent != 2) {
        Point p2 = stepRight(p);
        if (p2.value == 1) {
            result.add(p2);
            turn(p2, 4);
        }
    }

    if(parent != 3) {
        Point p3 = stepDown(p);
        if (p3.value == 1) {
            result.add(p3);
            turn(p3, 1);
        }
    }

    if(parent != 4) {
        Point p4 = stepLeft(p);
        if (p4.value == 1) {
            result.add(p4);
            turn(p4, 2);
        }
    }
}

Point stepUp(Point p){
    return new Point(p.x, p.y - 1);
}

Point stepRight(Point p){
    return new Point(p.x + 1 , p.y);
}

Point stepDown(Point p){
    return new Point(p.x , p.y + 1);
}

Point stepLeft(Point p){
    return new Point(p.x - 1 , p.y );
}

private class Point {
    final int x;
    final int y;
    final int value;

    public Point(int x, int y) {
    this.x = x;
    this.y = y;
    this.value = field[y][x];
}

@Override
public String toString() {
    final StringBuffer sb = new StringBuffer("Point{");
    sb.append("x=").append(x);
    sb.append(", y=").append(y);
    sb.append(", value=").append(value);
    sb.append('}');
    return sb.toString();
}
}
}*/

// function traverseArr(point, parent, arr) {
//     for (let i = 2; i < arr.length; i++) {
//         for (let j = 1; j < arr[i].length; j++) {
//             if (point === arr[i-1][j]) {
//                 console.log('yes')
//             }
//             if (point === arr[i-1][j+1]) {
//                 console.log('yes')
//             }
//             if (point === arr[i][j+1]) {
//                 console.log('yes')
//             }
//             if (point === arr[i+1][j+1]) {
//                 console.log('yes')
//             }
//             // console.log(arr[i][j])
//         }
//     }
//     // if (point === arr[1][1]) {
//     //     console.log('yes')
//     // }
//     // if (point === arr [2][2]) {
//     //     console.log('yes')
//     // }
// }
//
// traverseArr(arr[2][1], null, arr)

