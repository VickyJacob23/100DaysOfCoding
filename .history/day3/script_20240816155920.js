// 1. Prompt the user for their name and favorite number
const name = prompt("Enter your name, seeker of coding fortune:");
const favoriteNumber = Number(
  prompt("Enter your favorite number for the mystical calculation:")
);

// 2. Use arithmetic operators to perform "mystical calculations"
const mysticalResult = (favoriteNumber * 3 + 7) % 10;

// 3. Apply comparison operators to determine the coding fortune
let fortune;
if (mysticalResult < 3) {
  fortune = "debugging master";
} else if (mysticalResult >= 3 && mysticalResult < 7) {
  fortune = "algorithm guru";
} else {
  fortune = "coding wizard";
}

// 4 & 5. Craft a personalized message using template literals and implement logical operators
const currentHour = new Date().getHours();
const timeOfDay =
  currentHour < 12 ? "morning" : currentHour < 18 ? "afternoon" : "evening";

const fortuneMessage = `
🔮 Greetings, ${name}! 🔮

In the ${timeOfDay} mists of the coding realm, I see your destiny...

Your mystical number ${mysticalResult} reveals that you shall become a ${fortune}!

${
  mysticalResult % 2 === 0
    ? "The even forces are with you. Expect smooth compilations!"
    : "The odd energies surround you. Embrace the debugging challenges!"
}

${
  favoriteNumber > 7
    ? "Your ambition is high. Great projects lie ahead!"
    : "Your patience is a virtue. Mastery comes with practice!"
}

Remember, young coder: ${
  mysticalResult > 5 ? "Coffee" : "Tea"
} will be your magical potion for late-night coding sessions.

Now go forth and conquer the digital realm! 💻✨
`;

// Display the fortune
console.log(fortuneMessage);
