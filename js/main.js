const profile = [
  {topic: "Name", content: "Tomoya Tanaka"},
  {topic: "Mentor name", content: "TT"},
  {topic: "From", content: "Osaka"},
  {topic: "Course", content: "WebS iPhone"},
]

window.onload = () => {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');

  const result = document.getElementsByClassName('wrapper');
  const elements = Array.from(result);
  elements.map( element => {
    element.addEventListener("click", active);
  })

  // profileのコンテンツ生成
  const profileWrapper = document.getElementsByClassName('profile')
  profile.map( element => {
    const h1 = document.createElement("h1")
    h1.appendChild(document.createTextNode(element.topic))
    const p = document.createElement("p")
    p.appendChild(document.createTextNode(element.content))
    profileWrapper[0].appendChild(h1)
    profileWrapper[0].appendChild(p)
  })

  // const skillsWrapper = document.getElementsByClassName('skills')
  // skills.map( skill => {
  //   const img = document.createElement("img")
  //   img.setAttribute("width", 24)
  //   img.setAttribute("src", skill.url)
  //   skillsWrapper[0].appendChild(img)
  //   skillsWrapper[0].appendChild(document.createTextNode(skill.name))
  // })

  // Recent postsのコンテンツ生成
  fetch('https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=8', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + process.env.API_KEY,
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const contentWrapper = document.getElementsByClassName('recent-posts')
      data.map( post => {
        const element = document.createElement("a")
        const content = document.createTextNode(post.title)
        element.appendChild(content)
        element.setAttribute("href", post.url)
        contentWrapper[0].appendChild(element)
      })
    })
}

let active = e => {
  const contentWrapper = document.getElementById('contents')
  contentWrapper.classList.add('content-wrapper-active')
  const result = document.getElementsByClassName('wrapper')
  const elements = Array.from(result)
  elements.map( element => {
    element.classList.remove('active-content')
  })
  e.currentTarget.classList.add('active-content')

  const contentsResult = document.getElementsByClassName('content')
  const contents = Array.from(contentsResult)
  contents.map( content => {
    content.style.transition = '0s'
    content.style.visibility = 'hidden'
    content.style.opacity = 0
  })
  
  const content = document.getElementsByClassName(e.currentTarget.id)
  content[0].style.opacity = 1
  content[0].style.transition = '1s'
  content[0].style.visibility = 'visible'
}


window.addEventListener("mousemove", e => {
  const card = document.getElementById('card');
  const { x, y, width, height } = card.getBoundingClientRect();
  const centerPoint = {x: x + width / 2, y: y + height / 2}
  const degreeX = (e.clientY - centerPoint.y) * 0.008
  const degreeY = (e.clientX - centerPoint.x) * -0.008

  card.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`
})

