window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}


function viewProduct(){
  const element = document.getElementById("brandLogo");
  element.scrollIntoView();
}
function topFunction() {
document.documentElement.scrollTop = 0;
}

function viewReviews(){
  const element = document.getElementById("reviews");
  element.scrollIntoView();
}
function viewAbout(){
  const element = document.getElementById("aboutus");
  element.scrollIntoView();
}