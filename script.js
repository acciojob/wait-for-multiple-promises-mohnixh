//your JS code here. If required.
function createPromise(promiseNumber) {
    const randomTime = Math.random() * 2 + 1;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(randomTime);
        }, randomTime * 1000);
    });
};

const startTime = performance.now();

const promise1 = createPromise(1);
const promise2 = createPromise(2);
const promise3 = createPromise(3);

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        const endTime = performance.now();
        const totalTime = (endTime - startTime) / 1000;

        const tbody = document.getElementById('output');

        tbody.innerHTML = '';

        const row1 = document.createElement('tr');
        row1.innerHTML = `<td>Promise 1</td><td>${results[0].toFixed(3)}</td>`;
        tbody.appendChild(row1);

        const row2 = document.createElement('tr');
        row2.innerHTML = `<td>Promise 2</td><td>${results[1].toFixed(3)}</td>`;
        tbody.appendChild(row2);

        const row3 = document.createElement('tr');
        row3.innerHTML = `<td>Promise 3</td><td>${results[2].toFixed(3)}</td>`;
        tbody.appendChild(row3);

        const totalRow = document.createElement('tr');
        totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)}</td>`;
        tbody.appendChild(totalRow);
    });