// Implement a method that accepts 3 integer values a, b, c. 
//The method should return true if a triangle can be built with the sides 
//of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c)
{  
    return (a+b>c && a+c>b && b+c>a ? true : false);
}


// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    let newstr = ""
    for(i=0; i<str.length; i++){
        if(str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u" && str[i] !== "A" && str[i] !== "E" && str[i] !== "I" && str[i] !== "O" && str[i] !== "U"){
            newstr += str[i]
        }
    }
    return newstr;
}


// Write a function, persistence, that takes in a positive parameter num 
//and returns its multiplicative persistence, 
//which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num) {
    let numStr = ""
    let times = 0

    while(num/10 >= 1){
        times++
        numStr = num.toString()
        num = 1
        for (i=0; i<numStr.length; i++){
            num *= numStr[i]
        }

    }

    return times
}



// Given two integers a and b, which can be positive or negative, 
//find the sum of all the numbers between including them too and return it. 
//If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2


function GetSum( a,b ){
    let num = 0
    if(a<b){
        for(i=a; i<=b; i++){
            num += i
        }
        return num
    } else if(a>b){
        for(i=b; i<=a; i++){
            num += i
        }
        return num
    } else{
        return a
    }
}

// You are going to be given a word. 
//Your job is to return the middle character of the word. 
//If the word's length is odd, return the middle character. 
//If the word's length is even, return the middle 2 characters.

// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

function getMiddle(s)
{
  return((s.length%2===0) ? s[s.length/2-1] + s[s.length/2] : s[(s.length-1)/2])
}



// This time we want to write calculations using functions and get the results. 
// Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: 
// plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, 
// the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));


function zero() {
    const number1 = 0
    return number1
}
function one() {
    const number1 = 1
    return number1
}
function two() {
    const number1 = 2
    return number1
}
function three() {
    const number1 = 3
    return number1
}
function four() {
    const number1 = 4
    return number1
}
function five() {
    const number1 = 5
    return number1
}
function six() {
    const number1 = 6
    return number1
}
function seven() {
    const number1 = 7
    return number1
}
function eight() {
    const number1 = 8
    return number1
}
function nine() {
    const number1 = 9
    function plus(number2) {
        return number1 + number2
    }
    return plus(number2)
}

function plus() {
    return 5
}
function minus() {
    return number1 - number2
}
function times() {
    return number1 * number2
}
function dividedBy() {
    return number1 / number2
}



// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. 
// Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    let strSingular = ""

    for (i=0; i<string.length; i++){
        if(strSingular.includes(string[i].toLowerCase()) 
        || string[i].toUpperCase().charCodeAt(0)<65 
        || string[i].toUpperCase().charCodeAt(0)>90){
            continue
        } else{
            strSingular +=string[i].toLowerCase()
            console.log(strSingular)
        } 
    }

    return strSingular.length === 26
}

// John works at a clothing store. 
// He has a large pile of socks that he must pair by color for sale. 
// Given an array of integers representing the color of each sock, 
// determine how many pairs of socks with matching colors there are.

// For example, there are n=7 socks with colors ar=[1,2,1,2,1,3,2]. 
// There is one pair of color 1 and one of color 2. 
// There are three odd socks left, one of each color. The number of pairs is 2.

function sockMerchant(n, ar) {
    let numberOfPairs = 0
    for (i=0; i<n; i++){
        for(j=0; j<n; j++){
            if(ar[i] === ar[j] 
            && i !== j 
            && ar[i] !== "undefined"){
                numberOfPairs++
                ar[i] = "undefined"
                ar[j] = "undefined"
            }
        }
    }

    return numberOfPairs
}

// Gary is an avid hiker. He tracks his hikes meticulously, 
// paying close attention to small details like topography. 
// During his last hike he took exactly n steps. 
// For every step he took, he noted if it was an uphill, U, or a downhill, D step. 
// Gary's hikes start and end at sea level and each step up or down represents a 1 unit change in altitude. 
// We define the following terms:
// A mountain is a sequence of consecutive steps above sea level, 
// starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, 
// starting with a step down from sea level and ending with a step up to sea level.
// Given Gary's sequence of up and down steps during his last hike, 
// find and print the number of valleys he walked through.


function countingValleys(n, s) {
    let altitude = 0
    let valley = 0
    
    for(let i=0; i<n; i++){
        if(s[i] === "D"){
            altitude--
            if(altitude === -1){
                valley++
            }
        } else{
            altitude++
        }
    }
    
    return valley
}

// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: 
// a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    const arr = x.split(" ")
    let highestWord = ""
    let wordScore = 0 
    let newWordScore = 0

    for (i=0; i<arr.length; i++){
        newWordScore = 0
        for(j=0; j<arr[i].length; j++){
            newWordScore += arr[i].charCodeAt(j) - 96
        }
        if(newWordScore > wordScore){
            wordScore = newWordScore
            highestWord = arr[i]
        }
    }
    return highestWord
}

// Move the first letter of each word to the end of it, 
// then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    return str.split(" ").map(l => l.match(/[A-Z]/ig) ? l.slice(1,l.length) + l.slice(0,1) + "ay" : l).join(" ")
}


// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive 
// alphabetic characters and numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


function duplicateCount(text){
    text = text.toLowerCase()
    let duplicates = 0, newText = ""
    
    for(i=0; i<text.length-1; i++){
        if(text.substring(i+1).includes(text[i]) && !newText.includes(text[i])) {
            duplicates++ 
            newText +=text[i]
        } 
    }

    return duplicates
}



// For building the encrypted string:
// Take every 2nd char from the string, 
// then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!
// Examples:
// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
// Write two methods:
// function encrypt(text, n)
// function decrypt(encryptedText, n)
// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text.

function encrypt(text, n) {
    
    if(text === null || text.length === 0){
        return text
    } else{
        for(j=0; j<n; j++){
            let secondCh = "", firstCh = ""
            for(i=0; i<text.length; i++) i%2 === 0 ? firstCh += text[i] : secondCh += text[i]
            text = secondCh + firstCh
        }
    
        return text
    }
}

function decrypt(encryptedText, n) {

    if(encryptedText === null || encryptedText.length === 0){
        return encryptedText
    } else{
        for(j=0; j<n; j++){
            let firstCh = encryptedText.substring(encryptedText.length/2, encryptedText.length)
            let secondCh = encryptedText.substring(0, encryptedText.length/2)
            encryptedText = ""
        
            for(i=0; i<firstCh.length; i++){
                encryptedText += firstCh[i]
                typeof secondCh[i] !== "undefined" ? encryptedText += secondCh[i] : secondCh[i]
            }
        }
    
        return encryptedText
    }
}