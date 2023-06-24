let clicknavbarbtn= document.querySelector(" .clicknavbar");
let headerarealinks = document.querySelector(".header-area .links");
clicknavbarbtn.addEventListener("click",function(){
    headerarealinks.classList.toggle("showed");
});

//settting fa spin
document.querySelector(".setting-box .toggle-setting .fa-gear").onclick=function(){
    this.classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("open");
}
/////////////////////////////

//colors
let allcolor=document.querySelectorAll(".setting-box .option-box  .colors-list li");
if(localStorage.getItem('color')){
    document.querySelector(":root").style.setProperty("--main-color",localStorage.getItem('color'));
    allcolor.forEach(k=>{
        k.classList.remove("active");
        if(k.getAttribute("data-color")==localStorage.getItem('color')){
k.classList.add("active");
        }

    })
    
};
allcolor.forEach(i=>{
    i.addEventListener("click",function(){
allcolor.forEach(k=>{
    k.classList.remove("active");
})
i.classList.add("active");
        let getattr=i.getAttribute("data-color");
        localStorage.setItem("color",getattr);
        document.querySelector(":root").style.setProperty("--main-color",localStorage.getItem('color'));

    })
})

////////////////////////////////////

//SliderImage
let landingpage=document.querySelector(".landing-page");
let imgarray=["m1.jpg","m2.jpg","m3.jpg","m4.jpg"];

let backgroundoption=true;
let backgroundinterval;
let backgroundLocalItem=localStorage.getItem("localOption");
if(localStorage.getItem("localOption")!=null){
if(backgroundLocalItem==="true"){
    backgroundoption=true;

}
else{
    backgroundoption=false;
    landingpage.style.backgroundImage='url("../image/'+localStorage.getItem("rand")+'")';
}
document.querySelectorAll(".random-backgrounds span").forEach(i=>{
i.classList.remove('active');
})
if(backgroundLocalItem==="true"){
    document.querySelector(".random-backgrounds .yes").classList.add("active");
}else{
    document.querySelector(".random-backgrounds .no").classList.add("active");

}
}



///////////////////////////////////////////////////


function randomizeoption(){{


    if(backgroundoption==true){

        backgroundinterval=setInterval(function(){
            let rand=Math.floor(Math.random()*imgarray.length);
            localStorage.setItem('rand',imgarray[rand]);
               landingpage.style.backgroundImage='url("../image/'+localStorage.getItem("rand")+'")';
               landingpage.style.backgroundsize="cover";
           },3000);
    }

}}





            let randomBackEl=document.querySelectorAll(".random-backgrounds span");


randomBackEl.forEach(op=>{
    op.addEventListener("click",function(e){
randomBackEl.forEach(o=>{
    o.classList.remove("active");
});
op.classList.add("active");
        let getback=op.getAttribute("data-b");


        if(e.target.dataset.b==="yes"){
backgroundoption=true;
console.log(backgroundoption);
randomizeoption();
localStorage.setItem("localOption",true);
        }
        else{
backgroundoption=false;
console.log(backgroundoption);
clearInterval(backgroundinterval);
localStorage.setItem("localOption",false);
        }

    })

      
})

randomizeoption();
let ourskills=document.querySelector(".skills");
window.onscroll=function(){




    let allskills=document.querySelectorAll(".skills .skill-box .skill-progress span");
 let skillsOfsetTop=ourskills.offsetTop;
 let skillsOuterheight=ourskills.offsetHeight;
 let windowheight=window.innerHeight;
let windowscolltop=this.pageYOffset;

if(windowscolltop>(skillsOfsetTop+skillsOuterheight-windowheight-100)){
allskills.forEach(e=>{
    e.style.width = e.dataset.p;
})

}
else{
    allskills.forEach(l=>{
        l.style.width ="0px";
    })
}



}




// gallery

let galleryimg=document.querySelector(".galleryout img");
let galleryout=document.querySelector(".galleryout");
let del=document.querySelector(".galleryout .del");

let gallery=document.querySelectorAll(".gallery .img-box img");


gallery.forEach(gal=>{
    gal.addEventListener("click",function(){
        galleryout.classList.add("yes");
galleryimg.src=gal.src;
    })
})
del.addEventListener("click",function(){
    galleryout.classList.remove("yes");
})



//bullet
let bullet=document.querySelectorAll(".nav-bullets .bullet");
bullet.forEach(b=>{
    b.addEventListener("click",function(e){
document.querySelector(e.target.dataset.s).scrollIntoView({
    behavior: 'smooth'
});
});
});

//click

let bclick=document.querySelectorAll(".option .click-opt span");
var navb=document.querySelector(".nav-bullets");
let getlocalbullets=localStorage.getItem("val");
if(getlocalbullets!=null){
    bclick.forEach(o=>{
        o.classList.remove("active");
    })
if(getlocalbullets=="show"){
    navb.classList.add("show");
    document.querySelector(".option .click-opt .yes").classList.add("active");

}else{
    navb.classList.remove("show");
    document.querySelector(".option .click-opt .no").classList.add("active");

}
}else{
    navb.classList.add("show");
   
}

bclick.forEach(i=>{

    i.addEventListener("click",function(e){
        bclick.forEach(p=>{
            p.classList.remove("active");
        });
i.classList.add("active");
let get=e.target.dataset.bull;
navb.classList.add("show");
if(get=="yes"){
 navb.classList.add("show");
localStorage.setItem("val","show");
}else if(get=="no"){
navb.classList.remove("show");
localStorage.setItem("val","hide");

}
});
});

//reset
let reset=document.querySelector(".setting-box .reset .reset-option");
reset.addEventListener("click",function(){
    localStorage.removeItem("val");
    localStorage.removeItem("color");
    localStorage.removeItem("localOption");
window.location.reload();
})
