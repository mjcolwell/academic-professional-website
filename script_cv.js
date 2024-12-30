if (window.innerWidth <= 800) { // Detect mobile screen size
    window.location.href = "not-optimized.html"; // Redirect to the 'not optimized' page
}

document.querySelector('.dropbtn').addEventListener('click', function (e) {
    const dropdown = document.querySelector('.dropdown');
    const papersLink = document.querySelector('.papers'); // Targeting the "Papers" link
    const datasoftwareLink = document.querySelector('.datasoftware'); // Targeting the "Data / Software" link
    const illustrationsLink = document.querySelector('.illustrations'); // Targeting the "Professional Illustrations" link
    const sidebarIcons = document.querySelector('.sidebar-icons'); // Targeting the icons section

    // Toggle 'open' class on the "Photography" dropdown
    if (dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
        dropdown.classList.add('close'); // Add the 'close' class for faster fade-out
    } else {
        dropdown.classList.remove('close'); // Remove the 'close' class before opening
        dropdown.classList.add('open');
    }

    // Toggle 'open' class on the "Papers", "Data / Software", and "Illustrations" links to animate their movement
    papersLink.classList.toggle('open');
    datasoftwareLink.classList.toggle('open');
    illustrationsLink.classList.toggle('open');
    sidebarIcons.classList.toggle('open'); // Apply animation to the icons

    // Check if the dropdown is open
    if (dropdown.classList.contains('open')) {
        // Move the "Papers", "Data / Software", and "Illustrations" links first
        papersLink.classList.add('open');
        datasoftwareLink.classList.add('open');
        illustrationsLink.classList.add('open');
        sidebarIcons.classList.add('open'); // Move the icons

        // After the "Papers", "Data / Software", and "Illustrations" link animation finishes, fade in the dropdown options
        setTimeout(function () {
            dropdown.classList.add('open');
        }, 500); // Delay dropdown animation (500ms matches the "Papers" animation duration)
    } else {
        // Close the "Papers", "Data / Software", and "Illustrations" link animations and dropdown options at the same time
        papersLink.classList.remove('open');
        datasoftwareLink.classList.remove('open');
        illustrationsLink.classList.remove('open');
        sidebarIcons.classList.remove('open'); // Reset the icons
        dropdown.classList.remove('open');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('background-toggle');
    const iconImage = toggleButton.querySelector('img');
    let dynamicBackgroundEnabled = true;

    // Icon images for toggling
    const iconOn = './Images/Logo/Light_On_Small.png';  // Default icon image
    const iconOff = './Images/Logo/Light_Off_Small.png'; // Icon to show when background is off

    // Preload the images
    const preloadImageOn = new Image();
    preloadImageOn.src = iconOn;

    const preloadImageOff = new Image();
    preloadImageOff.src = iconOff;

    // Start background change immediately when the page loads
    changeBackground(); 
    startBackgroundChange();

    // Set the initial icon to make sure it loads correctly
    iconImage.src = iconOn;

    // Handle background toggle button click
    toggleButton.addEventListener('click', () => {
        if (dynamicBackgroundEnabled) {
            stopBackgroundChange(); // Disable dynamic background and set static black background
            iconImage.src = iconOff; // Change the icon to the 'off' state
        } else {
            changeBackground(); // Show the first background again (if desired)
            startBackgroundChange(); // Re-enable dynamic background changes
            iconImage.src = iconOn; // Change the icon to the 'on' state
        }

        dynamicBackgroundEnabled = !dynamicBackgroundEnabled; // Toggle state
    });
});

const backgrounds = [
    './Backgrounds/Background_1.jpg',
    './Backgrounds/Background_4.jpg',
    './Backgrounds/Background_3.jpg',
    './Backgrounds/Background_2.jpg',
    './Backgrounds/Background_5.jpg',
    './Backgrounds/Background_6.jpg',
    './Backgrounds/Background_7.jpg',
    './Backgrounds/Background_8.jpg'
];

let currentBackground = 0;
let backgroundInterval;

// Function to change the background
function changeBackground() {
    const backgroundContainer = document.querySelector('.background-container');

    // Create a new background element
    const newBackground = document.createElement('div');
    newBackground.className = 'background';
    newBackground.style.backgroundImage = `url(${backgrounds[currentBackground]})`;

    // Add the new background to the container
    backgroundContainer.appendChild(newBackground);

    // Make it fade in
    setTimeout(() => {
        newBackground.classList.add('active');
    }, 100);

    // Fade out old backgrounds
    setTimeout(() => {
        const oldBackgrounds = backgroundContainer.querySelectorAll('.background:not(:last-child)');
        oldBackgrounds.forEach((oldBackground) => {
            oldBackground.classList.remove('active');
            oldBackground.addEventListener('transitionend', () => {
                oldBackground.remove();
            });
        });
    }, 12000);

    // Cycle through the backgrounds
    currentBackground = (currentBackground + 1) % backgrounds.length;
}

// Start changing the background at intervals
function startBackgroundChange() {
    backgroundInterval = setInterval(changeBackground, 15000); // Change background every 15 seconds
}

// Stop background change and set static black background
function stopBackgroundChange() {
    clearInterval(backgroundInterval);
    const backgroundContainer = document.querySelector('.background-container');
    backgroundContainer.style.backgroundImage = 'none'; // Remove background image
    backgroundContainer.style.backgroundColor = '#0a0a0a'; // Static black background
    backgroundContainer.innerHTML = ''; // Optionally, clear all background divs
}

document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.querySelector('.about-link');
    
    // When the animation finishes, add the 'finished' class to show the arrow
    aboutLink.addEventListener('animationend', () => {
        aboutLink.classList.add('finished'); // This will trigger the arrow's opacity transition
    });
});

$(document).ready(function(){
    $('.your-class').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 1
    });

    // Optionally, change text dynamically when the slide changes
    $('.your-class').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var text = ["Text for Image 1", "Text for Image 2", "Text for Image 3"];
        $('.image-text').text(text[nextSlide]);
    });
});

// Select the footer element
const footer = document.querySelector('.footer');

// Listen to scroll events
window.addEventListener('scroll', () => {
    // Calculate the opacity based on scroll position
    const scrollPosition = window.scrollY;
    const maxScroll = 50; // The max scroll position after which the footer is fully visible
    const opacity = Math.min(scrollPosition / maxScroll, 1); // Gradual fade-in as you scroll down

    // Apply the calculated opacity to the footer
    footer.style.opacity = opacity;
});


document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const contactSection = document.querySelector("#about-section");
        contactSection.style.opacity = "1"; // Makes the section visible
    }, 500); // Delay of 3 seconds
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const contactSection = document.querySelector(".Profile-pic");
        contactSection.style.opacity = "1"; // Makes the section visible
    }, 500); // Delay of 3 seconds
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const contactSection = document.querySelector(".content-box2");
        contactSection.style.opacity = "1"; // Makes the section visible
    }, 500); // Delay of 3 seconds
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const contactSection = document.querySelector("#contact-section");
        contactSection.style.opacity = "1"; // Makes the section visible
    }, 1000); // Delay of 3 seconds
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const contactSection = document.querySelector("#Photography-section");
        contactSection.style.opacity = "1"; // Makes the section visible
    }, 1500); // Delay of 3 seconds
});