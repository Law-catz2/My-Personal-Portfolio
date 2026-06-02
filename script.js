const whoseBlog = [
    {
        id: 'b1',
        blogId: 'blog1',
        title: "The four University horsemen",
        category: "Fiction",
        date: 'May 10, 2026',
        color: '#98deec',
        content: "They're a four-horsemen cult. They plunder native villages, enslave the lame, steal from the poor, and give it to the rich. The four Dumaguete Universities are the horsemen. You give your all, you die. Beware!",
    },
    {
        id: 'b2',
        blogId: 'blog2',
        title: "Robert Kiyosaki",
        date: 'May 10, 2026',
        category: "Entrepreneurship",
        color: '#f8aee4',
        content: "I read a book from my real estate mom's cousin. To my surprise, the author had accussed the traditional education a lot. That's what I'd thought. He proclaimed that school couldn't teach you financial literacy. What school taught me was to be a multi-awarded employee. No social skills, no self-help, no money management. Just working harder for the government's sake. Period."
    },
    {
        id: 'b3',
        blogId: 'blog3',
        title: "A secret business community",
        date: 'May 10, 2026',
        category: "Entrepreneurship",
        color: '#f8aee4',
        content: "I spent a weekday studying near my real estate mom's place. There, she wanted to introduce me to a family of rich ancestors (With kids of course). I was so scared. She was introducing me to a horde to hungry zombies. She summoned one of the zombies and encouraged me to mingle. They didn't eat my brains. they acted nice. I shared my favorite activities in college, and they loved it. It reminded them of their creative business tactics. By the way, they had autistic-friendly ways to help me socialize. At this point, they were unsillimanized too.",
    },

]
/* This is for adding a blog list*/
let b = document.getElementById('blog-lists')
whoseBlog.map(props => {
    let title = document.createElement('div')
    title.className = "blog-page"
    title.innerHTML = ` <article>
                            <h2>${props.title}</h2><small class="category">${props.category}</small>
                        </article>
                        <small><strong>Date: </strong>${props.date}</small>
                        <p class=${props.blogId}>${props.content}</p>
                        <div class='reader'>
                            <button onclick='showContent(document.querySelector(".${props.blogId}"), document.querySelector(".${props.id}"))' class="${props.id}" id="read-blog">Read Article ⮟</button>
                        </div>`
    title.querySelector('.category').style.color = props.color // Initiating styles
    title.querySelector(`.${props.blogId}`).style.display = "none"
    b.appendChild(title) // Append style
})

function showContent(article, buttonID) {
    if (article.style.display === "none") {
        article.style.display = "block";
        buttonID.innerHTML = "Close Article ⮝"
    } else {
        article.style.display = "none"; 
        buttonID.innerHTML = "Read Article ⮟"
    }
}