// sum of number
let a = 10, b = 20, c = 30;
function Numbers(a, b, c) {
    let sum = a + b + c;
    console.log("Sum is", sum);
}

Numbers(a, b, c);
// larger-number
function LargestNumber(numbers) {
    const largest_Number = Math.max(...numbers);
    console.log("The largest number is: " + largest_Number);
}

LargestNumber([12, 45, 78, 23, 89, 34]);

// check strimg is palindrome or not
function Palindrome(string) {
    const reversed = string.split('').reverse().join('');
    if (string === reversed) {
        console.log("String is a palindrome");
    } else {
        console.log("String is not a palindrome");
    }
}

Palindrome("madam");

// factorial
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    console.log("Factorial of " + n + " is " + result);
}

factorial(5);