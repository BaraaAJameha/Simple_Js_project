function incrementCounter(counterId) {
  const counter = document.getElementById(counterId);
  counter.innerText = parseInt(counter.innerText) + 1;
}

function resetCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
      counter.innerText = '0';
  });
}