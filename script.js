let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}
try {
    let menu = document.querySelector('#menu-btn');
    let header = document.querySelector('.header');

    if (!menu) {
        throw new Error("#menu-btn not found.");
    }

    if (!header) {
        throw new Error(".header not found.");
    }

    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        header.classList.toggle('active');
    }

    window.onscroll = () => {
        menu.classList.remove('fa-times');
        header.classList.remove('active');
    }
} catch (error) {
    console.error("Error:", error.message);
    // Refresh the page in case of an error
    location.reload();
}


