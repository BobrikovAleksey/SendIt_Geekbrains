import './modules/jquery.js';
import './slick-init.js';


if (location.host === 'bobrikovaleksey.github.io') {
    $('a[href]').each((i, el) => {
        const href = el.getAttribute('href');
        if (href[0] === '/') {
            el.setAttribute('href', `/SendIt_Geekbrains${href}`);
        }
        console.log(el.getAttribute('href'));
    });
}


const app = {
    cache: {},
    state: {},

    /**
     * Открывает всплывающее окно
     * @param name String
     */
    openPopup(name) {
        const $$ = this.cache;

        if (!$$.initialized || !(name in $$.popup)) return;

        !$$.main.hasAttribute('data-blur') && $$.main.setAttribute('data-blur', '');
        $$.popup[name].hasAttribute('data-hide') && $$.popup[name].removeAttribute('data-hide');
    },

    /**
     * Закрывает всплывающее окно / все всплывающие окна
     * @param name String
     */
    closePopup(name = '') {
        const $$ = this.cache;

        if (!$$.initialized || (name !== '' && !(name in $$.popup))) return;

        $$.main.hasAttribute('data-blur') && $$.main.removeAttribute('data-blur');
        if (name === '') {
            Object.keys($$.popup).forEach((name) => {
                !$$.popup[name].hasAttribute('data-hide') && $$.popup[name].setAttribute('data-hide', '');
            });
        } else {
            !$$.popup[name].hasAttribute('data-hide') && $$.popup[name].setAttribute('data-hide', '');
        }
    },

    init() {
        this.cache = {
            initialized: true,
            main: document.querySelector('main'),
            popup: {
                phoneMenu: document.querySelector('.phone-menu'),
                contactForm: document.querySelector('.contact-form'),
            },
        };

        window.addEventListener('resize', this.closePopup.bind(this, ''));
        document.querySelectorAll('button[data-phone-menu="open"]').forEach((el) => {
            el.addEventListener('click', this.openPopup.bind(this, "phoneMenu"));
        });
        document.querySelectorAll('button[data-phone-menu="close"]').forEach((el) => {
            el.addEventListener('click', this.closePopup.bind(this, "phoneMenu"));
        });
    },
};


app.init();
