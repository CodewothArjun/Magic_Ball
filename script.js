const displayText=document.querySelector("#result")
const questionInput=document.querySelector("#input");
const resultButton=document.querySelector("#ball8")

const randomAnswer = [
  "It is certain.",
  "Without a doubt.",
  "Yes, definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Absolutely!",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful",
];

const imageList = [
  "background1.jpg",
  "background2.jpeg",
  "background3.jpeg",
  "background4.jpeg",
  "background5.jpeg",
  "background6.jpeg",
  "background7.jpeg",
  "background8.jpeg",
  "background9.jpeg",
  "background10.jpeg",
  "background11.jpeg",
  "background12.jpeg",
  "background13.jpeg",
  "background14.jpeg",
  "background15.jpeg",
  "background16.jpeg",
  "background17.jpeg",
  "background18.jpeg",
  "background19.jpeg",
  "background20.jpeg",
];


function showResult(){
    if (questionInput.value.trim() === "") {
      return; // Exit if input is empty
    }
   
    const randomIndex=Math.floor(Math.random()*randomAnswer.length);
    const randomResponse = randomAnswer[randomIndex];
    displayText.innerText = randomResponse;
  
    // image replacement
    const imageIndex = Math.floor(Math.random() * imageList.length);
    const randomImage = imageList[imageIndex];
    img = document.querySelector("#imgHolder");
    img.src = `./images/${randomImage}`;

}

