
const filterText = document.querySelectorAll('.filter-text');
const filterBall = document.querySelector('.filter-ball');
const filterPasive = document.querySelector('.filter-pasive');
const filterActive = document.querySelector('.filter-active');
filterText.forEach((text) => {
    text.addEventListener('click', () => {
        filterText.forEach((t) => t.classList.remove('active'));
        text.classList.add('active');
        filterBall.style.left = `${text.offsetLeft}px`;
        filterBall.style.width = `${text.offsetWidth}px`;
        document.querySelectorAll('.slur').forEach((result) => {result.classList.add('slur-active')});
        setTimeout(() => {document.querySelectorAll('.slur').forEach((result) => {result.classList.remove('slur-active')});}, 100);
        document.querySelectorAll('.blur').forEach((result) => {result.classList.add('blur-active')});
        setTimeout(() => {document.querySelectorAll('.blur').forEach((result) => {result.classList.remove('blur-active')});}, 300);
    });
});

window.addEventListener('load', () => {
    const activeText = document.querySelector('.filter-text.active');
    if (activeText) {
        filterBall.style.left = `${activeText.offsetLeft}px`;
        filterBall.style.width = `${activeText.offsetWidth}px`;
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const firstFilter = document.querySelector('.filter-text');
    if (firstFilter) {
        firstFilter.classList.add('active');
        filterBall.style.left = `${firstFilter.offsetLeft}px`;
        filterBall.style.width = `${firstFilter.offsetWidth}px`;
    }
});

window.addEventListener('resize', () => {
    const activeText = document.querySelector('.filter-text.active');
    if (activeText) {
        filterBall.style.left = `${activeText.offsetLeft}px`;
        filterBall.style.width = `${activeText.offsetWidth}px`;
    }
});

const filterCategory = document.querySelector('.filter-category');
const shopItems = document.querySelectorAll('.shop-items');
filterCategory.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-text')) {
        const filter = e.target.classList[1];
        shopItems.forEach((item) => {
            if (item.classList.contains(filter) || filter === 'all') {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }
});

document.querySelectorAll('.filter-text').forEach((filter) => {
    filter.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

let LastScrollY = 50;
window.addEventListener("scroll", () => {
    if(LastScrollY < window.scrollY) {
        document.querySelectorAll('.blur-sh').forEach((result) => { result.classList.add('blur-shop');})
    } else { 
        document.querySelectorAll('.blur-sh').forEach((result) => { result.classList.remove('blur-shop');})
    }
})


function ClickMenu() {
    document.querySelectorAll('.br-1').forEach((result) => {result.classList.toggle('bar1-on');})
    document.querySelectorAll('.br-2').forEach((result) => {result.classList.toggle('bar2-on');})
    document.querySelectorAll('.br-3').forEach((result) => {result.classList.toggle('bar3-on');})

    document.querySelectorAll('.menu-on').forEach((result) => {result.classList.toggle('menu-full-on');})
    document.querySelectorAll('.scr-fr').forEach((result) => {result.classList.toggle('scroll-frost');})
    document.querySelectorAll('.smooth').forEach((result) => {result.classList.toggle('nav-smooth');})
    document.querySelectorAll('.tras').forEach((result) => {result.classList.toggle('transition-nav');})
    document.querySelectorAll('.disable-shop').forEach((result) => {result.classList.toggle('disable-shopify');})

    document.querySelectorAll('.see').forEach((result) => {result.classList.toggle('effect-see');})

    setTimeout(() => {document.querySelectorAll('.service').forEach((result) => {result.classList.remove('service-on');})
    document.querySelectorAll('.serv-nav').forEach((result) => {result.classList.remove('service-nav-transition');})
    document.querySelectorAll('.width-menu').forEach((result) => {result.classList.remove('width-menu-on');})
    document.querySelectorAll('.fast').forEach((result) => {result.classList.remove('fast-enought');}) }, 500);

}

function ServiceClick() {
    document.querySelectorAll('.service').forEach((result) => {result.classList.toggle('service-on');})
    document.querySelectorAll('.serv-nav').forEach((result) => {result.classList.toggle('service-nav-transition');})
    document.querySelectorAll('.width-menu').forEach((result) => {result.classList.toggle('width-menu-on');})

    document.querySelectorAll('.fast').forEach((result) => {result.classList.toggle('fast-enought');})
}

function Pop() {
    const toggleClasses = [
        ['.Pop-Exit', 'Pop-out'],
        ['.Status-Ani', 'Status-Animated'],
        ['.scr-fr', 'scroll-frost'],
        ['.close-up', 'Pop-Close-Up']
    ];

    toggleClasses.forEach(([selector, className]) => {
        document.querySelectorAll(selector).forEach(result => result.classList.toggle(className));
    });

    const classesToRemove = [
        'Pop-Marque-Out', 'Pop-User-Out' , 'Pop-Product-Out'
    ];

    classesToRemove.forEach(className => {
        document.querySelectorAll(`.${className.replace('-Out', '-O')}`).forEach(result => {
            result.classList.remove(className);
        });
    });
}


//PopUp de las Habilidades
const popFunctions = [
    ['PopMar', 'Pop-Marque-O', 'Pop-Marque-Out'],
    ['PopUser', 'Pop-User-O', 'Pop-User-Out'],
    ['PopPro', 'Pop-Product-O', 'Pop-Product-Out']
];

popFunctions.forEach(([funcName, selector, className]) => {
    window[funcName] = () => {
        document.querySelectorAll(`.${selector}`).forEach(result => {
            result.classList.add(className);
        });
    };
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.querySelector('.Pop-Exit.Pop-out')) {
        Pop();
    }
});

document.querySelectorAll('.shop-items').forEach(item => {
    if (!item.dataset.price) {
        const priceElement = item.querySelector('.item-price');
        if (priceElement) {
            // Quita símbolos y convierte a número
            const price = parseFloat(priceElement.textContent.replace(/[^0-9.,]/g, '').replace(',', '.'));
            item.dataset.price = price;
        }
    }
});

document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Quitar la clase 'active' de todos los botones
        document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
        // Agregar la clase 'active' al botón clickeado
        btn.classList.add('active');        

        const sortType = btn.getAttribute('data-sort');
        const container = document.querySelector('.shop-items').parentElement; // Ajusta si tu contenedor es diferente
        const items = Array.from(document.querySelectorAll('.shop-items'));

        let sortedItems;
        if (sortType === 'asc') {
            sortedItems = items.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
        } else if (sortType === 'desc') {
            sortedItems = items.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
        } else {
            sortedItems = items.sort((a, b) => a.dataset.originalIndex - b.dataset.originalIndex);
        }

        sortedItems.forEach(item => container.appendChild(item));
    });
});

document.querySelectorAll('.shop-items').forEach((item, idx) => {
    item.dataset.originalIndex = idx;
});

window.addEventListener('DOMContentLoaded', () => {
    const activeSort = document.querySelector('.sort-btn.active');
    if (!activeSort) {
        const defaultBtn = document.querySelector('.sort-btn[data-sort="default"]');
        const default2Btn = document.querySelector('.sort-btn-mb[data-sort="default"]');
        if (defaultBtn) defaultBtn.classList.add('active'); default2Btn.classList.add('active'); 
    }
});

const passwordInput = document.querySelector('.pass-type');
const togglePasswordBtn = document.querySelector('.pass-btn');

if (passwordInput && togglePasswordBtn) {
    togglePasswordBtn.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
       
        document.querySelectorAll('.pass-eye').forEach((result) => {result.classList.toggle('nosee-btn');})
    });
}

document.querySelectorAll('.nav-img').forEach((img) => {
    img.addEventListener('click', () => {
        const sortClass = img.getAttribute('data-sort');
        document.querySelectorAll('.visual-img').forEach((visualImg) => {
            if (visualImg.classList.contains(sortClass)) {
                visualImg.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.querySelectorAll('.carrusel-img').forEach((container) => {
    const imgs = Array.from(container.querySelectorAll('.visual-img'));
    const dots = Array.from(container.parentElement.querySelectorAll('.dot-img'));

    container.addEventListener('scroll', function () {

        let closestIdx = 0;
        let minDiff = Infinity;
        imgs.forEach((img, idx) => {
            const imgRect = img.getBoundingClientRect();
            const contRect = container.getBoundingClientRect();
            const imgCenter = imgRect.left + imgRect.width / 2;
            const contCenter = contRect.left + contRect.width / 2;
            const diff = Math.abs(imgCenter - contCenter);
            if (diff < minDiff) {
                minDiff = diff;
                closestIdx = idx;
            }
        });

        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === closestIdx);
        });
    });
});

document.querySelectorAll('.dot-img')[0].classList.add('active');

const rightButtons = Array.from(document.getElementsByClassName('button-right'));
const leftButtons = Array.from(document.getElementsByClassName('button-left'));
const containers = Array.from(document.getElementsByClassName('carrusel-nav'));

let index = 0;
for (const rightButton of rightButtons) {
    const container = containers[index];
    rightButton.addEventListener("click", function () {
        container.scrollLeft += 150;
    });
    index++;
}

index = 0;
for (const leftButton of leftButtons) {
    const container = containers[index];
    leftButton.addEventListener("click", function () {
        container.scrollLeft -= 150;
    });
    index++;
}

containers.forEach(container => {
    const leftButton = container.previousElementSibling;
    leftButton.disabled = true;
    leftButton.classList.add('icon-o-left');
});


containers.forEach(container => {
    container.addEventListener("scroll", function () {
        const rightButton = container.nextElementSibling;
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            rightButton.disabled = true;
            rightButton.classList.add('icon-o-right');
        } else {
            rightButton.disabled = false;
            rightButton.classList.remove('icon-o-right');
        }
    });
});

containers.forEach(container => {
    container.addEventListener("scroll", function () {
        const leftButton = container.previousElementSibling;
        if (container.scrollLeft === 0) {
            leftButton.disabled = true;
            leftButton.classList.add('icon-o-left');
        } else {
            leftButton.disabled = false;
            leftButton.classList.remove('icon-o-left');
        }
    });
});


function Flip() {
    document.querySelectorAll('.Flip-opacity').forEach((result) => {result.classList.toggle('Flip-o');})
    document.querySelectorAll('.Flip-disable').forEach((result) => {result.classList.toggle('Flip-o2');})
    document.querySelectorAll('.Flip-color').forEach((result) => {result.classList.toggle('Flip-c');})
    document.querySelectorAll('.Flip-btn').forEach((result) => {result.classList.toggle('Flip-btn-o');})
    document.querySelectorAll('.Flip-btn-r').forEach((result) => {result.classList.toggle('Flip-btnr-o');})
    containers.forEach(container => {
    const rightButton = container.nextElementSibling;
    container.scrollLeft -= 150;
    rightButton.classList.remove('icon-o-right');
    });

    // en movil no se activa este evento
    if (window.innerWidth <= 780) {
        document.querySelectorAll('.Flip-opacity').forEach((result) => {result.classList.remove('Flip-o');})
        document.querySelectorAll('.Flip-color').forEach((result) => {result.classList.remove('Flip-c');})
        document.querySelectorAll('.Flip-btn').forEach((result) => {result.classList.remove('Flip-btn-o');})
    }
}

document.querySelectorAll('.size-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const activeSize = document.querySelector('.size-btn.active');
    if (!activeSize) {
        const defaultSize = document.querySelector('.size-btn[data-sort="s"]');
        if (defaultSize) {
            defaultSize.classList.add('active');
        }   
    }
});

document.querySelectorAll('.quantity-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        const quantityNumber = btn.parentElement.querySelector('.quantity-number');
        let currentValue = parseInt(quantityNumber.textContent, 10);
        
        if (btn.getAttribute('data-sort') === 'less') {
            if (currentValue > 1) {currentValue--;}
        } else if (btn.getAttribute('data-sort') === 'more') {currentValue++;}
        quantityNumber.textContent = currentValue;

        document.querySelectorAll('.ani-number').forEach((result) => {result.classList.add('n-active')});
        setTimeout(() => {document.querySelectorAll('.ani-number').forEach((result) => {result.classList.remove('n-active')});}, 300);
    });
});

document.querySelectorAll('.quantity-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});