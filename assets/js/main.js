$(document).ready(function () {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  document.querySelector("#date").innerHTML += date;

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  var time = formatAMPM(new Date());
  document.querySelector("#time").innerHTML += time;

  if ($(".my-news-slider").length) {
    $(".my-news-slider").slick({
      arrows: false,
      dots: false,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if ($(".slider-news").length) {
    $(".carousel").carousel();
  }

  if ($(".books-slider").length) {
    $(".books-slider").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      Infinit: true,
      cssEase: "linear",
      arrows: false,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

});

var api_url = "https://api.pray.zone/v2/times/today.json?ip=auto";
document.addEventListener("DOMContentLoaded", function () {
  PrayerTimesApi();
});
