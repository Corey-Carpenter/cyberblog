'use strict';

document.addEventListener("DOMContentLoaded", function() {
  const nav = document.querySelector('.mobile-nav');
  const navMenuBtn = document.querySelector('.nav-menu-btn');
  const navCloseBtn = document.querySelector('.nav-close-btn');
  const themeBtn = document.querySelectorAll('.theme-btn');
  const hashtags = document.querySelectorAll('.hashtag');

  const navToggleFunc = function () { 
    nav.classList.toggle('active'); 
  }

  navMenuBtn.addEventListener('click', navToggleFunc);
  navCloseBtn.addEventListener('click', navToggleFunc);

  for (let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].addEventListener('click', function () {
      document.body.classList.toggle('light-theme');
      document.body.classList.toggle('dark-theme');
      for (let i = 0; i < themeBtn.length; i++) {
        themeBtn[i].classList.toggle('light');
        themeBtn[i].classList.toggle('dark');
      }
    });
  }

  hashtags.forEach(function(tag) {
    tag.addEventListener("click", function() {
      const link = this.getAttribute("data-link");
      window.open(link, '_blank');
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const blogCards = document.querySelectorAll(".blog-card");

  blogCards.forEach(blogCard => {
    blogCard.addEventListener("click", function() {
      const contentWrapper = blogCard.querySelector(".blog-content-wrapper");
      const text = blogCard.querySelector(".blog-text");

      if (contentWrapper.classList.contains("expanded")) {
        contentWrapper.classList.remove("expanded");
        text.style.display = "none";
      } else {
        contentWrapper.classList.add("expanded");
        text.style.display = "block";
      }
    });
  });
});