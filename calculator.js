document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const form = document.getElementById('milk-calculator-form');
    const halfLiterInput = document.getElementById('half-liter');
    const fourthLiterInput = document.getElementById('fourth-liter');
    const oneLiterInput = document.getElementById('one-liter');
    const costPerLiterInput = document.getElementById('cost-per-liter');
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');
    const resetBtn = document.getElementById('reset-btn');
    
    // Breakdown elements
    const halfLiterQty = document.getElementById('half-liter-qty');
    const fourthLiterQty = document.getElementById('fourth-liter-qty');
    const oneLiterQty = document.getElementById('one-liter-qty');
    const totalVolume = document.getElementById('total-volume');
    const ratePerLiter = document.getElementById('rate-per-liter');
    
    /**
     * Calculate milk cost based on input values
     * @param {number} h - Number of half-liter purchases
     * @param {number} f - Number of one-fourth liter purchases
     * @param {number} o - Number of one-liter purchases
     * @param {number} ru - Cost per liter in rupees
     * @returns {number} - Total cost of milk
     */
    function calculateMilkCost(h, f, o, ru) {
        // Calculate total volume in liters
        let tot = (h * 0.5) + (f * 0.75) + o;
        // Calculate total cost
        return ru * tot;
    }
    
    /**
     * Validate numeric input
     * @param {HTMLInputElement} input - Input element to validate
     * @returns {boolean} - True if valid, false otherwise
     */
    function validateInput(input) {
        const value = input.value.trim();
        if (value === '' || isNaN(value) || Number(value) < 0) {
            input.classList.add('is-invalid');
            return false;
        } else {
            input.classList.remove('is-invalid');
            return true;
        }
    }
    
    /**
     * Calculate and display the result
     */
    function calculateAndDisplayResult() {
        // Get input values
        const h = parseInt(halfLiterInput.value) || 0;
        const f = parseInt(fourthLiterInput.value) || 0;
        const o = parseInt(oneLiterInput.value) || 0;
        const ru = parseFloat(costPerLiterInput.value) || 0;
        
        // Calculate total cost
        const totalCost = calculateMilkCost(h, f, o, ru);
        
        // Calculate total volume
        const totalVolumeValue = (h * 0.5) + (f * 0.75) + o;
        
        // Update breakdown details
        halfLiterQty.textContent = `${h} × 0.5L`;
        fourthLiterQty.textContent = `${f} × 0.75L`;
        oneLiterQty.textContent = `${o} × 1L`;
        totalVolume.textContent = `${totalVolumeValue.toFixed(2)}L`;
        ratePerLiter.textContent = `₹${ru.toFixed(2)}`;
        
        // Display result
        resultText.textContent = `₹${totalCost.toFixed(2)}`;
        resultContainer.classList.remove('d-none');
        
        // Add animation effect
        resultContainer.classList.add('result-fade-in');
        setTimeout(() => {
            resultContainer.classList.remove('result-fade-in');
        }, 500);
    }
    
    /**
     * Handle form submission
     * @param {Event} e - Form submit event
     */
    function handleSubmit(e) {
        e.preventDefault();
        
        // Validate all inputs
        const isHalfLiterValid = validateInput(halfLiterInput);
        const isFourthLiterValid = validateInput(fourthLiterInput);
        const isOneLiterValid = validateInput(oneLiterInput);
        const isCostPerLiterValid = validateInput(costPerLiterInput);
        
        // If all inputs are valid, calculate and display result
        if (isHalfLiterValid && isFourthLiterValid && isOneLiterValid && isCostPerLiterValid) {
            calculateAndDisplayResult();
        }
    }
    
    /**
     * Handle form reset
     */
    function handleReset() {
        // Hide result container
        resultContainer.classList.add('d-none');
        
        // Remove validation styles
        halfLiterInput.classList.remove('is-invalid');
        fourthLiterInput.classList.remove('is-invalid');
        oneLiterInput.classList.remove('is-invalid');
        costPerLiterInput.classList.remove('is-invalid');
    }
    
    // Add event listeners
    form.addEventListener('submit', function(e) {
        // Prevent form submission since we're calculating automatically
        e.preventDefault();
    });
    resetBtn.addEventListener('click', handleReset);
    
    // Add input validation and automatic calculation on input
    const inputs = [halfLiterInput, fourthLiterInput, oneLiterInput, costPerLiterInput];
    
    inputs.forEach(input => {
        // Add blur validation
        input.addEventListener('blur', () => validateInput(input));
        
        // Add real-time calculation on input
        input.addEventListener('input', () => {
            // Automatically calculate whenever all fields have values
            if (halfLiterInput.value !== '' && 
                fourthLiterInput.value !== '' && 
                oneLiterInput.value !== '' && 
                costPerLiterInput.value !== '') {
                    
                // Validate all inputs first
                const allValid = inputs.every(input => validateInput(input));
                
                if (allValid) {
                    // Show result if all inputs are valid
                    calculateAndDisplayResult();
                } else {
                    // Hide result if any input is invalid
                    resultContainer.classList.add('d-none');
                }
            } else {
                // Hide result if any field is empty
                resultContainer.classList.add('d-none');
            }
        });
    });
});document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const form = document.getElementById('milk-calculator-form');
    const halfLiterInput = document.getElementById('half-liter');
    const fourthLiterInput = document.getElementById('fourth-liter');
    const oneLiterInput = document.getElementById('one-liter');
    const costPerLiterInput = document.getElementById('cost-per-liter');
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');
    const resetBtn = document.getElementById('reset-btn');
    
    // Breakdown elements
    const halfLiterQty = document.getElementById('half-liter-qty');
    const fourthLiterQty = document.getElementById('fourth-liter-qty');
    const oneLiterQty = document.getElementById('one-liter-qty');
    const totalVolume = document.getElementById('total-volume');
    const ratePerLiter = document.getElementById('rate-per-liter');
    
    /**
     * Calculate milk cost based on input values
     * @param {number} h - Number of half-liter purchases
     * @param {number} f - Number of one-fourth liter purchases
     * @param {number} o - Number of one-liter purchases
     * @param {number} ru - Cost per liter in rupees
     * @returns {number} - Total cost of milk
     */
    function calculateMilkCost(h, f, o, ru) {
        // Calculate total volume in liters
        let tot = (h * 0.5) + (f * 0.75) + o;
        // Calculate total cost
        return ru * tot;
    }
    
    /**
     * Validate numeric input
     * @param {HTMLInputElement} input - Input element to validate
     * @returns {boolean} - True if valid, false otherwise
     */
    function validateInput(input) {
        const value = input.value.trim();
        if (value === '' || isNaN(value) || Number(value) < 0) {
            input.classList.add('is-invalid');
            return false;
        } else {
            input.classList.remove('is-invalid');
            return true;
        }
    }
    
    /**
     * Calculate and display the result
     */
    function calculateAndDisplayResult() {
        // Get input values
        const h = parseInt(halfLiterInput.value) || 0;
        const f = parseInt(fourthLiterInput.value) || 0;
        const o = parseInt(oneLiterInput.value) || 0;
        const ru = parseFloat(costPerLiterInput.value) || 0;
        
        // Calculate total cost
        const totalCost = calculateMilkCost(h, f, o, ru);
        
        // Calculate total volume
        const totalVolumeValue = (h * 0.5) + (f * 0.75) + o;
        
        // Update breakdown details
        halfLiterQty.textContent = `${h} × 0.5L`;
        fourthLiterQty.textContent = `${f} × 0.75L`;
        oneLiterQty.textContent = `${o} × 1L`;
        totalVolume.textContent = `${totalVolumeValue.toFixed(2)}L`;
        ratePerLiter.textContent = `₹${ru.toFixed(2)}`;
        
        // Display result
        resultText.textContent = `₹${totalCost.toFixed(2)}`;
        resultContainer.classList.remove('d-none');
        
        // Add animation effect
        resultContainer.classList.add('result-fade-in');
        setTimeout(() => {
            resultContainer.classList.remove('result-fade-in');
        }, 500);
    }
    
    /**
     * Handle form submission
     * @param {Event} e - Form submit event
     */
    function handleSubmit(e) {
        e.preventDefault();
        
        // Validate all inputs
        const isHalfLiterValid = validateInput(halfLiterInput);
        const isFourthLiterValid = validateInput(fourthLiterInput);
        const isOneLiterValid = validateInput(oneLiterInput);
        const isCostPerLiterValid = validateInput(costPerLiterInput);
        
        // If all inputs are valid, calculate and display result
        if (isHalfLiterValid && isFourthLiterValid && isOneLiterValid && isCostPerLiterValid) {
            calculateAndDisplayResult();
        }
    }
    
    /**
     * Handle form reset
     */
    function handleReset() {
        // Hide result container
        resultContainer.classList.add('d-none');
        
        // Remove validation styles
        halfLiterInput.classList.remove('is-invalid');
        fourthLiterInput.classList.remove('is-invalid');
        oneLiterInput.classList.remove('is-invalid');
        costPerLiterInput.classList.remove('is-invalid');
    }
    
    // Add event listeners
    form.addEventListener('submit', function(e) {
        // Prevent form submission since we're calculating automatically
        e.preventDefault();
    });
    resetBtn.addEventListener('click', handleReset);
    
    // Add input validation and automatic calculation on input
    const inputs = [halfLiterInput, fourthLiterInput, oneLiterInput, costPerLiterInput];
    
    inputs.forEach(input => {
        // Add blur validation
        input.addEventListener('blur', () => validateInput(input));
        
        // Add real-time calculation on input
        input.addEventListener('input', () => {
            // Automatically calculate whenever all fields have values
            if (halfLiterInput.value !== '' && 
                fourthLiterInput.value !== '' && 
                oneLiterInput.value !== '' && 
                costPerLiterInput.value !== '') {
                    
                // Validate all inputs first
                const allValid = inputs.every(input => validateInput(input));
                
                if (allValid) {
                    // Show result if all inputs are valid
                    calculateAndDisplayResult();
                } else {
                    // Hide result if any input is invalid
                    resultContainer.classList.add('d-none');
                }
            } else {
                // Hide result if any field is empty
                resultContainer.classList.add('d-none');
            }
        });
    });
});