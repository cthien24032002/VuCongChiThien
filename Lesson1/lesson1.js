var sum_to_n_a = function(n) {
    let result = 0
    for(var i = 1 ; i<=n ; i++){
        result += i
    }
    return `Result A : ${result}`
};
console.log(sum_to_n_a(5)) 

var sum_to_n_a_second = function(n) {
    let result = 0
    for(var i = 0 ; i<n ; i++){
        result += n - i
    }
    return `Result A : ${result}`
};
console.log(sum_to_n_a_second(5)) 

var sum_to_n_b = function(n) {
    const result = n * (n + 1) / 2;
    return `Result B : ${result}`
}

console.log(sum_to_n_b(5));

var sum_to_n_c = function(n) {  // reference
    if (n === 1) {
        return 1;
    } else {
        return n + sum_to_n_c(n - 1);
    }
};
console.log(`Result C : ${sum_to_n_c(5)}`) // recursive