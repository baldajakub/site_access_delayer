document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const originalUrl = urlParams.get('original');
    const timerElement = document.getElementById('timer');
    const continueButton = document.getElementById('continue');
    const cancelButton = document.getElementById('cancel');
    
    let timeLeft = 10;
    let countdown;
    
    function updateTimer() {
        timerElement.textContent = timeLeft;
        continueButton.textContent = `Continue (${timeLeft}s)`;
        
        if (timeLeft <= 0) {
            clearInterval(countdown);
            continueButton.textContent = 'Continue';
            continueButton.disabled = false;
        }
        timeLeft--;
    }
    
    // Start countdown
    countdown = setInterval(updateTimer, 1000);
    
    continueButton.addEventListener('click', function() {
        if (!continueButton.disabled) {
            window.location.href = originalUrl;
        }
    });
    
    cancelButton.addEventListener('click', function() {
        window.history.back();
    });
});