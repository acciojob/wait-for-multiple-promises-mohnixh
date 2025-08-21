 function createPromise() {
            const randomTime = Math.random() * 2 + 1; // 1 to 3 seconds
            
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(randomTime);
                }, randomTime * 1000);
            });
        }

        // Record start time
        const startTime = performance.now();

        // Create the 3 promises
        const promise1 = createPromise();
        const promise2 = createPromise();
        const promise3 = createPromise();

        // Use Promise.all() to wait for all promises
        Promise.all([promise1, promise2, promise3])
            .then((results) => {
                // Calculate total time
                const endTime = performance.now();
                const totalTime = (endTime - startTime) / 1000;

                // Get the tbody element
                const tbody = document.getElementById('output');
                
                // Clear loading row
                tbody.innerHTML = '';

                // Add rows for each promise
                const row1 = document.createElement('tr');
                row1.innerHTML = `<td>Promise 1</td><td>${results[0].toFixed(3)}</td>`;
                tbody.appendChild(row1);

                const row2 = document.createElement('tr');
                row2.innerHTML = `<td>Promise 2</td><td>${results[1].toFixed(3)}</td>`;
                tbody.appendChild(row2);

                const row3 = document.createElement('tr');
                row3.innerHTML = `<td>Promise 3</td><td>${results[2].toFixed(3)}</td>`;
                tbody.appendChild(row3);

                // Add total row
                const totalRow = document.createElement('tr');
                totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)}</td>`;
                tbody.appendChild(totalRow);
            });