function toggleDarkMode() {
    var mainElement = document.querySelector('main');
    var darkModeToggle = document.querySelector('.switch input[type="checkbox"]');
    var card = document.querySelectorAll('#eventscard p');
    var weather = document.querySelector('#weathercard p');
    var action = document.querySelector('#weathercard h2');
	var action2 = document.querySelectorAll('#eventscard h2');
    var colorback = document.querySelector('body');

    // Toggle dark mode class on the main element
    mainElement.classList.toggle('dark-mode');

    // Check if dark mode is active
    if (darkModeToggle.checked) {
        // Dark mode is active, update styles
        colorback.style.backgroundColor = 'white';
         // Update background color to black
        action2.forEach(function(header) {
            header.style.color = '';
        });
        card.forEach(function(paragraph) {
            paragraph.style.backgroundColor = '';
            paragraph.style.color = '';
        });
        weather.style.color = '';
        weather.style.backgroundColor = '';
        action.style.color = '';
        action.style.backgroundColor = '';
    } else {
        // Dark mode is not active, update styles
        colorback.style.backgroundColor = 'black'; // Update background color to tan
        card.forEach(function(paragraph) {
            paragraph.style.backgroundColor = '#424242';
            paragraph.style.color = 'white'; // Reset background color to default (CSS will take over)
        });
        action2.forEach(function(header) {
            header.style.color = 'white';
        });
        weather.style.backgroundColor = '#424242';
        weather.style.color = 'white';
        action.style.color = 'white';

    }
}