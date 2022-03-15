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
    
    $("#work1").click(function(){
      $("#overlay1").show();
    }).click(function(){
      $("#overlay1").hide();
    });
    $("#work2").click(function(){
      $("#overlay2").show();
    }).click(function(){
      $("#overlay2").hide();
    });
    $("#work3").click(function(){
      $("#overlay3").show();
    }).click(function(){
      $("#overlay3").hide();
    });
    $("#work4").click(function(){
      $("#overlay4").show();
    }).click(function(){
      $("#overlay4").hide();
    });
    $("#work5").click(function(){
      $("#overlay5").show();
    }).click(function(){
      $("#overlay5").hide();
    });
    $("#work6").click(function(){
      $("#overlay6").show();
    }).click(function(){
      $("#overlay6").hide();
    });
    $("#work7").click(function(){
      $("#overlay7").show();
    }).click(function(){
      $("#overlay7").hide();
    });
    $("#work8").click(function(){
      $("#overlay8").show();
    }).click(function(){
      $("#overlay8").hide();
    });
  
  
    (function($) {window.fnames = new Array(); 
    window.ftypes = new Array();
    fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';
    ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';
    fnames[3]='ADDRESS';ftypes[3]='address';
    fnames[4]='PHONE';ftypes[4]='phone';
    fnames[5]='BIRTHDAY';
    ftypes[5]='birthday';
    fnames[6]='MMERGE6';
    ftypes[6]='text';}(jQuery));
    var $mcj = jQuery.noConflict(true);
    });
    
  
  
