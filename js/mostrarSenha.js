
let btns = document.querySelectorAll('.lnr-eye');
btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        let targetId = btn.previousElementSibling.getAttribute('id');
        let input = document.getElementById(targetId);

        if (input && input.type === 'password') {
            input.type = 'text';
            btn.src = 'imgs/olho.svg';
        } else if (input)
        {
            input.type = 'password';
            btn.src = 'imgs/olho-fechado.png';
        }
    });
});