// const dayNight = document.querySelector(".day-night");

    // function darkmode(){
    //     alert("d")
    //     var mee = document.getElementById("me");
    //     mee.style.backgroundColor="red"
    //     alert("hhhjjjjjjjjjj")
    //     // dayNight.querySelector("i").classList.toggle("fa-sun");
    //     // dayNight.querySelector("i").classList.add("fa-moon");
    //     // document.body.classList.toggle("dark")
    // }
   

// window.addEventListener("load" , () => {
//     if(document.body.classList.contains("dark")){
//         dayNight.querySelector("i").classList.add("fa-sun");
//     }
//     else{
//         dayNight.querySelector("i").classList.add("fa-moon");
//     }
// })

// const themeToggle = document.getElementById('theme-toggle');

// Function to toggle the dark theme
function toggleDarkTheme(x) {
   document.body.classList.toggle('dark-theme');
   x.className.toggle("fa-sun");
   
}

