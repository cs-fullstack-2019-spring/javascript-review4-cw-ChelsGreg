// function main ()
// {
//     problem1();
//     problem2();
//     problem3();
//     problem4();
//     problem5();
// }
// main();


// PROBLEM 1
// Write a JavaScript function that accepts a sentence of words
// all in lowercase, and returns every other word in all caps.
// Hint: see toUppercase()


function problem1() {

    function everyOther(thisStr) {

        var newSentence = thisStr.split(' ');

        for (var i = 0; i < newSentence.length; i++) {
            let newWord = newSentence[i];

            if (i % 2 === 0) {
                newWord = newWord.toUpperCase();
            }
            console.log(newWord);
        }


    }

    everyOther("this sentence should work fine");

}


problem1();


//PROBLEM 2
// Write a JavaScript function that accepts a word in all lowercase
// or in all uppercase, and returns the word in the opposite case.
// Hint: see toLowercase()


// function problem2()
// {
//      var sentUp = prompt("Enter a sentence in lowercase");
//
//     function upperCaseSent(sentUp)
//     {
//         let sentence = (sentUp);
//        return sentence.toUpperCase();
//     }
//
//
//     console.log(upperCaseSent(sentUp));
// }
//
// problem2();


//PROBLEM 3
//Write a JavaScript function to get the first n element(s) of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array.


//
// function problem3()
// {
//
//     let ages = [1, 2, 3, 4, 5, 6];
//
//         function firstN()
//         {
//
//         }
//
//
//
// }
// problem3();