(() => {
  // Main navigation [HEADER]
  const navBar = document.querySelector(".header__nav.mobile");
  const navToggler = document.querySelector(".nav-button");
  const togglerImg = document.querySelector(".nav-button img");

  navToggler.addEventListener("click", (event) => {
    if (navBar.classList.contains("active")) {
      navToggler.style.background =
        "url(../assets/shared/icon-hamburger.svg) no-repeat center/cover";
      navBar.classList.remove("active");
      return;
    }

    navBar.classList.add("active");
    navToggler.style.background =
      "url(../assets/shared/icon-close.svg) no-repeat center/cover";
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

    const info = data.destinations.find(
      (destination) => destination.name === event.target.dataset.destination
    );

    destinationName.textContent = info.name;
    destinationDescription.textContent = info.description;
    destinationDistance.textContent = info.distance;
    destinationDuration.textContent = info.travel;
    destinationImg.setAttribute("src", `.${info.images["png"]}`);

    event.target.dataset.active = true;
  }

  // CREWS
  const crewTabs = document.querySelectorAll("[data-active-crew]");
  const crewCharge = document.querySelector(".crew-charge");
  const crewName = document.querySelector(".crew-name");
  const crewDescription = document.querySelector(".crew-description");
  const crewImage = document.querySelector("#crew-photo");

  crewTabs.forEach((tab) => tab.addEventListener("click", selectCrew));

  function selectCrew(event) {
    crewTabs.forEach((tab) => (tab.dataset.activeCrew = false));

    const info = data.crew.find(
      (crew) => crew.name === event.target.dataset.crew
    );

    crewCharge.textContent = info.role;
    crewName.textContent = info.name;
    crewImage.src = `.${info.images["png"]}`;
    crewDescription.textContent = info.bio;

    event.target.dataset.activeCrew = true;
  }
})();
