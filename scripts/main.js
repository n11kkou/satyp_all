window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("header").className = "onscroll";
  } else {
    document.getElementById("header").className = "";
  }
}

function return_top() {
  scroll(0, $('header').position().top)
}

function tap(element){
  $(".fa-heart-o").toggleClass("tap");
  // element.toggleClass("tap");
}

