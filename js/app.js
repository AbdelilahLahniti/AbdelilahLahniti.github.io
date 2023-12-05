$(document).ready(function(){

   $('.menu').click(function(){
      $('.navlist').toggleClass('mobileMenu');
      $('.menu3').toggleClass('hide')
      $('.menu2').toggleClass('retate')
      $('.menu1').toggleClass('retate2')
      $('body').toggleClass('bodyStyleWithHidden')
   })
   $('.navlist li').click(function(){
      $('.navlist').toggleClass('mobileMenu');
      $('.menu3').toggleClass('hide')
      $('.menu2').toggleClass('retate')
      $('.menu1').toggleClass('retate2')
      $('body').removeClass('bodyStyleWithHidden')

   })

   
 
   $('.next').click(function(){
      let now_div = $('.showSlide');
      const next_div = now_div.next();
      if(next_div.length){
        now_div.fadeOut().removeClass('showSlide');
        next_div.fadeIn().addClass('showSlide');
      }
   })
   $('.prev').click(function(){
    let now_div = $('.showSlide');
    const prev_div = now_div.prev();
    if(prev_div.length){
      now_div.fadeOut().removeClass('showSlide');
      prev_div.fadeIn().addClass('showSlide');
    }
 })

}); 

// -------------------------mouseMove------------


    var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove",function(e){
      cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });
    document.addEventListener('mouseout',() => {
      cursor.style.display = "none";
      cursor2.style.display = "none";
   });
  



// ------------------scroll active----------------
 
$(document).ready(function () {
   
    // Add active class to the current link when scrolling
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();

        // Assign active class to nav links while scrolling
        $('section').each(function (i) {
            if ($(this).position().top <= scrollDistance) {
                $('.navlist a.active').removeClass('active');
                $('.navlist a').eq(i).addClass('active');
            }
        });
    }).scroll();
});

// --------------------Animation----------------
ScrollReveal({
   reset:true,
   distance:'80px',
   duration:2000,
 });

 ScrollReveal().reveal('.contentHome , .heading , .contact h3,',{origin:'top'});
 ScrollReveal().reveal('.homeImage , .service , form ',{origin:'bottom'});
 ScrollReveal().reveal('.contentHome h1 ,.contentHome .cv  , .service h3 , .service .cv , .project2',{origin:'left', distance:'200px',});
 ScrollReveal().reveal('.aboutContent , .project1 , ',{origin:'right'});
 ScrollReveal().reveal(' .project1',{origin:'right', distance:'300px'});
 ScrollReveal().reveal('.project2',{origin:'left', distance:'300px'});


// ---------------------spicialty animating-------------

const typed = new Typed('.specialty',{
   strings : ['Web developer' , 'Graphic Designer'],
   typeSpeed:100,
   backSpeed:100,
   backDelay:1000,
   loop:true
})
const typeds = new Typed('.specialtis',{
   strings : ['Web developer' , 'Graphic Designer'],
   typeSpeed:100,
   backSpeed:100,
   backDelay:1000,
   loop:true
})


// -------------------loading screen-------------
document.addEventListener("DOMContentLoaded", function() {
   // Simulate content loading (replace this with your actual content loading logic)
   setTimeout(function() {
     document.getElementById("loader").style.display = "none";
   }, 500);
});



// -------------------aboutPage---------------
$(document).ready(function(){
   $('.aboutBtn').click(function(){

         
         $(".allContent").fadeOut();
        

         $(".aboutPage").fadeIn(2000);
      
   })
   $('.x').click(function(){
         
      $(".allContent").fadeIn(2000);
      $(".aboutPage").fadeOut(1000);

      
   
})
})

$(document).ready(function(){
   $('#cv').click(function(){
      $('.cvsBlock').fadeIn();
      $('.cvsBlockBackGround').fadeIn();
      
      $('body').css({
         'overflow':'hidden',
         'height':'100vh'
      });

   })
   $('.x2').click(function(){
      $('.cvsBlock').fadeOut();
      $('.cvsBlockBackGround').fadeOut();
      $('body').css({
         'overflow':'auto',
         'height':'fit-content'
      });
   });
})
//---------------- cv download ----------

document.getElementById('cvENG').addEventListener('click', function () {
   // Replace 'my_pdf_file.pdf' with the actual PDF file URL or path
   var pdfUrl = './documents/ENG.pdf'

   // Update the download link's href and simulate a click
   var downloadLink = document.getElementById('cvENG');
   downloadLink.href = pdfUrl;
   downloadLink.click();
 });
 

document.getElementById('cvFR').addEventListener('click', function () {
   // Replace 'your_pdf_file.pdf' with the actual PDF file URL or path
   var pdfUrl = './documents/FR.pdf'

   // Update the download link's href and simulate a click
   var downloadLink = document.getElementById('cvFR');
   downloadLink.href = pdfUrl;
   downloadLink.click();
   
 });
//---------------- cv download ----------




 
