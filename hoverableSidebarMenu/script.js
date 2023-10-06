const sidebar = document.querySelector('.sidebar')
const lockIcon = document.querySelector('#lock-icon')
const sidebarClose = document.querySelector('#sidebar-close')

const toggling = () => {
    if (!sidebar.classList.contains('close')) {
        sidebar.classList.add('close')
    }
    sidebarClose.addEventListener('click', function () {
        console.log("class avail");
        sidebar.classList.remove('close')
    })
}

lockIcon.addEventListener('click', toggling)