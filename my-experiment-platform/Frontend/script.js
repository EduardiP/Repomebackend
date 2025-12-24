document.getElementById('fetchData').addEventListener('click', async () => {
    const response = await fetch('https://YOUR_BACKEND_URL/data');
    const data = await response.json();

    const list = document.getElementById('dataList');
    list.innerHTML = '';
    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
});

