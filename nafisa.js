      var useriderrorElement = document.getElementById('useriderror')
      const password = document.getElementById('password')
      const name = document.getElementById('name')
      const address = document.getElementById('address')
      const country = document.getElementById('country')
      const zipcode = document.getElementById('zipcode')
      const email = document.getElementById('email')
      const sex = document.getElementById('sex')
      const language = document.getElementById('language')
      const about = document.getElementById('about')
      const form = document.getElementById('form')
      const errorElement = document.getElementById('error')
      const passerrorElement = document.getElementById('passerror')
      const ziperrorElement = document.getElementById('ziperror')
      const button = document.getElementById('button')

      document.getElementById('button').addEventListener('submit', function(evt){
       evt.preventDefault();
       console.log("here")
       document.getElementById('error').innerText="ERROR"

    })
      function myFunction() {
       var a = password.value; var b = zipcode.value; var c = email.value; var d = userid.value;
       var numbers=/^[0-9]+$/
       console.log(a,b,c,d)
       if(d.length<6){
         useriderrorElement.innerText="userid must be 6 characters long"
         useriderrorElement.style.color="red"
      }
      else if(a.length<8){
         passerrorElement.innerText="password lengh must be 8 character long with minimum 1 digit"
         passerrorElement.style.color="red"
      }
      else if(!b.match(numbers)){
         ziperrorElement.innerText="zipcode must be digits"
         ziperrorElement.style.color="red"
      }
      else if( b.length<6){
         ziperrorElement.innerText="zipcode must be 6 digits"
         ziperrorElement.style.color="red"
      }
      else if( b.length>10){
         ziperrorElement.innerText="zipcode must be less than 10 digits"
         ziperrorElement.style.color="red"
      }

      

   }
   function checkuserid(){ 
      var d = userid.value;
      if(d.length<6){
         useriderrorElement.innerText="userid must be 6 characters long"
         useriderrorElement.style.color="red"}
         else{
             useriderrorElement.innerText=""
         }
      }

      function checkpassword(){
         var a = password.value;
         if(a.length<8){
         passerrorElement.innerText="password lengh must be 8 character long with minimum 1 digit"
         passerrorElement.style.color="red"
      }
       else{
             passerrorElement.innerText=""
         }

      }
      function checkzipcode(){
         var numbers=/^[0-9]+$/
         var b = zipcode.value;
         if(!b.match(numbers)){
         ziperrorElement.innerText="zipcode must be digits"
         ziperrorElement.style.color="red"
      }
      else if( b.length<6){
         ziperrorElement.innerText="zipcode must be 6 digits"
         ziperrorElement.style.color="red"
      }
      else if( b.length>10){
         ziperrorElement.innerText="zipcode must be less than 10 digits"
         ziperrorElement.style.color="red"
      }
       else{
             ziperrorElement.innerText=""
         }

      }