const button = document.getElementById('fruitButton');
const bestFruit = document.getElementById('bestFruit');
const dbFruit = document.getElementById('dbFruit');

button.addEventListener('click', () => {
  fetch('/best-fruit')
    .then(res => res.json())
    .then(data => {
      bestFruit.textContent = data.bestFruit;
    })
    .catch(err => {
      bestFruit.textContent = 'Gabim: ' + err;
    });

  fetch('/random-fruit')
    .then(res => res.json())
    .then(data => {
      dbFruit.textContent = `Fruti nga database: ${data.fruit}`;
    })
    .catch(err => {
      dbFruit.textContent = 'Gabim: ' + err;
    });
});
