const express=require('express')
const router=express.Router()
router.get('/', (req, res) => {
    res.sendFile(__dirname+'/Home.html')
  })

  router.get('/Contact.html', (req, res) => {
    res.sendFile(__dirname+'/Contact.html')
  })
  router.get('/HomePage.html', (req, res) => {
    res.sendFile(__dirname+'/HomePage.html')
  })
  router.get('/OurServices.html', (req, res) => {
    res.sendFile(__dirname+'/OurServices.html')
  })
  module.exports=router
  //exports router 