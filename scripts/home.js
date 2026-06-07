const intro = document.getElementById('more-about-me')
const competencies = document.getElementById('skills-info')
const closeMe = intro.querySelector('button:last-of-type')
const closeHere = competencies.querySelector('button:last-of-type')

closeMe.addEventListener('click', () => {
    intro.close()
})
closeHere.addEventListener('click', () => {
    competencies.close()
})
document.getElementById('whois').addEventListener('click', () => {
    intro.showModal()
})
document.getElementById('systemctl').addEventListener('click', () => {
    competencies.showModal()
})

