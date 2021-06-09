//reduce takes a function 
//hmm ele compara o accumulator com o val de 0
//como se vc não precissase criar uma variável com 0
//vc precisa definir um valor inicial pro accumulator
array = [ 5, 4, 1, 2 ,9];


function sum(acc, val){
    console.log(acc)
    return acc+val;

}
let answer = array.reduce(sum, 10)
// console.log(answer)

function findMax(acc,val){
    if(val > acc){
        acc = val;
    }
    return acc;
}
let biggest = vals.reduce(findMax);
console.log(biggest);