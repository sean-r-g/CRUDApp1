const allCollections = [
  '/meat/',
  '/poultry/',
  '/seafood/',
  '/vegetarian/'
]

const meatIds = [
  // Meat IDs
  '627e61e62bb57b0582eebacf',
  '627e61e62bb57b0582eebad0',
  '627e61e62bb57b0582eebace',
  '627e61e62bb57b0582eebad2',
  '627e61e62bb57b0582eebad1'
]
const poultryIds = [
  // Poultry IDs
  '627eb0d0d4db37aebf5d184c',
  '627eb0d0d4db37aebf5d184b',
  '627eb0d0d4db37aebf5d184d',
  '627eb0d0d4db37aebf5d184f',
  '627eb0d0d4db37aebf5d1850',
  '627eb0d0d4db37aebf5d184e'
]
  // Seafood IDs 
const seafoodIds = [
  '627fae3e3cb27533adf95980',
  '627fae3e3cb27533adf9597f',
  '627fae3e3cb27533adf9597e',
  '627fae3e3cb27533adf95982',
  '627fae3e3cb27533adf95983',
  '627fae3e3cb27533adf95981'
]
  // Vegetarian IDs 
const vegIds = [
  '627fb6fb4cfc08bf0a6fe29c',
  '627fb6fb4cfc08bf0a6fe29e',
  '627fb6fb4cfc08bf0a6fe29d',
  '627fb6fb4cfc08bf0a6fe2a1',
  '627fb6fb4cfc08bf0a6fe2a0',
  '627fb6fb4cfc08bf0a6fe29f'
]

const randomizeCollection = (collections) => {
  for (let i = 0; i < collections.length; i++) {
    let selectedCollection = collections[Math.floor(Math.random() * collections.length)]
    return selectedCollection
  }
}


const randomizeId = (idArray) => {
  for (let i = 0; i < idArray.length; i++) {
    let selectedId = idArray[Math.floor(Math.random() * idArray.length)]
    return selectedId
  }
}

const randomCollection = randomizeCollection(allCollections)

let randomId = null

if (randomCollection == '/meat/') {
  randomId = randomizeId(meatIds)
} else if (randomCollection == '/poultry/') {
  randomId = randomizeId(poultryIds)
} else if (randomCollection == '/seafood/') {
  randomId = randomizeId(seafoodIds)
} else {
  randomId = randomizeId(vegIds)
}



$(()=>{


  $('#random-btn').on('click', ()=>{
    window.location.replace(`/recipes${randomCollection}${randomId}`)
  })

})

