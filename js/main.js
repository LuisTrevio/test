
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
        if (defaultBtn) defaultBtn.classList.add('active');
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
