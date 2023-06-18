(() => {
  // Main navigation [HEADER]
  const navBar = document.querySelector(".header__nav.mobile");
  const navToggler = document.querySelector(".nav-button");
  const togglerImg = document.querySelector(".nav-button img");

  navToggler.addEventListener("click", (event) => {
    if (navBar.classList.contains("active")) {
      togglerImg.setAttribute("src", "./assets/shared/icon-hamburger.svg");
      navBar.classList.remove("active");
      return;
    }

    navBar.classList.add("active");
    togglerImg.setAttribute("src", "./assets/shared/icon-close.svg");
  });

  // Destinations
  const destinationTabs = document.querySelectorAll("[data-destination]");
  const destinationName = document.querySelector(".destination-name");
  const destinationDescription = document.querySelector(
    ".destination-description"
  );
  const destinationDuration = document.querySelector("#duration");
  const destinationDistance = document.querySelector("#distance");
  const destinationImg = document.querySelector("#destination-img");

  destinationTabs.forEach((tab) => {
    tab.addEventListener("click", selectDestination);
  });

  function selectDestination(event) {
    destinationTabs.forEach((tab) => (tab.dataset.active = false));

    let info = data.destinations.find(
      (destination) => destination.name === event.target.dataset.destination
    );

    destinationName.textContent = info.name;
    destinationDescription.textContent = info.description;
    destinationDistance.textContent = info.distance;
    destinationDuration.textContent = info.travel;
    destinationImg.setAttribute("src", `.${info.images["png"]}`);

    event.target.dataset.active = true;
  }
})();
