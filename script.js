
// name space
const myApp = {};





// initialize function
myApp.init = function() {
    myApp.quizSubmit();
}

// quiz submit function
myApp.quizSubmit = function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        // value of user input for question one
        const answerOne = $('#gladiator').val();

        // value of user input for question two
        const answerTwo = $('#spiderman').val();
        
        // value of user input for question three
        const answerThree = $('#batman').val();

        
        

        if (answerOne === 'gladiator' && answerTwo === 'spiderman'  && answerThree === 'batman') {
            $('.resultArea').html(`<h2>You are a movie KING/QUEEN!</h2>`);
        } else if (answerOne !== 'gladiator' && answerTwo === 'spiderman' && answerThree === 'batman') {
            $('.resultArea').html(`<h2>You are a movie prince/princess</h2>`);
        } else if (answerOne === 'gladiator' && answerTwo !== 'spiderman' && answerThree === 'batman') {
            $('.resultArea').html(`<h2>You are a movie prince/princess</h2>`);
        } else if (answerOne === 'gladiator' && answerTwo === 'spiderman' && answerThree !== 'batman') {
            $('.resultArea').html(`<h2>You are a movie prince/princess</h2>`);
        } else if (answerOne !== 'gladiator' && answerTwo !== 'spiderman' && answerThree === 'batman') {
            $('.resultArea').html(`<h2>You SUCK</h2>`);
        } else if (answerOne !== 'gladiator' && answerTwo === 'spiderman' && answerThree !== 'batman') {
            $('.resultArea').html(`<h2>You SUCK</h2>`);
        } else if (answerOne === 'gladiator' && answerTwo !== 'spiderman' && answerThree !== 'batman') {
            $('.resultArea').html(`<h2>You SUCK</h2>`);
        } else if (answerOne !== 'gladiator' && answerTwo !== 'spiderman' && answerThree !== 'batman') {
            $('.resultArea').html(`<h2>You SUCK SO MUCH</h2>`);
        }

        // scroll effect on click from here https://stackoverflow.com/questions/47112758/how-to-scroll-down-a-certain-distance-on-click-jquery
        const scroll = $(window).scrollTop();
        $('html, body').animate({ scrollTop: scroll + 100 }) 

    })    
}



// document ready function with initlize function passed through
$(document).ready(function() {

myApp.init();

})