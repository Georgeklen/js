
let toggleMenu = () => {
    const btnMenu = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    // const closeBtn = document.querySelector('.close-btn');
    // const menuItems = menu.querySelectorAll('ul>li')
    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };
  
    btnMenu.addEventListener('click', handlerMenu);
  
    menu.addEventListener('click', (event) => {
      let target = event.target;
  
      if (!target.classList.contains('close-btn')) {
        target = target.closest('li');
      }
      if (target) {
        handlerMenu();
      };
      
      });
  
  };

  export default toggleMenu;