export default function DailyMenu() {
  const d = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })
  );

  let day = d.getDay();
  const dayContainers = document.querySelectorAll(".daily-menu-item");
  const navLinks = document.querySelectorAll(".daily-menu-navigation a");
  if (day == 0) {
    day = 1;
  }
  if (document.querySelector(`.daily-menu-item.day-${day}`)) {
    classToggle(day);
    navToggle(day);

    navLinks.forEach((el) => {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        parentToggle(this.getAttribute("data-click"));
      });
    });
  }

  if (document.referrer.includes("/manage/page-builder")) {
    console.log("in page builder mode");

    dayContainers.forEach((el) => {
      el.classList.add("open");
      el.classList.remove("closed");
    });

    return;
  }

  function parentToggle(day) {
    classToggle(day);
    navToggle(day);
  }

  function navToggle(dayToShow) {
    navLinks.forEach((el) => {
      if (el.getAttribute("data-click") == dayToShow) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  }

  function classToggle(dayToShow) {
    dayContainers.forEach((el) => {
      if (el.classList.contains(`day-${dayToShow}`)) {
        el.classList.add("open");
        el.classList.remove("closed");
      } else {
        el.classList.remove("open");
        el.classList.add("closed");
      }
    });
  }

  function toggleDay(e) {
    e.preventDefault();
    if (this.getAttribute("data-click")) {
      var dayClicked = this.getAttribute("data-click");
      classToggle(dayClicked);
    }
  }
}
