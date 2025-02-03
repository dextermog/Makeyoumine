// Get elements
const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const messageContainer = document.getElementById('message-container');
const yesAgainButton = document.getElementById('yes-again');
const finalMessage = document.getElementById('final-message');
const heartContainer = document.getElementById('heart-container');

// Handle "No" button press (increases size of "Yes")
noButton.addEventListener('click', () => {
    yesButton.style.transform = `scale(${parseFloat(getComputedStyle(yesButton).transform.split(',')[3]) + 0.1})`;
});

// Handle first "Yes" button press (shows the next page with "Really?")
yesButton.addEventListener('click', () => {
    document.querySelector('.container').style.display = 'none';
    messageContainer.style.display = 'block';
});

// Handle second "Yes" button press (shows hearts and final message)
yesAgainButton.addEventListener('click', () => {
    messageContainer.style.display = 'none';
    showHearts();
    finalMessage.style.display = 'block';
});

// Function to show hearts
function showHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.position = 'absolute';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animation = `float-heart ${Math.random() * 5 + 3}s ease-in-out infinite`;

        // Set random colors for the hearts
        heart.style.fontSize = `${Math.random() * 30 + 20}px`;
        heart.innerHTML = '❤️';

        heartContainer.appendChild(heart);
    }
}

// Keyframes for floating hearts animation
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
    @keyframes float-heart {
        0% { transform: translateY(0); opacity: 1; }
        50% { transform: translateY(-20px); opacity: 0.8; }
        100% { transform: translateY(0); opacity: 0; }
    }
`;
document.head.appendChild(styleSheet);