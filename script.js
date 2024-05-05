var Hash = document.getElementsByClassName('hash');
const container = document.querySelector('.container');
const generate = document.querySelector('.change-button');
const ColorBoxes = window.innerWidth < 768 ? 24 : 25;

// Function to change text and color
function changeTextAndColor() {
    for (var i = 0; i < Hash.length; i++) {
        let randomCol = Math.floor(Math.random() * 0xffffff).toString(16);
        randomCol = `#${randomCol.padStart(6, "0")}`;
        Hash[i].innerHTML = Hash[i].style.color = randomCol;
    }
    setTimeout(changeTextAndColor, 200);
}

changeTextAndColor();

// Function to generate colors when the web page is opened
const ColorGenerate = () => {
    container.innerHTML = "";
    for (let i = 0; i < ColorBoxes; i++) {
        let randomCol = Math.floor(Math.random() * 0xffffff).toString(16);
        randomCol = `#${randomCol.padStart(6, "0")}`;

        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="box" style="background: ${randomCol}"></div>
                            <span class="hex">${randomCol}</span>`;
        color.addEventListener("click", () => copyColor(color)); 
        container.appendChild(color);
    }   
}

ColorGenerate();

// Function to generate new colors when the button is clicked
generate.addEventListener("click", () => {
    container.innerHTML = "";
    for (let i = 0; i < ColorBoxes; i++) {
        let randomCol = Math.floor(Math.random() * 0xffffff).toString(16);
        randomCol = `#${randomCol.padStart(6, "0")}`;

        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="box" style="background: ${randomCol}"></div>
                            <span class="hex">${randomCol}</span>`;
        color.addEventListener("click", () => copyColor(color));                     
        container.appendChild(color);
    }    
});

// Function to copy color code when clicked on
function copyColor(colorElement) {
    const hexElement = colorElement.querySelector('.hex');
    const hex = hexElement.textContent.trim();
    const input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.opacity = 0;
    input.value = hex;
    document.body.appendChild(input);
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices
    
    if (document.execCommand('copy')) {
        hexElement.textContent = 'Copied';
        setTimeout(() => {
            hexElement.textContent = hex;
        }, 1000);
        console.log('Color code copied to clipboard!');
    } else {
        console.log('Failed to copy color code. Please copy it manually.');
    }
    
    document.body.removeChild(input);
}




