//fetch using https://api.nasa.gov/
require("dotenv").config()
//console.log(process.env)
 //import 'dotenv/config'
 //import express from 'express'

document.querySelector('button').addEventListener('click', getFetch)



function getFetch(){
  const choice = document.querySelector('input').value
  const api_key = process.env.API_KEY //or use... const api_key = 'PUT_YOUR_API_KEY_HERE'
  const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${choice}`
console.log(choice)
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let goImage = document.querySelector('img')  
        let goVideo = document.querySelector('iframe')
        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerText = data.explanation
        if( data.media_type === 'image'){
          return goImage.src = data.hdurl, goImage.style.display = 'block', goVideo.style.display = 'none'

        }else if(data.media_type === 'video'){
          return goVideo.src = data.url, goVideo.style.display = 'inline-block', goImage.style.display = 'none'
        }
        
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//Not using in this project/ keeps browser from reloading forms and css in such case use
/*if (module.hot){
  module.hot.accept()
}*/



