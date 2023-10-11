const searchField = document.getElementById('search')
const resultElement = document.getElementById('result')

searchField.addEventListener('keyup', async function (event) {
  const search = searchField.value.toLowerCase().trim()

  if (!search) return resultElement.innerHTML = ''

  // const res = await fetch('./data.json')
  const validWords = await fetchValidWords(search)

  console.log(validWords)

  const searchIsValid = validWords.includes(search)
  const suggestions = validWords.filter(word => word.startsWith(search))

  const message = searchIsValid ? 'Valid Word' : 'Invalid Word'

  console.log(suggestions)

  const html = `
   <p data-result="${searchIsValid ? 'valid' : 'invalid'}">${message}</p>
        <div>
          <ul>
            ${suggestions.map(suggestion =>  `<li>${suggestion}</li>`).join('')}
          </ul>
  `

  resultElement.innerHTML = html
})

async function fetchValidWords (search) {
  const res = await fetch('./data.json')
  return res.json()
}
