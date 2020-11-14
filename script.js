var form = document.querySelector('form');
var user = document.getElementById('user');
var password = document.getElementById('clave');
var button = document.getElementById('button');
var error = document.getElementById('error');


form.onsubmit = function (e) {
    if (user.value === '' || password.value === '') {
        e.preventDefault();
        error.textContent = 'Complete ambos campos, son obligatorios.';
    }
}
