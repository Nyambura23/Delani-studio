  $(document).ready(function(){
    let elements=[1,2,3]

    elements.forEach((index)=>{
      $('.content'+index).click(function(){
        $('.hidden-content'+index).toggle();
        $('.content'+index).toggle()
      });

      $('.hidden-content'+index).click(function(){
        $('.content'+index).toggle();
        $('.hidden-content'+index).toggle()
      });
    });
    
    $("#work1").mouseover(function(){
      $("#overlay1").show();
    }).mouseout(function(){
      $("#overlay1").hide();
    });

    $("#work2").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
    $("#work3").mouseover(function(){
      $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
    $("#work4").mouseover(function(){
      $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
    $("#work5").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
    $("#work6").mouseover(function(){
      $("#overlay6").show();
    }).mouseout(function(){
      $("#overlay6").hide();
    });
    $("#work7").mouseover(function(){
      $("#overlay7").show();
    }).mouseout(function(){
      $("#overlay7").hide();
    });
    $("#work8").mouseover(function(){
      $("#overlay8").show();
    }).mouseout(function(){
      $("#overlay8").hide();
    });
  
  
    (function($) {window.fnames = new Array(); 
    window.ftypes = new Array();
    fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';
    ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';
    fnames[6]='MMERGE6';
    ftypes[6]='text';}(jQuery));
    var $mcj = jQuery.noConflict(true);
    
    });
    
  
  
