$(document).ready(function() {
var quotes = ["\"Be the CHANGE that you wish to see in the world.\" -Mahatma Gandhi",
"\"The most wasted of days is one without laughter.\" -E.E. Cummings",
"\"Believe you can and you're halfway there.\" -Theodore Roosevelt",
"\"If opportunity doesn't knock, build a door.\" -Milton Berle",
"\"Keep your face always towards the sunshine-and shadows will fall behind you.\" -Walt Whitman",
"\"Surround yourself only with people who are going to take you higher.\" -Oprah Winfrey",
"\"A smooth sea never made a skilled sailor.\" -Franklin D. Roosevelt"
];

console.log(quotes.length);

$('.generate').click(function(){
    var randomQuote = Math.floor(Math.random('quotes') * quotes.length);
      $('.quote-create').text(quotes[randomQuote]);
    });  
});
