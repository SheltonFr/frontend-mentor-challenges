const unreadNotifications = document.querySelectorAll(".notification.unread");
const markAsReadBtn = document.querySelector("header > span");
const counterElement = document.querySelector(".counter");

let counter = unreadNotifications.length;

counterElement.textContent = counter;
markAsReadBtn.addEventListener("click", () => {
  Array.from(unreadNotifications).forEach((notification) =>
    markAsRead(notification)
  );
});

Array.from(unreadNotifications).forEach((notification) => {
  notification.onclick = () => markAsRead(notification);
});

function markAsRead(notification) {
  notification.classList.remove("unread");
  updateCounter();
}

function updateCounter() {
  counter--;
  counterElement.textContent = counter;

  if (!counter) counterElement.style.display = "none";
}
