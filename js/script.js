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
  });

  $(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#overlay").show();
    }).mouseout(function(){
      $("#overlay").hide();
    });
  });
  $(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
  });
  $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
  });
  $(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
  });
  
  $(document).ready(function(){
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
  });

  $(document).ready(function(){
    $("#CONTACT").submit(function(event){
      var name = $("input#name").val();
      var email = $("input#email").val();
      var message = $("").val();
      if ($("input#name").val() && $("input#email").val()) {
          alert(name + ", we have received your message. Thank you for reaching out to us.");
      } else {
          alert("Please enter your Name and Email");
      }
      
    });
  })
