function add(num1, num2) {
    console.log([...arguments]);
    return num1 + num2 + arguments[2];

}
const result = add(2, 5, 3, 5);
console.log(result);