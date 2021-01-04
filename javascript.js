$(document).ready(function(){
 $("#design-paragraph").click(function(){
  $("#design-img").show();
  $("#design-paragraph").hide();
 });
 $("#design-img").click(function(){
   $("#design-paragraph").show();
   $("#design-img").hide();
 })
});

$(document).ready(function(){
  $("#development-paragraph").click(function(){
   $("#development-img").show();
   $("#development-paragraph").hide();
  });
  $("#development-img").click(function(){
    $("#development-paragraph").show();
    $("#development-img").hide();
  })
 });

 $(document).ready(function(){
  $("#product-paragraph").click(function(){
   $("#product-img").show();
   $("#product-paragraph").hide();
  });
  $("#product-img").click(function(){
    $("#product-paragraph").show();
    $("#product-img").hide();
  })
 });

 $(document).ready(function(){
  $("#images1").mouseover(function(){
    $("#ges1").show();
  }).mouseout(function(){
    $("#ges1").hide();
  });
});
$(document).ready(function(){
  $("#images2").mouseover(function(){
    $("#ges2").show();
  }).mouseout(function(){
    $("#ges2").hide();
  });
});
$(document).ready(function(){
  $("#images3").mouseover(function(){
    $("#ges3").show();
  }).mouseout(function(){
    $("#ges3").hide();
  });
});
$(document).ready(function(){
  $("#images4").mouseover(function(){
    $("#ges4").show();
  }).mouseout(function(){
    $("#ges4").hide();
  });
});

$(document).ready(function(){
  $("#images5").mouseover(function(){
    $("#ges5").show();
  }).mouseout(function(){
    $("#ges5").hide();
  });
  $("#images6").mouseover(function(){
    $("#ges6").show();
  }).mouseout(function(){
    $("#ges6").hide();
  });
  $("#images7").mouseover(function(){
    $("#ges7").show();
  }).mouseout(function(){
    $("#ges7").hide();
  });
  $("#images8").mouseover(function(){
    $("#ges8").show();
  }).mouseout(function(){
    $("#ges8").hide();
  });
});

$(document).ready(function(){
 $("form#form2").submit(function(event){
   let name = $("input#yourname").val();
   let email = $("input#youremail").val();
   let message = $("textarea#comment").val();
   event.preventDefault();
   if ($("input#yourname").val() && $("input#youremail").val()){
    alert (name + ", we have received your message. Thank you for contacting us.");
  }
  else{
    alert("Please provide your name and email");
  }
 });
});
