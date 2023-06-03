const url = 'https://jsonplaceholder.typicode.com/posts'
const cards = document.querySelector('.cards')

const getData = async () => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  })

  const data = await response.json()
  console.log(data)
  
  data.forEach(card => {
    let cardElement = createCard(card)
    cards.append(cardElement)
  });

}

function createCard(card) {
  let cardElement = document.createElement('div')
  cardElement.classList.add = ('card')

  cardElement.innerHTML = `
    <img src="./image/news.jpg" alt="nature">
    <h2>${card.title}</h2>
    <p>${card.body}</p>
  `
  return cardElement
}


getData()