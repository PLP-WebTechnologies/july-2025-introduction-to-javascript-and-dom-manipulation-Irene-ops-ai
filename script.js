// Part 1: Mastering JavaScript Basics
// Variables, conditionals, and user input
document.getElementById("checkAgeBtn").addEventListener("click", function() {
  let age = document.getElementById("userAge").value;

  if (age >= 18) {
    document.getElementById("ageResult").textContent = "✅ You are an adult.";
  } else if (age > 0) {
    document.getElementById("ageResult").textContent = "👶 You are under 18.";
  } else {
    document.getElementById("ageResult").textContent = "⚠️ Please enter a valid age.";
  }
});

//  Part 2: JavaScript Functions
// Function 1: Calculate total
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total cost: ", calculateTotal(200, 3)); // Example

// Function 2: Format a string
function greetUser(name) {
  return `Hello, ${name}! Welcome back.`;
}
console.log(greetUser("Irene"));

//  Part 3: Loops
// Example 1: for loop (print numbers)
document.getElementById("showNumbersBtn").addEventListener("click", function() {
  let numberList = document.getElementById("numberList");
  numberList.innerHTML = ""; // clear list first

  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    numberList.appendChild(li);
  }
});

// Example 2: while loop (countdown)
let countdown = 5;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}

//  Part 4: DOM Interactions
// Interaction 1: Change text content
document.getElementById("title").textContent = "🚀 Mastering JavaScript Fundamentals";

// Interaction 2: Toggle class on button click
document.getElementById("toggleTitleBtn").addEventListener("click", function() {
  document.getElementById("title").classList.toggle("highlight");
});

// Interaction 3: Create a new element dynamically
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was created with JavaScript!";
document.body.appendChild(newPara);
