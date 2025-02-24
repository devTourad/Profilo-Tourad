let menuList = document.getElementById("menuList")
        menuList.style.maxHeight = "0px";

        function toggleMenu(){
            if(menuList.style.maxHeight == "0px")
            {
                menuList.style.maxHeight = "300px";
            }
            else{
                menuList.style.maxHeight = "0px";
            }
        }
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
        
 window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
     })
        
})       