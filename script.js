gsap.to(".header",{
    scrollTrigger:{
        trigger:".firstIntro",
        start:"bottom 20%",
        end:"70% 0%",
        scrub:true,
        onEnter: () => gsap.to('.header', {backgroundColor:'white'}), 
        onLeave: () => gsap.to('.header', {backgroundColor:'w#fae7e7'}), 
        onLeaveBack: () => gsap.to('.header', {backgroundColor:'#fae7e7'}), 
        onEnterBack: () => gsap.to('.header', {backgroundColor:'white'})
    },

})
gsap.to(".right",{
    scrollTrigger:{
        trigger:".blogs",
        start:"top 15%",
        end:"bottom -400%",
        scrub:true,
        onEnter: () => gsap.to('.right', {position:'fixed'}), 
        onLeave: () => gsap.to('.right', {position:'absolute'}), 
        onLeaveBack: () => gsap.to('.right', {position:'absolute'}), 
        onEnterBack: () => gsap.to('.right', {position:'fixed'})
    },

})
