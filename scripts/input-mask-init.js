import './modules/jquery-inputmask.js';


$(document).ready(function(){
    $('input[data-phone]').inputmask('+7 (999) 999-99-99');
});
