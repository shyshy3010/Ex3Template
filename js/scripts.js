const colors = ['red', 'blue', 'green', 'yellow'];
let currentIndex = 0;
let name = '';
let currentLetterIndex = 0;
let initialized = false;
window.onload = () =>
{
initRectangles();
document.getElementById('submitName').addEventListener('click', handleNameSubmit);
document.getElementById('addRectangle').addEventListener('click', addRectangle);
document.getElementById('substractRectangle').addEventListener('click', substractRectangle);
document.getElementById('switchRectanglesSongs').addEventListener('click', switchRectanglesSongs);
}
function handleNameSubmit() 
{    const nameInput = document.getElementById('nameInput');
name = nameInput.value.trim(); 
if (name) {
    initialized = true;
    nameInput.disabled = true;
    document.getElementById('submitName').disabled = true;
    initRectangles(); 
} else {
    alert('Please enter your full name.');
}
}


function initRectangles() 
    {
        const rectangleView = document.getElementById('Rectangleview');
        rectangleView.innerHTML = '';
            for (let i = 0; i < name.length; i++) 
            {
                addRectangle();
            }

    } 