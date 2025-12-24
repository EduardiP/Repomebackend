const button = document.getElementById('getNote');
const result = document.getElementById('noteResult');

button.addEventListener('click', () => {
  fetch('/note')
    .then(res => res.json())
    .then(data => {
      result.textContent = `${data.title}: ${data.content}`;
    })
    .catch(err => {
      result.textContent = 'Error: ' + err;
    });
});
