window.onload = () => {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');

  const image = document.getElementById('image');

  // document.getElementById('webS').onmouseover = () => {
  //   image.className = "";
  //   image.classList.add('onhover', 'ruby');
  // }

  // document.getElementById('webS').onmouseout = () => {
  //   image.classList.remove('onhover')
  // }
  
  // document.getElementById('iPhone').onmouseover = () => {
  //   image.className = "";
  //   image.classList.add('onhover', 'swift');
  // }

  // document.getElementById('iPhone').onmouseout = () => {
  //   image.classList.remove('onhover')
  // }

  const result = document.getElementsByClassName('wrapper')
  const elements = Array.from(result)
  elements.map( element => {
    element.addEventListener("click", active)
  })
}

let active = e => {
  const result = document.getElementsByClassName('wrapper')
  const elements = Array.from(result)
  elements.map( element => {
    console.log(element)
    element.classList.remove('active-content')
  })
  e.currentTarget.classList.add('active-content')
}


window.addEventListener("mousemove", e => {
  const card = document.getElementById('card');
  const { x, y, width, height } = card.getBoundingClientRect();
  const centerPoint = {x: x + width / 2, y: y + height / 2}
  const degreeX = (e.clientY - centerPoint.y) * 0.008
  const degreeY = (e.clientX - centerPoint.x) * -0.008

  card.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`
})

