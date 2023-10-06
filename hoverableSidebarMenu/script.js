const sidebar = document.querySelector('.sidebar')
const lockIcon = document.querySelector('#lock-icon')
const sidebarClose = document.querySelector('#sidebar-close')
const menuContainer = document.querySelector('.menu_container')

const toggling = () => {
    if (!sidebar.classList.contains('close')) {
        sidebar.classList.add('close')
    }
    sidebarClose.addEventListener('click', function () {
        sidebar.classList.remove('close')
    })
    menuContainer.addEventListener('mouseenter', function () {
        sidebar.classList.remove('close')
    })
    menuContainer.addEventListener('mouseleave', function () {
        sidebar.classList.add('close')
    })
}
 
lockIcon.addEventListener('click', toggling)