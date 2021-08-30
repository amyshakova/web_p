const humburger = document.querySelector('.humburger-menu'),
      background = document.querySelector('.background-menu'),
      close = document.querySelector('.menu_close'),
      menu = document.querySelector('.menu');

humburger.addEventListener('click', (e) => {
    e.preventDefault();

    background.classList.toggle('active');
    menu.classList.toggle('menu_active');
    humburger.classList.toggle('humburger-menu_active');
});

close.addEventListener('click', (e) => {
    e.preventDefault();

    background.classList.toggle('active');
    menu.classList.toggle('menu_active');
    humburger.classList.toggle('humburger-menu_active');
});


background.addEventListener('click', (e) => {
    background.classList.toggle('active');
    menu.classList.toggle('menu_active');
    humburger.classList.toggle('humburger-menu_active');
});

const counters = document.querySelectorAll('.skillsDiagr_item_percent'),
      lines = document.querySelectorAll('.skillsDiagr_item_scalePer');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
})