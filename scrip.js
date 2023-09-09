var main = document.getElementById('in');
var a = main.getElementsByClassName('slide');
console.log(a);
function next() {
    main.append(a[0]);
}
function prev() {
    main.prepend(a[2]);
}



// GSAP coder start from here

const tl = gsap.timeline();
tl.from("nav h1 , nav ul ", {
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.5
})



tl.from(".firstContent h1, .firstContent p,.firstContent div", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .6
})

tl.to(".firstContent div  ", {
    y: 10,
    repeat: -1,
    duration: .6,
    yoyo: true

})

gsap.from(".firstOur>div>img ",{
    x:-100,
    opacity:0,
    duration:0.7,
    stagger:0.3,
    scrollTrigger:{
        trigger:".firstOur div img ",
        scroller:"body",
        start:210,
       end:680,
        //    markers:true,
        scrub:true

    }
})

gsap.from(".secondOur  ",{
    x:100,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:".secondOur ",
        scroller:"body",
        start:210,
        end:680,
        // markers:true,
        scrub:true

    }
})

gsap.from("#special>h1, #special>p,.special1>div",{
    y:20,
    opacity:0,
    stagger:.3,
    scrollTrigger:{
   trigger:"#special>h1 , #special>p,.special1>div",
   scroller:"body",
   scrub:.2
   
    }
})
tl.from(".discover1 ",{
    x:-150,
    opacity:0,
    duration:0.7,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#discover>div  ",
        scroller:"body",
        // markers:true,
        scrub:true

    }
})
gsap.from(".discover2  ",{
   
    opacity:0,
    duration:0.7,
    stagger:0.2,
    
    scrollTrigger:{
        trigger:"#discover>div  ",
        scroller:"body",
        
        // markers:true,
        scrub:true

    }
})

gsap.from(".inChef>div h4 ,.inChef>div p",{
    y:15,
    duration:1,
 
    repeat:-1,
    yoyo:true
})