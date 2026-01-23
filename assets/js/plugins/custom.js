$(".my-slider").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: false,
  fade: true,
  infinite: true,
  speed: 700,
  cssEase: "ease-in-out"
});


function playInlineVideo(id) {
  document.getElementById(id).style.display = "block";
  document.getElementById(id).querySelector("video").play();
  document.getElementById(id).parentElement.querySelector(".thumb").style.display = "none";
}

function closeInlineVideo(id) {
  const box = document.getElementById(id);
  box.querySelector("video").pause();
  box.style.display = "none";
  box.parentElement.querySelector(".thumb").style.display = "block";
}




function openBookTab(evt, tabName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("book-tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("book-tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}




function setClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDeg = ((seconds / 60) * 360) + 90;
  const minuteDeg = ((minutes / 60) * 360) + 90;
  const hourDeg = ((hours / 12) * 360) + 90;

  document.getElementById("second-hand").style.transform = `rotate(${secondDeg}deg)`;
  document.getElementById("minute-hand").style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById("hour-hand").style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setClock, 1000);
setClock();
