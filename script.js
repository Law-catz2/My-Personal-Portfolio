const submitButton = document.getElementById('lubot')
const home = document.getElementById('home')

submitButton.addEventListener('click', function() {
    let getName = document.getElementById('name').value
    let getEmail = document.getElementById('email').value
    let getMessage = document.getElementById('message').value
    alert(`Your name: ${getName}\nYour email address: ${getEmail}\nMy message is: ${getMessage}`)
})


function whoAmI() {
    let p = document.querySelector('p')
    p.textContent ="Lawrence G. Cataylo"
}


function displaySecret() {
     p = document.querySelector('p')
    p.innerHTML ="<h2>Hey everyone! I'm Lawrence.</h2>I'm currently studying Computer Science at Foundation University. I program as a hobby. Yet, I explore a wide range of skills as a hobbyist. I gain enough knowledge to challenge the rules of society. I'm ready to learn and work along with you.<br><br>Thanks!"
}
function handleSkillSets() {
     p = document.querySelector('p')
    p.innerHTML = "<ul><li>Penetration testing</li><li>Software Engineering</li><li>Secure Coding</li><li>Mathematics & logistics</li><li>Game developer</li></ul>"
}

