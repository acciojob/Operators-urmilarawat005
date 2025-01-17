        // Calculate the result based on selected operation
        document.getElementById('calculate').addEventListener('click', function () {
            let num1 = parseFloat(document.getElementById('num1').value);
            let num2 = parseFloat(document.getElementById('num2').value);
            let operator = document.getElementById('operator').value;
            let result;

            if (isNaN(num1) || isNaN(num2)) {
                document.getElementById('result').textContent = "Please enter valid numbers.";
                return;
            }

            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        result = "Cannot divide by zero.";
                    } else {
                        result = num1 / num2;
                    }
                    break;
            }

            document.getElementById('result').textContent = `Result: ${result}`;
        });

        // Change the text in the containers when the button is clicked
        document.getElementById('change_text').addEventListener('click', function () {
            const newText = ['Bye', 'Good Bye', 'To', 'Your', 'Class'];
            const divisions = document.querySelectorAll('.division');

            divisions.forEach((div, index) => {
                if (newText[index]) {
                    div.textContent = newText[index];
                }
            });
        });