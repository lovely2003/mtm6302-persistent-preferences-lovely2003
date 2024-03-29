// Function to dynamically add color names to the list
const addColorNamesToList = () => {
    const itemList = document.getElementById("itemList");
    const colorNames = ["Red", "Green", "Blue", "Yellow", "Purple"];

    // Clear existing list items
    itemList.innerHTML = "";

    // Add color names to the list
    colorNames.forEach(color => {
        const li = document.createElement("li");
        li.textContent = color;
        li.classList.add("list-group-item");
        li.style.cursor = "pointer"; // Add pointer cursor to indicate clickable
        itemList.appendChild(li);

        // Add click event listener to change background color when a color name is clicked
        li.addEventListener("click", () => {
            changeBackgroundColor(color);
        });
    });
}

// Function to change background color based on selected color name
const changeBackgroundColor = (colorName) => {
    document.body.style.backgroundColor = colorName;
}

// Function to apply saved preferences when the page loads
const applyPreferences = () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        document.body.className = savedTheme;
    }
}

// Function to save selected preferences to local storage
const savePreferences = () => {
    const selectedColor = document.getElementById("colorPicker").value;
    const selectedFontSize = document.getElementById("fontSize").value;
    const selectedFontFamily = document.getElementById("fontFamily").value;
    const selectedTheme = document.getElementById("theme").value;

    localStorage.setItem("pageBackgroundColor", selectedColor);
    localStorage.setItem("fontSize", selectedFontSize);
    localStorage.setItem("fontFamily", selectedFontFamily);
    localStorage.setItem("theme", selectedTheme);
}

// Function to load saved preferences from local storage
const loadSavedPreferences = () => {
    const savedColor = localStorage.getItem("pageBackgroundColor");
    const savedFontSize = localStorage.getItem("fontSize");
    const savedFontFamily = localStorage.getItem("fontFamily");
    const savedTheme = localStorage.getItem("theme");

    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        document.getElementById("colorPicker").value = savedColor;
    }

    if (savedFontSize) {
        document.body.style.fontSize = savedFontSize + "px";
        document.getElementById("fontSize").value = savedFontSize;
    }

    if (savedFontFamily) {
        document.body.style.fontFamily = savedFontFamily;
        document.getElementById("fontFamily").value = savedFontFamily;
    }

    if (savedTheme) {
        document.body.className = savedTheme;
        document.getElementById("theme").value = savedTheme;
    }
}

// Load saved preferences when the page loads
window.onload = () => {
    loadSavedPreferences();
    addColorNamesToList();
}

// Attach event listener to the save button
const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", savePreferences);
