console.log('this is show password');
let link = document.getElementById('link');
link.addEventListener('click', () => {
    console.log('you click the eye button');
    let pwd = document.getElementById('pwd');
    // pwd.type = 'text';
    // console.log(icon);
    if (pwd.type === 'text') {
        let icon2 = document.getElementById('icon2')
        icon2.classList.add('fa-eye');
        icon2.classList.remove('fa-eye-slash');
        icon2.id = 'icon';
        pwd.type = 'password';
        console.log(icon2.id);
    } else {
        let icon = document.getElementById('icon')
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
        icon.id = 'icon2';
        pwd.type = 'text';
        console.log(icon.id);
    }

});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('you click on the submit button');

});
let x = 4;
let y = 78;

