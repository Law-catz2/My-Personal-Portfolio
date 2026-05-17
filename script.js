const home = document.getElementById('home')
const whoseBlog = [
    {
        title: "The four University horsemen",
        content: "They're a four-horsemen cult. They plunder native villages, enslave the lame, steal from the poor, and give it to the rich. The four Dumaguete Universities are the horsemen. You give your all, you die. Beware!",
    },
    {
        title: "Robert Kiyosaki",
        content: "I read a book from my real estate mom's cousin. To my surprise, the author had accussed the traditional education a lot. That's what I'd thought. He proclaimed that school couldn't teach you financial literacy. What school taught me was to be a multi-awarded employee. No social skills, no self-help, no money management. Just working harder for the government's sake. Period."
    },
    {
        title: "A secret business community.",
        content: "I spent a weekday studying near my real estate mom's place. There, she wanted to introduce me to a family of rich ancestors (With kids of course). I was so scared. She was introducing me to a horde to hungry zombies. She summoned one of the zombies and encouraged me to mingle. They didn't eat my brains. they acted nice. I shared my favorite activities in college, and they loved it. They reminded them of their business in the B and I quadrant. By the way, they had autistic-friendly ways to help me socialize. At this point, they were unsillimanized too.",
    },

]


/* This is for adding a blog list*/
let b = document.getElementById('blog-lists')
for(let i = 0; i < whoseBlog.length; ++i) {

    let h2 = document.createElement('h2')
    h2.innerText = whoseBlog[i].title
    b.appendChild(h2)

    h2 = document.createElement('p')
    h2.innerText = whoseBlog[i].content
    b.appendChild(h2)
}


/* This is for the home page*/
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

