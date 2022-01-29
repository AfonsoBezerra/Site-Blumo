const btn = document.getElementById('btn');
const main = document.getElementById('main');
btn.addEventListener('click', () => {
    btn.classList.toggle('active');
})

const conteudo = document.getElementById('conteudo');

conteudo.addEventListener('click', () => {
    if (document.getElementById('menucheck').checked == true) {
        document.getElementById('menucheck').checked = false
        btn.classList.toggle('active');
    }
})


$(() => {
    $('#cassossel1').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        zindex: 99999,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        smartSpeed: 850,
        responsiveClass: true,
        responsive: {
            320: {
                stagePadding: 25,
            },
            321: {
                stagePadding: 50,
            },
            360: {
                stagePadding: 40,
            },
            375: {
                stagePadding: 50,
            },
            412: {
                stagePadding: 60,
            },
            460: {
                stagePadding: 90,
            },
            768: {
                stagePadding: 150,
            },
            1024: {
                stagePadding: 225,
            },
            1920: {
                stagePadding: 450,
            }
        }
    });
    $('#cassossel2').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        zindex: 999,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 850,
        responsiveClass: true,
        responsive: {
            0: {
                stagePadding: 70,
            },
            321: {
                stagePadding: 80,
            },
            460: {
                stagePadding: 120,
            },
            768: {
                stagePadding: 230,
            }
        }
    });
    
    $('#cassossel3').owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        zindex: 99999,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 850,
        responsiveClass: true,
        responsive: {
            1440: {
                items: 5,
                autoplay: false,
                autoplayHoverPause: false,
                autoplayTimeout: false
            }
        }
    });

});


const button = document.getElementById('button-retangulo');

const button_desk = document.getElementById('button-retangulo-2');


const buttonredondo = document.getElementById('whatsapp-fixed');

const tela = window.innerWidth;

document.addEventListener('scroll', () => {
    if (tela < 768) {
        const posibutton = button.getBoundingClientRect();
        if (posibutton.y <= 850 && posibutton.y > 70) {
            buttonredondo.style.opacity = '0'
            button.style.opacity = '1'
        } else {
            buttonredondo.style.opacity = "1"
            button.style.opacity = '0'
        }
    }
})

document.getElementById('principal').addEventListener('scroll', () => {
    if (tela >= 768 && tela < 1024) {
        const posibutton = button.getBoundingClientRect();
        if (posibutton.y <= 1050 && posibutton.y > 70) {
            buttonredondo.style.opacity = '0'
            button.style.opacity = '1'
        } else {
            buttonredondo.style.opacity = "1"
            button.style.opacity = '0'
        }
    } else if (tela >= 1024 && tela < 1440) {
        const posibutton = button_desk.getBoundingClientRect();
        if (posibutton.y <= 1000 && posibutton.y > 70) {
            buttonredondo.style.opacity = '0'
            button_desk.style.opacity = '1'
        } else {
            buttonredondo.style.opacity = "1"
            button_desk.style.opacity = '0'
        }
    } else if (tela >= 1440 && tela < 1920) {
        const posibutton = button_desk.getBoundingClientRect();
        if (posibutton.y <= 1200 && posibutton.y > 70) {
            buttonredondo.style.opacity = '0'
            button_desk.style.opacity = '1'
        } else {
            buttonredondo.style.opacity = "1"
            button_desk.style.opacity = '0'
        }
    } else if (tela >= 1920) {
        const posibutton = button_desk.getBoundingClientRect();
        if (posibutton.y <= 970 && posibutton.y > 40) {
            buttonredondo.style.opacity = '0'
            button_desk.style.opacity = '1'
        } else {
            buttonredondo.style.opacity = "1"
            button_desk.style.opacity = '0'
        }
    }

})

AOS.init();

new VenoBox({
    loop: true,
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    bgcolor: 'transparent',
    maxWidth: '80%',
    spinner: 'swing',
});


new VenoBox({
    selector: '.my-text',
    maxWidth: '350px',
});

window.addEventListener('load', (event) => {
    setTimeout(() => {
        document.getElementById('loading').style.opacity = 0;
    }, 500)
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 1000)
});

function whatsapp() {
    window.open('https://api.whatsapp.com/send?phone=5515974019873&text=Ol%C3%A1%2C%20estava%20no%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%20', '_blank');
}