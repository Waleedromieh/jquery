/// <reference types="../@types/jquery" />
//offset

    let portfolioOffset=$('#portfolio').offset().top

$(window).on('scroll',function(){
   let scrollTop= $(window).scrollTop()

    if(scrollTop>portfolioOffset){
        $('#navbar-example').css('backgroundColor','rgba(0,0,0,0.8)')
        $('#btnUp').fadeIn()
    }else{
        $('#navbar-example').css('backgroundColor','transparent')
        $('#btnUp').fadeOut()
    }
})

// ===============================

$('.nav-item a').on('click',function(){
    $('a').removeClass('active') //   <==
    $(this).addClass('active')  //   <==
  let aHref= $(this).attr('href')
    let offsett=$(aHref).offset().top
    $('body').animate({scrollTop:offsett})
})

// =========================================

$('#btnUp').on('click',function(){
    $('body').animate({scrollTop:0},1000)
})

// =================================
//loading

$(function(){
    $('.loader').fadeOut(500,function(){
        $('.loading').fadeOut(500,function(){
            $('body').css('overflow','auto')
        })
    })
})

// ===================================


let colors=$('.sidebar-inner span')
colors.eq(0).css('background-color','blue')
colors.eq(1).css('background-color','#09c')
colors.eq(2).css('background-color','red')
colors.eq(3).css('background-color','bisque')
colors.eq(4).css('background-color','green')

let color=localStorage.getItem('color')
$('h1,h2,h3,p').css('color',color)
colors.on('click',function(){
   let x= $(this).css('background-color')
   console.log(x);
   localStorage.setItem('color',x)
   $('h1,h2,h3,p').css('color',x)
})

let isOpen=true
$('.sidebar i').on('click',function () {

   let x= $('.sidebar-inner').width()

   if(isOpen){
    $('.sidebar').animate({left:-x})   
    isOpen=!isOpen
   }else{
    $('.sidebar').animate({left:0})   
    isOpen=!isOpen
   }
            
})
// =============================
$(function() {
    $('.skitter-large').skitter();
  });


  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    center:true,
    autoplay:true,
    autoplayTimeout:500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})
new WOW().init();