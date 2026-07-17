document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");
    
    const targetPercentage = 92; // Defined in the requirements
    const duration = 2800; // Animation length in milliseconds
    const frameRate = 1000 / 60; // Targeting 60 FPS for buttery smooth UI
    const totalFrames = duration / frameRate;
    let currentFrame = 0;

    // Easing function (Ease-out Quart) for a premium, decelerating feel
    function easeOutQuart(x) {
        return 1 - Math.pow(1 - x, 4);
    }

    const animateProgress = setInterval(() => {
        currentFrame++;
        const progress = currentFrame / totalFrames;
        const easedProgress = easeOutQuart(progress);
        
        // Calculate current value based on easing
        const currentPercentage = Math.min(Math.round(easedProgress * targetPercentage), targetPercentage);
        
        // Manipulate the DOM to reflect the change visually
        progressBar.style.width = `${currentPercentage}%`;
        progressText.innerText = currentPercentage;

        // End condition
        if (currentFrame >= totalFrames || currentPercentage >= targetPercentage) {
            clearInterval(animateProgress);
            // Snap to exact final target just in case of rounding errors
            progressBar.style.width = `${targetPercentage}%`;
            progressText.innerText = targetPercentage;
        }
    }, frameRate);
});