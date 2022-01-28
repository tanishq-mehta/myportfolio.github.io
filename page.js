/*if(window.location == '#page2'){
    document.getElementById("link2").style.textDecoration ="underline";
}*/

function handleOver()   
{  
     document.getElementById('button1').style.backgroundColor = 'rgb(214,162,146)';  
}  

function handleOut()   
{  
     document.getElementById('button1').style.backgroundColor = 'rgb(183,130,118)';  
}  

function handleOver2()   
{  
     document.getElementById('button2').style.backgroundColor = 'rgb(214,162,146)';  
}  

function handleOut2()   
{  
     document.getElementById('button2').style.backgroundColor = 'rgb(183,130,118)';  
}  


const sections = document.querySelectorAll("section");
//const navLi = document.querySelectorAll("nav .container ul li");
window.addEventListener("scroll", function () {
          let current = "";
          sections.forEach((section) => {
               const sectionTop = section.offsetTop;
               const sectionHeight = section.clientHeight;
               if (pageYOffset >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute("id");
               }

          
          });

          /*navLi.forEach((li) => {
               li.classList.remove("active");
               if (li.classList.contains(current)) {
                    li.classList.add("active");
               }
          });*/

          if(current == "page1"){
               document.getElementById("link2").classList.remove("active");
               document.getElementById("link3").classList.remove("active");
               document.getElementById("link1").classList.add("active");
          }

          if(current == "page2"){
               document.getElementById("link1").classList.remove("active");
               document.getElementById("link3").classList.remove("active");  
               document.getElementById("link2").classList.add("active");
              
          }

          if(current == "page3"){
               document.getElementById("link1").classList.remove("active");
               document.getElementById("link2").classList.remove("active");
               document.getElementById("link3").classList.add("active");
          }

          if(current == "page2" || current == "page3"){
               document.getElementById("sbutton").style.display = "block";
          }
          else{
               document.getElementById("sbutton").style.display = "none";
          }

         



     });

     

     function scrollup(){
          document.documentElement.scrollTop = 0;
     }

     function hscrollup(){
          document.getElementById("sbutton").style.backgroundColor = "rgb(214,162,146)";
     }

     function hnscrollup(){
          document.getElementById("sbutton").style.backgroundColor = "white";
     }


     



