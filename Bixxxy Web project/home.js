// Get elements from DOM
const closeBtn = document.querySelector(".close-btn");
const menuBtn = document.querySelector(".menu-btn");
const backdropElem = document.querySelector(".backdrop");
const asideElem = document.querySelector(".aside-elem");
// const sections = [...document.querySelectorAll(".scrollSection")];
const menuLinks = [...document.querySelectorAll(".menu-links")];

// document.lastScrollPosition = 0;
// document.lastCentered = 0;
// document.onWayTo = null;

function closeMenu() {
  backdropElem.style.display = "none";
  asideElem.style.display = "none";
}

// Define event handlers
menuBtn.addEventListener("click", () => {
  // backdrop n aside appear
  backdropElem.style.display = "initial";
  asideElem.style.display = "initial";
});

closeBtn.addEventListener("click", closeMenu);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", closeMenu);
});

// document.addEventListener("scroll", () => {
//   const direction =
//     window.scrollY - document.lastScrollPosition > 0 ? "down" : "up";

//   if (document.onWayTo === null) {
//     const destIndex =
//       direction === "up"
//         ? document.lastCentered - 1
//         : document.lastCentered + 1;
//     console.log(destIndex);

//     if (destIndex >= 0 && destIndex < sections.length) {
//       document.onWayTo = destIndex;
//       window.scroll(0, sections[destIndex].offsetTop);
//     }
//   }

//   sections.forEach((section, index) => {
//     if (window.scrollY === section.offsetTop) {
//       document.lastCentered = index;
//       //   console.log(index);

//       if (document.onWayTo === index) {
//         document.onWayTo = null;
//       }
//     }
//   });

//   document.lastScrollPosition = window.scrollY;
// });
