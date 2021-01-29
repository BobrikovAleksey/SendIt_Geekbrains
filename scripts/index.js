import './slick-init.js';
import './input-mask-init.js';


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

    submitContacts(event) {
        const inputs = event.target.querySelectorAll('input[type="text"], input[type="phone"]');
        inputs.forEach((el) => el.value = '');

        event.preventDefault();
        this.closePopup();
    },

    popupClick(event) {
        if (event.target.classList.contains('popup')) this.closePopup();
    },

    /**
     * Открывает всплывающее окно
     * @param name String
     */
    openPopup(name) {
        const $$ = this.cache;

        if (!$$.initialized || !(name in $$.popup)) return;

        !$$.main.hasAttribute('data-blur') && $$.main.setAttribute('data-blur', '');
        $$.popup[name].hasAttribute('data-hide') && $$.popup[name].removeAttribute('data-hide');
        $$.popup.main.hasAttribute('data-hide') && $$.popup.main.removeAttribute('data-hide');
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
            !$$.popup.main.hasAttribute('data-hide') && $$.popup.main.setAttribute('data-hide', '');
        }
    },

    init() {
        this.cache = {
            initialized: true,
            main: document.querySelector('main'),
            popup: {
                main: document.querySelector('.popup'),
                phoneMenu: document.querySelector('.phone-menu'),
                contactForm: document.querySelector('.contact-form'),
            },
        };

        window.addEventListener('resize', this.closePopup.bind(this, ''));

        this.cache.popup.main.addEventListener('click', this.popupClick.bind(this));

        document.querySelectorAll('[data-phone-submit]').forEach((el) => {
            el.addEventListener('submit', this.submitContacts.bind(this));
        });

        document.querySelectorAll('[data-phone-menu="open"]').forEach((el) => {
            el.addEventListener('click', this.openPopup.bind(this, 'phoneMenu'));
        });
        document.querySelectorAll('.phone-menu__link, [data-phone-menu="close"]').forEach((el) => {
            el.addEventListener('click', this.closePopup.bind(this, 'phoneMenu'));
        });

        document.querySelectorAll('[data-contact-form="open"]').forEach((el) => {
            el.addEventListener('click', this.openPopup.bind(this, 'contactForm'));
        });
    },
};


app.init();
