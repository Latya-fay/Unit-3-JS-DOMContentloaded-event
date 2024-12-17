// Your code goes here
// Listen for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
    
    const textElement = document.getElementById("text");
  
    
    textElement.textContent = "This is really cool!";
  });
  
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
  