let buttons = document.querySelectorAll('.rating');
let submitBtn = document.getElementById('submit-btn');
let thankYouState = document.getElementById('thank-you-state');
let ratingState = document.getElementById('rating-state');
let chosenRating = document.getElementById('chosen-rating');

let chosen = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => {
      btn.classList.remove('active');
    })
    button.classList.add('active');
    chosen = true;
    chosenRating.innerHTML = button.value;
  })
})

submitBtn.addEventListener('click', () => {
  if (chosen){
    ratingState.classList.add('hidden-card');
    thankYouState.classList.remove('hidden-card');
  }
})
