//locamotive js for smooth scrolling
//both locomotive js and gsap can't work parallely because it restricts other animations
const locomotiveJS = () => {
  const scroller = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  gsap.registerPlugin(ScrollTrigger);

  scroller.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update());

  // Function to refresh LocomotiveScroll on window resize
  const handleWindowResize = () => {
    scroller.update();
    ScrollTrigger.refresh();
  };

  // Listen for window resize events and call the function
  window.addEventListener("resize", handleWindowResize);

  // Call the function once on page load to initialize LocomotiveScroll
  handleWindowResize();
};

locomotiveJS();


var cursor = document.querySelector(".cursor");
var main  = document.querySelector(".main");
//whenever mouse moves on main this gets executed
document.addEventListener("mousemove",function(coordinates){
    cursor.style.left = coordinates.x+2+"px";
    cursor.style.top = coordinates.y+2+"px";
})


//timeLine is used to reduce the code, so that we can use multiple times
var timeLine1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top 20%",
    end: "top 0",
    scrub: 3,
  },
});

//when you have headinganimation name this makes the animation with same name start the same time.
timeLine1.to(
  ".page1 h1",
  {
    x: -100,
  },
  "headinganimation"
);
timeLine1.to(
  ".page1 h2",
  {
    x: 100,
  },
  "headinganimation"
);

timeLine1.to(".page1 video",{
    width:"100%"
},"headinganimation")


var timeLine2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      start: "top -100%",
      end: "top -150%",

      scrub: 3,
    },
  });
timeLine2.to(".main",{
    backgroundColor:"white",
    color:"#0F0D0D"
},"headinganimation")

// var timeLine5 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".page1 h1",
//     scroller: ".main",
//     start: "top -240%",
//     end: "top -320%",
//     markers:true,
//     scrub: 3,
//   },
// });

// timeLine5.to(".page3-part2 video",{
//      marginLeft:0,
//       opacity:1,
//       duration:2,
//       scale:1
// },"headinganimation")

// var timeLine3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".page1 h1",
//     scroller: ".main",
//     start: "top -200%",
//     end: "top -300%",
//     markers:true,
//     scrub: 3,
//   },
// });
// timeLine3.to(".main",{
//   backgroundColor:"red",
//   color:"#0F0D0D"
// },"headinganimation")


var timeLine4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      start: "top -380%",
      end: "top -420%",
      scrub: 3,
    },
  });

  timeLine4.to(".main",{
    backgroundColor:"black",
    color:"white"
  },"headinganimation")

//selecting all the boxes at a single time
var boxes = document.querySelectorAll(".page5-box")
boxes.forEach((ele)=>{
  ele.addEventListener("mouseenter",function(){
    var img  = ele.getAttribute("data-image");
    cursor.style.width = "300px";
    cursor.style.height = "300px";
    cursor.style.borderRadius = "0px";
    cursor.style.backgroundColor = "black"
    cursor.style.backgroundImage = `url(${img})`
  });
  ele.addEventListener("mouseleave",function(){
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.borderRadius = "100%";
    cursor.style.backgroundColor = "#EDBFFD"
    cursor.style.backgroundImage = `url(${null})`
  });
});



var navElements = document.querySelectorAll(".navbar h4");
var purpleHoverScreen  = document.querySelector(".purple-hover")
navElements.forEach((ele)=>{
  ele.addEventListener("mouseenter",function(){
    purpleHoverScreen.style.display="flex"
  });
 
  ele.addEventListener("mouseleave",function(){
    purpleHoverScreen.style.display="none";
  })
})


const makeString = (string)=>{
    var res = "";
    for(var i=0;i<10;i++){
      res+=string+" ";
    }
    return res;
}

var map = {
  "Work":"page3",
  "Contact":"page4"
};

var navBarSelectorEle = document.querySelectorAll(".navbarpart2 h4");
var displayTextEle = document.querySelector(".purple-hover marquee");
navBarSelectorEle.forEach((ele)=>{


  var internalContent = ele.textContent;
  const res = makeString(internalContent.slice(0,internalContent.length-1));
  
   ele.addEventListener("mouseenter",function(internal){
      displayTextEle.textContent = res;
    var onClickElement = document.getElementById(map[internalContent.slice(0,internalContent.length-1)]);
    onClickElement.scrollIntoView();
   })
})


