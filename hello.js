let power = () => {
    let number_field = document.getElementById('number')
    let x = number_field.value 
    let power_field = document.getElementById('power')
    let y = power_field.value
    let result = power_recursive(x, y)
    document.getElementById('get_power').innerHTML=result
}


// using a loop
let power_result = (x, y) => {
    let result = 1;
    for (let i = 0; i < y; i++){
        result =result* x;
    }
    return result;
}


// using recursion
let power_recursive = (x, y) => {
    let result = 1;
    if (y == 0) {
        return result;
    } else {
        result = x * result;
        result *= power_recursive(x, y - 1);
        return result
    }
}