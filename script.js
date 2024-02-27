let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150 ;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+  id +']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
};

ScrollReveal({
    reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, services-container, portofolio-box, contact form', { origin: 'bottom' });

const typed = new typed('.multiple-text',{
    String: ['mabar','gamer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop:true
});
