
function toggleDarkTheme() {
    var dark = document.getElementById("darkicon");
   document.body.classList.toggle('dark-theme');
   if(dark.className==="bi bi-moon-fill"){
        dark.className="bi bi-sun-fill"
   
   }
   else{
    dark.className="bi bi-moon-fill";
   }
}

function HideNave(){
  
  var icon = document.getElementById("icon1");
  var aside = document.getElementById("aside");
  var section = document.getElementsByClassName("section");
  if(aside.style.display=="block"){
    aside.style.display="none";
    icon.style.left="0"

  }
  else{
    aside.style.display="block";
    icon.style.left="62px"
  }
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycby4KKpaAHvgif6nr58Cn9boi-M87pb0xcGX7w-JmbYlgUt-RJcPFJGAc2NdoiIJHxVi/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg= document.getElementById("sms");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message Send Successfully"
        msg.className="bi bi-check-circle-fill";
        setTimeout(function(){
            msg.innerHTML="";
            msg.className="";
        },5000)
        form.reset(); 
      })
      .catch(error => console.error('Error!', error.message))
  })

