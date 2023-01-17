$(window).scroll(function() {
    $("header").css("background-color" , "#799959");
  });
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
      $("header").css({ background: "#799959" });
      $("header ul li a").css({ color: "white" });
    } else {
      $("header").css({background: "#799959" } );
      $("header ul li a").css({ color: "black" });
    }
  });


  

  let switchMode=document.getElementById("switchMode");
  switchMode.oneclick=function(){
    let theme=document.getElementById("theme");
    if(theme.getAttribute("href")=="./css/light-mode.css"){
      theme.href="./css/dark-mode.css";

    }else{
      theme.href="./css/light-mode.css"
    }
  }
  