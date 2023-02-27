function areaOfCircle(radius){
    let pi = 3.14
    let area = pi * radius * radius;
    return area;
}



function greatest(a, b, c){
    if (a > b && a > c){
        return a;
    } else if (b > a && b > c){
        return b;
    } else {
        return c;
    }
}

function equal(a, b){
    if (a == b){
        return true;
    } else {
        return false;
    }
}

console.log(areaOfCircle(5));

let a = 2;
let b = 5;
let c = 3;

console.log(greatest(a,b,c))
console.log(equal(a,b))