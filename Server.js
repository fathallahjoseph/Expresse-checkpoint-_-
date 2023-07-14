const express = require('express')
const app = express()
const port = 4200
const Work=(req,res,next)=>{
  let date=new Date();
  let day=date.getDay();
  let hour=date.getHours();
  (day>=1 && day<=5 && hour>=9 && hour<=17)? next(): res.send("The web application is only available during working hours (Monday to Friday,  from 9 to 17).")
}


app.use(Work)
app.use('/',require('./Newroutes'))
app.listen(port, () => {console.log(`Example app listening on port ${port}`)})
app.get('/style.css',(req, res) => {
  res.sendFile(__dirname+'/style.css')
})
  
  