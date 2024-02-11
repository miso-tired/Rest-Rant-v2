const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
})

// GET /places
router.get('/', (req,res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/Thai-Restaurant.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/Coding-Cat.jpg'
      }]      
    res.render('places/index', { places })
})

module.exports = router