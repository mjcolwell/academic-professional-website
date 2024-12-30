if (window.innerWidth <= 800) { // Detect mobile screen size
    window.location.href = "not-optimized.html"; // Redirect to the 'not optimized' page
}

document.addEventListener('DOMContentLoaded', () => {
    // Dropdown and related elements
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');
    const links = document.querySelectorAll('.papers, .datasoftware, .illustrations, .sidebar-icons');
    const contentBelowSidebar = document.querySelector('.content-below-sidebar'); // Text below sidebar

    // Function to set dropdown state
    function setDropdownState(isOpen) {
        dropdown.classList.toggle('open', isOpen);
        dropdown.classList.toggle('close', !isOpen);
        links.forEach(link => link.classList.toggle('open', isOpen));
        contentBelowSidebar?.classList.toggle('shifted', isOpen);
    }

    // Ensure "Photography" dropdown and links are open by default
    setDropdownState(true);


    // Background toggle functionality
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

    // Backgrounds array
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

    // Start background change immediately when the page loads
    changeBackground();
    startBackgroundChange();

    // Set the initial icon
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

    // Slick.js for image slider
    $(document).ready(function () {
        $('.your-class').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 1000,
            slidesToShow: 1
        });

        // Optionally, change text dynamically when the slide changes
        $('.your-class').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            const text = ["Text for Image 1", "Text for Image 2", "Text for Image 3"];
            $('.image-text').text(text[nextSlide]);
        });
    });

    // Manual image and description navigation
    const images = document.querySelectorAll('.image');
    const descriptions = document.querySelectorAll('.description');
    const nextButton = document.getElementById('next-button');
    let currentIndex = 0;

    // Function to update the visible image and description
    function updateDisplay(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
        descriptions.forEach((desc, i) => {
            desc.style.display = i === index ? 'block' : 'none';
        });
    }

    // Event listener for the Next button
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateDisplay(currentIndex);
    });

    // Initialize display
    updateDisplay(currentIndex);
});

// Select the header element
const header = document.querySelector('.header');

// Listen to scroll events
window.addEventListener('scroll', () => {
    // Calculate the opacity based on scroll position
    const scrollPosition = window.scrollY;
    const maxScroll = 95; // Reduced max scroll position for quicker fade
    const opacity = 1 - Math.min(scrollPosition / maxScroll, 1); // Gradual fade as you scroll down

    // Apply the calculated opacity to the header
    header.style.opacity = opacity;
});

// Select the footer element
const footer = document.querySelector('.footer');

// Listen to scroll events
window.addEventListener('scroll', () => {
    // Calculate the opacity based on scroll position
    const scrollPosition = window.scrollY;
    const maxScroll = 2550; // The max scroll position after which the footer is fully visible
    const opacity = Math.min(scrollPosition / maxScroll, 1); // Gradual fade-in as you scroll down

    // Apply the calculated opacity to the footer
    footer.style.opacity = opacity;
});
