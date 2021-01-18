const eventsView = () => {
  barsToggle();

  linksHover();

  navNarResize();
  windowWidthCange();

  darkWindowOff();

  videoSecOpen();
  // darkMode();
};

let state = false;

// בודק באיזה רזולוציה מסך של משתמש ומציג את הפריט וקישורים בהתאפ!!!!!

const windowWidthCange = () => {
  $(window).resize(function () {
    // location.reload()
  });

  let width = $(window).width();
  console.log(width);
  if (width < 768) {
    $("#btn-info").attr("href", "#know-how-link2");
    if ((state = true)) {
      // disapear the nav after user clicks link
      $("nav a").on("click", () => {
        $("nav").slideToggle();
      });
    }
  }
};

const barsToggle = () => {
  $("#bars").on("click", () => {
    $("nav").slideToggle();
    state = true;
  });
};

const linksColorMouseOver = () => {
  let defaultColor = "";
  $("a[data-color]").hover(
    function () {
      $(this).css(`transition`, " 700ms");
      defaultColor = $(this).css("color");

      $(this).css("color", $(this).data("color"));
    },
    function () {
      $(this).css(`transition`, " 1000ms");
      $(this).css("color", defaultColor);
    }
  );
};

let linksHover = () => {
  linksColorMouseOver("a");

  // linksColorMouseOver("header .navButtons a:nth-of-type(1)");
};

//Function that resize nab bar.
const navNarResize = () => {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      // $("#navbar").css("height","60px")
      $("#id-logo").css("height", "40px");
    } else {
      document.getElementById("navbar").style.padding = "0";
      $("#id-logo").css("height", "90px");
    }
  }
};

const darkWindowOff = () => {
  $(".dark_window").on("click", () => {
    $(".dark_window").css("display", "none");
  });
};

const darkWindowOn = (
  _author,
  _workname,
  _technique,
  _price,
  _status,
  _img
) => {
  $("#id-dark-img").attr("src", `Pics/${_img}`);
  $("#id-dark-author").html(_author);
  $("#id-dark-name").html(_workname);
  $("#id-dark-techique").html(_technique);
  $("#id-dark-price").html(_price);
  $("#id-dark-status").html(_status);
  $(".dark_window").css("display", "flex");
};

const videoSecOpen = () => {
  $(".gallery").on("click", "#video", () => {
    $("#video-open").slideToggle("slow");
  });
};
const darkMode = () => {
  let matched = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (matched) $("#id-logo").attr("src", "Pics/logo2.png");
};
