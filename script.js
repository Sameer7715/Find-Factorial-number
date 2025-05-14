document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('numberInput');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');
    
    calculateBtn.addEventListener('click', calculateFactorial);
    numberInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calculateFactorial();
        }
    });
    
    function calculateFactorial() {
        const number = parseInt(numberInput.value);
        
        // Validate input
        if (isNaN(number) || number < 0) {
            showResult('Please enter a valid positive number', 'error');
            return;
        }
        
        // Calculate factorial
        let factorial = 1;
        let calculationSteps = `${number}! = `;
        
        if (number === 0 || number === 1) {
            calculationSteps += '1';
        } else {
            for (let i = number; i >= 1; i--) {
                factorial *= i;
                calculationSteps += i;
                if (i > 1) {
                    calculationSteps += ' × ';
                }
            }
        }
        
        calculationSteps += ` = ${factorial.toLocaleString()}`;
        
        // Display result
        showResult(calculationSteps, 'success');
    }
    
    function showResult(message, type) {
        resultDiv.textContent = message;
        resultDiv.style.display = 'block';
        
        // Reset classes
        resultDiv.className = 'result';
        
        // Add appropriate class based on type
        if (type === 'error') {
            resultDiv.classList.add('error');
        } else {
            resultDiv.classList.add('success');
        }
    }
});