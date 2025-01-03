alert("Tell me truth in the comments and Upvote")

function shuffleArray(arr) {

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
let a = [
    "Fav food", 
    "Celebrity Crush", 
    "Am I Handsome?", 
    "Best friend", 
    "Pizza or burger",
    "Most embarrassing moment",
    "Have you ever used ChatGPT?",
    "What is the biggest secret you're hiding from your parents?",
    "What’s one thing you only do when you’re alone?",
    "Who was your first crush?",
    "What’s your biggest fear?",
    "If you could date one celebrity, who would it be?",
    "Have you ever lied to your parents about something big?",
    "What’s a secret you’ve never told anyone?",
    "If you had to choose, would you save your pet or a stranger?",
    "What’s the most embarrassing thing you’ve ever done in public?",
    "What’s the most childish thing you still do?",
    "Have you ever had a crush on a teacher?",
    "What’s one thing you regret doing?",
    "What’s the worst lie you’ve ever told?",
    "If you could swap lives with someone for a day, who would it be?",
    "What’s the most annoying habit you have?",
    "If you could erase one memory, what would it be?",
    "What’s your guilty pleasure?",
    "Have you ever cheated on a test?",
    "If you were invisible for a day, what’s the first thing you’d do?",
    "What’s the most awkward thing you’ve done on a date?",
    "What’s the weirdest dream you’ve ever had?",
    "If someone gave you a million dollars to break up with your best friend, would you do it?"
];

shuffleArray(a);

let r = a[0];
function truth(){
shuffleArray(a);
            let randomTruth = a[0];
            document.getElementById("results").innerHTML = randomTruth;
}
function shuffleArray(arr) {

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
let a1 = [
    "Eat raw lemon", 
    "Propose your best friend", 
    "Cry for 5 mins", 
    "Comment 'Cool' 5 times in the comment", 
    "Do 20 pushups",
    "Sing a song loudly in front of everyone", 
    "Call your crush and confess your feelings", 
    "Do an impression of your favorite teacher for 2 minutes", 
    "Speak in a fake accent for the next 5 minutes", 
    "Post an embarrassing photo of yourself on social media", 
    "Do a silly dance for 1 minute without music", 
    "Let someone write something on your forehead with a marker", 
    "Wear your clothes inside out for the next 10 minutes", 
    "Talk continuously for 3 minutes without stopping", 
    "Try to lick your elbow", 
    "Do a cartwheel or attempt one", 
    "Draw a mustache on your face with a marker", 
    "Let someone tickle you for 30 seconds", 
    "Text a random number and say 'I love you'", 
    "Hold an ice cube in your hand until it melts", 
    "Let the person next to you style your hair", 
    "Attempt to do 30 squats in a row", 
    "Wear socks on your hands for the next 5 minutes", 
    "Act like a monkey until your next turn", 
    "Balance a book on your head and walk in a straight line"
];

shuffleArray(a1);

let ra = a1[0];
function dare(){
shuffleArray(a1);
            let randomDare = a1[0];
            document.getElementById("results").innerHTML = randomDare;
}
