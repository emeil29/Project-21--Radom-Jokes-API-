const jokeBtn = document.getElementById('jokeBtn')
const jokeEl =document.getElementById('joke')
  
jokeBtn.addEventListener('click', generateJoke)

generateJoke()
function generateJoke (){
    const config = {headers: {
        Accept: 'application/json'
    }
}
    fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
        jokeEl.innerHTML = data.joke
    })
}
