// function to scroll to top on refresh
document.body.scrollTop = document.documentElement.scrollTop = 0;
jQuery(document).ready(function() {
  jQuery("html").animate({ scrollTop: 0 }, "fast");
});
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

// add loading gif before page loads
$("body").append(
  '<div style="" id="loadingDiv"><div class="loader"></div></div>'
);
$(window).on("load", function() {
  setTimeout(removeLoader, 700); //wait for page load PLUS two seconds.
});
function removeLoader() {
  $("#loadingDiv").fadeOut(500, function() {
    // fadeOut complete. Remove the loading div
    $("#loadingDiv").remove(); //makes page more lightweight
  });
}
// function to show divs when scrolled to
function scrollAppear() {
  let aboutHead = document.querySelector(".about-headings");

  let aboutImg = document.querySelector(".about-img");
  let aboutIntro = document.querySelector(".about-intro");
  let aboutPreGrids = document.querySelector(".about-pre-grids");

  let aboutGrids = document.querySelector(".about-grids");
  let techDiv = document.querySelector(".technologies");
  let projectsDiv = document.querySelector(".my-projects");
  let contactDiv = document.querySelector(".contact");
  let projectHeaderDiv = document.querySelector(".projects-head");
  let gstDiv = document.querySelector(".gst-calculator");
  let weatherDiv = document.querySelector(".weather-search");
  let physioDiv = document.querySelector(".physio-site");

  let targetArr = [];
  targetArr.push(
    aboutGrids,
    aboutPreGrids,
    aboutIntro,
    aboutHead,

    aboutImg,
    techDiv,
    projectsDiv,
    contactDiv,
    projectHeaderDiv,
    gstDiv,
    weatherDiv,
    physioDiv
  );
  // map over each const in the array and perform
  targetArr.forEach(targetDiv => {
    let introPosition = targetDiv.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (introPosition < screenPosition) {
      targetDiv.classList.add("scroll-appear");
    } else if (introPosition > screenPosition) {
      targetDiv.classList.remove("scroll-appear");
    }
  });
  return;
}

window.addEventListener("scroll", scrollAppear);

// navbar onclick to scroll to section
function scrollToSection(x) {
  let element = document.getElementById(x);
  element.scrollIntoView();
}

// go to top button function
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 470 ||
    document.documentElement.scrollTop > 470
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function shuffle(array) {
  var i = array.length,
    j = 0,
    temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));

    // swap randomly chosen element with current element
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

var ranNums = shuffle([
  -330,
  -315,
  -300,
  -285,
  -270,
  -255,
  -240,
  355,
  365,
  375,
  390,
  405,
  430,
  445,
  460,
  475
]);
var ranNums2 = shuffle([
  90,
  120,
  150,
  180,
  210,
  240,
  300,
  330,
  360,
  390,
  420,
  450,
  480
]);

// random scatter words

// check for scrollappear changes then execute animation-delay for about-text-points

function checkForChanges() {
  // if ($(".about-text-points").hasClass("scroll-appear"))
  $(function() {
    $(".about-text-points h3").each(function(i, elt) {
      $(elt).css({
        right: ranNums[i],
        bottom: ranNums2[i]
        // bottom: Math.floor(Math.random() * 50) * 10,

        // animation: "fadeIn 3s",
        // "animation-delay": `${Math.floor(Math.random() * 6)}s`,
        // "animation-fill-mode": "forwards",
        // "padding-right": "3.5rem",
        // visibility: "hidden"
      });
    });
  });
}
// setInterval(checkForChanges, 1000);

window.addEventListener("scroll", checkForChanges);
