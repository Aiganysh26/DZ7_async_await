const cards = document.querySelector('.cards')
const getData = async () => {
  try {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  data.forEach(card => {
    let cardElement = document.createElement('div')
    cardElement.setAttribute('class', 'news_card')
    cardElement.innerHTML = `
      <img src="./image/news.jpg" alt="nature">
      <h2>${card.title}</h2>
      <p>${card.body}</p> `
    cards.append(cardElement)
  })} catch (e) { console.log('ERROR')}
}
getData()