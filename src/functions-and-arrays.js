// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(n1,n2) {
    let max; 
    if (n1 > n2){
        max = n1;
    }
    else if (n2 > n1){
        max = n2; 
    }
    else {
        max = n1; 
    }
    return max;
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayWords) {
    let longest=''; 
    if (arrayWords.length===0){
        return null;
    }
    for (let i = 0; i < arrayWords.length; i++){
        const word = arrayWords [i]; 
        if (word.length > longest.length){
            longest = word; 
        }
    }
    return longest; 
}

console.log(findLongestWord(words)); 


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    for (let j = 0; j < numbers.length; j++){
        number = numbers [j];
        sum += number;
    }
    return sum;
}
console.log(sumNumbers(numbers));



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    let sum = 0;
    if (numbers2.length===0){
        return 0;
    }
    for (let k = 0; k < numbers2.length; k++){
        number = numbers2 [k];
        sum += number;
    }
    const average = sum / numbers2.length;
    return average;
}
console.log(averageNumbers(numbers2));




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, wordToFind) {
    if (words.length=== 0){
        return null;
    }
    let exist = false; 
    for (let l = 0; l < words.length; l++){
        word = words[l]; 
        if (wordToFind === word){
            exist = true;
        }
    }
    return exist; 
}
console.log(doesWordExist(words2,"matter")); 