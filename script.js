const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')


btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
    //focus input is to focus on input so its easy to start typing
})
