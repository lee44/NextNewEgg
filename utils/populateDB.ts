import axios from 'axios'

type Components = {
  id: String
  title: String
  link: String
  img: String
  price: Number
  brand: String
  model: String
  power: String
  color: String
  efficiency: String
}

export const populateDB = () => {
  const options = {
    method: 'GET',
    url: 'https://computer-components-api.p.rapidapi.com/power_supply',
    params: { limit: '5', offset: '0' },
    headers: {
      'X-RapidAPI-Key': '391504d87dmsh7c214d86f6bbc04p1cfeb2jsn9caf616b3cc6',
      'X-RapidAPI-Host': 'computer-components-api.p.rapidapi.com',
    },
  }

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.error(error)
    })
}

//run npx ts-node populateDB.ts
populateDB()
