document.getElementById('generate-btn').addEventListener('click', getAdvice);
const adviceHeader = document.getElementById('advice-header')

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.getElementById('advice').textContent = `"${data.slip.advice}"`;
            adviceHeader.textContent = `Advice #${data.slip.id}`
        })
        .catch(error => {
            document.getElementById('advice').textContent = "Oops! Something went wrong. Please try again.";
            console.error('Error fetching advice:', error);
        });
}
