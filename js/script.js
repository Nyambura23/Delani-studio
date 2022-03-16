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

    // let details=[1,2,3,4,5,6,7,8]
    // details.forEach((index)=>{
    // $("#work"+index).mouseover(function(){
    //   $("#overlay"+index).show();
    // }).mouseout(function(){
    //   $("#overlay"+index).hide();
    // });

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
  });
    
    $(document).ready(function(){
      $("form#formA").submit(function(event){
        // event.preventDefault();
        var name = $("input#MERGE1").val();
        var email = $("input#MERGE0").val();
        var message = $("textarea#comment").val();
        if ($("input#MERGE1").val() && $("input#MERGE0").val()){
          alert(name + ", we have received your message. Thank you for reaching out to us.");
        }
        else {
          alert("Please enter your name and email!");
        }
        
      });
    
 });