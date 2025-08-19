document.addEventListener('DOMContentLoaded', () => {
    /*
    //-- TO THE START SCROLL POSITION OF THE ELEMENT WITH ID: "comments-section-block" --//
    // CALCULATING POSITION (50% THIS CASE)
    const container = document.getElementById("comments-section-block");
    let speed = 2;

    function autoScroll() {
    container.scrollLeft += speed;

    // cuando llegue al final del primer hijo
    const firstChild = container.children[0];
    if (firstChild.getBoundingClientRect().right < 0) {
        container.appendChild(firstChild); // lo manda al final
        container.scrollLeft -= firstChild.offsetWidth; // ajusta posición
    }

    requestAnimationFrame(autoScroll);
    }

    autoScroll();*/

    //-- FUNCTIONALITY AT FAQs SECTION, DEPLOY ANSWERS --//
    const faqs = document.querySelectorAll('.faqs-block')

    faqs.forEach((faq, i) => {
        const plus = faq.querySelector('.plus-icon')
        const less = faq.querySelector('.less-icon')
        const answer = faq.querySelector('.answer')

        // INITIAL STATE
        answer.style.overflow = 'hidden';
        answer.style.transition = 'all 0.5s ease-in-out';

        // START SHOWING THE FIRST BLOCK
        if (i === 2) { 
            less.style.visibility = 'visible';
            plus.style.visibility = 'hidden';
            answer.style.opacity = '1';
            answer.style.maxHeight = '200px'; // TO ADJUST CONTENT
            answer.style.marginTop = '26px';
        } else {
            less.style.visibility = 'hidden';
            plus.style.visibility = 'visible';
            answer.style.opacity = '0';
            answer.style.maxHeight = '0px';
            answer.style.marginTop = '0';
        }

        // SHOW ANSWERS
        plus.addEventListener('click', () => {
            plus.style.visibility = 'hidden'
            less.style.visibility = 'visible'

            answer.style.opacity = '1'
            answer.style.maxHeight = '200px'
            answer.style.marginTop = '26px'
        })

        // HIDE 
        less.addEventListener('click', () => {
            less.style.visibility = 'hidden'
            plus.style.visibility = 'visible'

            answer.style.opacity = '0'
            answer.style.maxHeight = '0px'
            answer.style.marginTop = '0'
        })
    })

    //-- FUNCTIONALITY AT HEADER MENU --//
    const menuIcon = document.querySelector('#menu-icon')
    const asideMenu = document.querySelector('#aside-menu')
    let isHeadMenuClose = true

    menuIcon.addEventListener('click', () => {
        if (isHeadMenuClose) {
            openHeadMenu()
        } else {
            closeHeadMenu()
        }
    })
    function openHeadMenu() {
        asideMenu.style.transition = '400ms ease-in-out'
        asideMenu.style.transform = 'translatex(100%)'
        asideMenu.style.opacity = '1'
        isHeadMenuClose = false
    }
    function closeHeadMenu() {
        asideMenu.style.transition = '400ms ease-in-out'
        asideMenu.style.transform = 'translatex(-100%)'
        asideMenu.style.opacity = '0'
        isHeadMenuClose = true
    }

    document.addEventListener('click', (e) => {
        if (!isHeadMenuClose && !asideMenu.contains(e.target) && !menuIcon.contains(e.target)) {
            closeHeadMenu()
        }
    })

    AOS.init({ // TO STARTAOS ANIMATION
        offset: 150,
        once: true, // false FOR INFINITE REPETITIONS
    }) 

    /*
    //-- FUNCTIONALITY AT PROFILE BUTTON SECTION --//
    const profileBtnElements = document.querySelector('#profile-btn-elements')
    const profileBtn = document.querySelector('#profile-btn')
    let isClose = true

    profileBtn.addEventListener('click', () => {
        if (isClose) {
            showProfileMenu()
        } else {
            hideProfileMenu()
        }
    })
    function showProfileMenu() {
        profileBtnElements.style.transition = '300ms ease-in-out'
        profileBtnElements.style.visibility = 'visible'
        profileBtnElements.style.opacity = '1'
        profileBtnElements.style.maxHeight = 'fit-content'
        isClose = false
    } 
    function hideProfileMenu() {
        profileBtnElements.style.transition = '300ms ease-in-out'
        profileBtnElements.style.visibility = 'hidden'
        profileBtnElements.style.opacity = '0'
        profileBtnElements.style.maxHeight = '0%'
        isClose = true
    }
    document.addEventListener('click', (e) => {
        if (!isClose && !profileBtnElements.contains(e.target) && !profileBtn.contains(e.target)) {
            hideProfileMenu()
        }
    })
    */
})