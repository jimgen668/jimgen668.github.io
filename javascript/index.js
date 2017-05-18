
$(window).on('load',function(){
    $('.preloader').delay(100).fadeOut("speed"); 
});

$(function(){
	$('#main-content').fullpage({
       sectionsColor:['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
       anchors:['page1','page2','page3','page4'],
       menu:'.col-sm-4 row col-sm-offset-4 hidden-xs hidden-sm',
       resize:'true',
       css3:'ture',
       paddingBottom:'0',
       autoScrolling:'true',
       slidesNavigation:'true',
       afterLoad:function(link,index){
       	
                switch(index){
                case 1:  
                     move('.section1 h3').scale(1.5).duration('1s').end();
                     move('#img1').set('top','10px').duration('1s').end();
                     move('.section1-p1').set('margin-right','0px').duration('1s').end(function(){
                     	 move('.section1-p2').set('margin-right','0px').duration('1s').end(function(){
                     	   move('.section1-p3').set('margin-right','0px').duration('1s').end(function(){
                     	   	move('.section1-p4').set('margin-right','0px').duration('1s').end(function(){
                     	   		move('.section1-p5').set('margin-right','0px').duration('1s').end()
                     	   	});
                     	   });	
                     	 });
                     });
                     break;
                case 2:
                     break;
                case 3:
                     break;
                case 4:
                     break;     
  
                default:
                break;
            };

       },
       onLeave:function(link,index){
                   switch(index){
              	   case 1:  
                        move('.section1 h3').scale(1.5).end();
                        move('.section1 .section1-p1').set('margin-right','0px').duration('0s').end()
                        move('.section1 .section1-p2').set('margin-right','0px').duration('0s').end()
                        move('.section1 .section1-p3').set('margin-right','0px').duration('0s').end()
                        move('.section1 .section1-p4').set('margin-right','0px').duration('0s').end()
                        move('.section1 .section1-p5').set('margin-right','0px').duration('0s').end()

                    break;
                    case 2:
                    break;
                    case 3:
                        // $('.pic1').bind('mouseover', function() {
                        //     move('.pic1').set('top','30%').duration('5s').end(function(){
                        //       move('.pic1').set('opacity','1').duration('2s');
                        //     });                        
                        // });

                    break;
                    case 4:
                    break;

                    default:
                    break; 

                  };              
       },

	});

   $('.col-sm-3 .skills').mouseover(function(){
             $('.skills-details ').css('visibility','visible'); 
             $('.skills-details ').mouseout(function(){
                     $('.skills-details').css('visibility','hidden');
                 }); 
             $('.skills-details').mouseover(function(){
                    $('.skills-details ').css('visibility','visible');  
               });  
               });
   $('.col-sm-3 .skills').mouseout(function(){

                   if ($(this).hasClass('.skills-details')) {
                        $('.skills-details ').css('visibility','visible');
                   }else {
                    $('.skills-details ').css('visibility','hidden');
                   }
            

              });
   $('#mobile').click(function(){
         alert('正在建设中,敬请期待.......');
   });
    $('#other').click(function(){
         alert('正在建设中,敬请期待.......');
   });
    $(window).scroll(function() {
      if ($('#main-content').offset>50) {
        // $('.row').addClass('top-nav-collapse')
        alert('5555')
      }
      else{
        alert('66666')
      }
    });
                       
});












