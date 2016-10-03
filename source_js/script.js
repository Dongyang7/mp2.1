// Write any custom javascript functions here

$(document).ready(function(){
        $("#nav1,#nav2,#nav3").on('click', function(event){
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop:$(hash).offset().top+5
                    },600,function(){
                    window.location.hash = hash;
                });
            }
        });

    $(document).on("scroll",function(){
        //the first part is for the resizing of the navigation bar
      if($(document).scrollTop()>60){
            $(".nav-bar").removeClass("large").addClass("small");
//            $(".logo").css("max-width","50%");
            $(".logo").addClass("resize-small").removeClass("resize-large");
        }
        else{
            $(".nav-bar").removeClass("small").addClass("large");
//            $(".logo").css("max-width","100%");
            $(".logo").removeClass("resize-small").addClass("resize-large");
        }

      if($(document).scrollTop() < $('#heroes-description').position().top){
            $('#nav1').addClass('nav-active');
            $('#nav2').removeClass('nav-active');
            $('#nav3').removeClass('nav-active');
      }
      else if($(document).scrollTop() < $('#map-carousel').position().top){
            $('#nav1').removeClass('nav-active');
            $('#nav2').addClass('nav-active');
            $('#nav3').removeClass('nav-active');
      }
      else{
            $('#nav1').removeClass('nav-active');
            $('#nav2').removeClass('nav-active');
            $('#nav3').addClass('nav-active');
      }
    });
});