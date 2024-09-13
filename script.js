// Access the testimonials
let testSlide = document.querySelectorAll(".testItem");
// Access the indicators
let dots = document.querySelectorAll(".dot"); 
// Access the prev and next buttons
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next"); 

var counter = 0;
var deleteInterval;
var isDragging = false;
var startX;
var currentTranslate;
var prevTranslate;
var animationID;
var currentIndex;

// Add click event to the indicators
function switchTest(currentTest) {
  currentTest.classList.add("active");
  var testId = parseInt(currentTest.getAttribute("attr"), 10);
  if (testId > counter) {
    testSlide[counter].style.animation = "next1 0.5s ease-in forwards";
    counter = testId;
    testSlide[counter].style.animation = "next2 0.5s ease-in forwards";
  } else if (testId === counter) {
    return;
  } else {
    testSlide[counter].style.animation = "prev1 0.5s ease-in forwards";
    counter = testId;
    testSlide[counter].style.animation = "prev2 0.5s ease-in forwards";
  }
  updateButtons();
  indicators();
}

// Add and remove active class from the indicators
function indicators() {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[counter].classList.add("active");
}

// Update visibility of prev and next buttons
function updateButtons() {
  prevButton.style.display = counter === 0 ? "none" : "flex";
  nextButton.style.display = counter === testSlide.length - 1 ? "none" : "flex";
}

// Auto sliding functionality
function slideNext() {
  if (counter >= testSlide.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  testSlide[counter].style.animation = "next2 0.5s ease-in forwards";
  testSlide[
    counter === 0 ? testSlide.length - 1 : counter - 1
  ].style.animation = "next1 0.5s ease-in forwards";
  updateButtons();
  indicators();
}

// Previous button functionality
prevButton.addEventListener("click", () => {
  if (counter <= 0) {
    counter = testSlide.length - 1;
  } else {
    counter--;
  }
  testSlide[counter].style.animation = "prev2 0.5s ease-in forwards";
  testSlide[
    counter === testSlide.length - 1 ? 0 : counter + 1
  ].style.animation = "prev1 0.5s ease-in forwards";
  updateButtons();
  indicators();
});

// Next button functionality
nextButton.addEventListener("click", slideNext);

// Initialize
updateButtons();
indicators();
