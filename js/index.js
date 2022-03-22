const cards = document.querySelectorAll('.card')
const body = document.body

cards.forEach(card => {
    card.addEventListener('click', (e) => {
        removeActive()
        card.classList.add('active')
        let url = e.target.dataset.url
        body.style.backgroundImage = `url('../img/${url}.jpg')`
    })
})

const removeActive = () => {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}