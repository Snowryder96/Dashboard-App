window.addEventListener('scroll', function(e) {
    var derniere_position_de_scroll_connue = window.scrollY;
    console.log(window.scrollY)
    if(window.scrollY > 150){
        document.querySelector('#navbar-brand').classList.add('regular')
        document.querySelector('#navbar-brand').classList.remove('enlarge')
        // document.querySelector('.nav-username').classList.add("regular");
        // document.querySelector('.nav-username').classList.remove("enlarge");
        document.querySelector('#profile-pic').classList.add("profile-pic");
        document.querySelector('#profile-pic').classList.remove("profile-enlarge");
       
         
    }else{
        document.querySelector('#navbar-brand').classList.remove('regular')
        document.querySelector('#navbar-brand').classList.add('enlarge');
        // document.querySelector('.nav-username').classList.remove("enlarge");
        // document.querySelector('.nav-username').classList.add("enlarge");
        document.querySelector('#profile-pic').classList.remove("profile-pic");
        document.querySelector('#profile-pic').classList.add("profile-enlarge");
        
    }
})
var navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(element => {
    element.addEventListener("click", function(e){
        if(e.target.dataset.active === "false"){
            e.target.dataset.active = "true";
            e.target.classList.add("active")
        }
    })
});
    