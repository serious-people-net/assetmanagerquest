document.addEventListener('keydown', function(event) {
    const key = event.key;
    const links = document.querySelectorAll('ol li a');

    function clickMenuLink(index) {
        var menuOptionsDiv = document.querySelector('.menu-options');
        if (menuOptionsDiv) {
            var menuLinks = menuOptionsDiv.getElementsByTagName('a');
            if (menuLinks.length > index) {
                menuLinks[index].click();
            }
        }
    }

    // Check which key is pressed and call the click function with appropriate index
    if (event.key === '-') {
        clickMenuLink(0); // Restart / start the game
    } else if (event.key === '=') {
        clickMenuLink(2); // Toggle music
    }

    if (key >= '1' && key <= '3') {
        const index = parseInt(key, 10) - 1; // Convert key to 0-based index
        if (links[index]) {
            links[index].click();
        }
    } else if (key === ']') {
        // Move down the list
        if (currentIndex < links.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Wrap around to the top
        }
        updateSelection(links);
    } else if (key === '[') {
        // Move up the list
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = links.length - 1; // Wrap around to the bottom
        }
        updateSelection(links);
    } else if (key === 'Enter') {
        // Select the current item
        if (currentIndex >= 0 && currentIndex < links.length) {
            links[currentIndex].click();
            currentIndex = -1;
            updateSelection(links); // Update selection to remove any highlight
        }
    }
});

let currentIndex = -1; // No item is selected initially

function updateSelection(links) {
    // Remove the selected class from all links
    links.forEach(link => link.classList.remove('selected'));

    // Add the selected class to the current link
    if (currentIndex >= 0 && currentIndex < links.length) {
        links[currentIndex].classList.add('selected');
        links[currentIndex].focus();
    }
}
