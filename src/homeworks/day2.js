// JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
// Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

let findPrimeNumbers = (...numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        let control = 0;
        for (let j = 2; j <= numbers[i]; j++) {
            if (numbers[i] % j == 0) {
                control++;
            }
        }
        if (control == 1) {
            console.log("Sayı asaldır: ", numbers[i])
        }
    }
}

findPrimeNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 3534, 2231, 3453634);


// Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.

let findFriendlyNumber = (number1, number2) => {

    let resultNumber1 = 0;
    let resultNumber2 = 0;

    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            resultNumber1 += i
        }
    }

    for (let j = 1; j < number2; j++) {
        if (number2 % j == 0) {
            resultNumber2 += j
        }
    }
    if (resultNumber1 == number2 && resultNumber2 == number1) {
        console.log("They are friendly number: ", number1, number2)
    } else {
        console.log("They are not friendly number: ", number1, number2)
    }
}

findFriendlyNumber(220, 284)


// 1000'e kadar olan tüm mükemmel sayıları listeleyen programı yazınız.

let findPerfectNumber = (number=1000) => {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        sum = 0;
        for (let j = 1; j < i; j++) {
            if(i % j == 0){
                sum += j;
            }            
        }
        if(sum == i){
            console.log(i + " is perfect number");
        }
    }
}

findPerfectNumber();


// 1000'e kadar olan tüm asal sayıları listeleyen programı yazınız.

let findPrimeNumber = (number=1000) => {
    let control;
    let primeNumbers = [];
    for (let i = 2; i < number; i++) {
        control = 0;
        for (let j = 2; j <= i; j++) {
            if(i % j == 0){
                control++;
            }
        }

        if(control == 1){
            primeNumbers.push(i)
        }
    }
    console.log("Here is the list for prime numbers: ", primeNumbers)
}

findPrimeNumber()