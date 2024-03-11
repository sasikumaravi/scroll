const tabs = document.querySelectorAll(".scrollable-tabs-container a");

const rightArrow = document.querySelector(
  ".scrollable-tabs-container .ri-arrow-right-s-line"
);

const leftArrow = document.querySelector(
  ".scrollable-tabs-container .ri-arrow-left-s-line"
);
const tabsList = document.querySelector(".scrollable-tabs-container ul");


const removeAllActiveClasses = () => {
  tabs.forEach((tab) => {
    tab.classList.remove("active");

  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeAllActiveClasses();
    tab.classList.add("active");
  });
});

rightArrow.addEventListener("click", () => {
  tabsList.scrollLeft += 600;
});

leftArrow.addEventListener("click", () => {
  tabsList.scrollLeft -= 300;
});



