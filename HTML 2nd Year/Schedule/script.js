// Initially hide the box
let box = document.getElementById('box');
box.style.display = 'none'; // Hide the box

document.querySelectorAll('.day-button').forEach(button => {
    button.addEventListener('click', () => {
        // Get the background color of the clicked button
        const buttonColor = getComputedStyle(button).backgroundColor;
        // Create a new box
        const newBox = box.cloneNode(true);
        newBox.style.display = 'block'; // Show the new box
        newBox.style.top = '-300px';
        newBox.style.backgroundColor = buttonColor;
        // Append the new box to the container
        const container = document.querySelector('.container');
        container.appendChild(newBox);
        // Animate the old box to go downwards until it is out of the screen
        box.style.transition = 'top 2s';
        box.style.top = '100vh';
        // Animate the new box to drop down into the middle of the screen
        setTimeout(() => {
            newBox.style.transition = 'top 2s';
            newBox.style.top = '35vh';
        }, 100); // delay in milliseconds
        // Replace the old box with the new box
        box = newBox;
    });
});