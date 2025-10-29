'use strict';

// Popup window with booking form
const openPopupButtons = document.querySelectorAll('.popup__open'); // open popup buttons/links
const closePopupButtons = document.querySelectorAll('.popup__close'); // close popup buttons/links

// Open popup
for (let openPopupButton of openPopupButtons) {
  openPopupButton.addEventListener('click', (event) => {
    // since the popup link contains its ID, we extract it
    const popupName = openPopupButton.getAttribute('href').replace('#', '');
    // get the popup element by its ID
    const currentPopup = document.getElementById(popupName);
    popupOpen(currentPopup);
    // prevent default link behavior
    event.preventDefault;
  });
}

// Close popup
for (let closePopupButton of closePopupButtons) {
  closePopupButton.addEventListener('click', (event) => {
    popupClose(event.target.closest('.popup'));
    event.preventDefault;
  });
}

const popupOpen = (currentPopup) => {
  if (currentPopup) {
    const popupActive = document.querySelector('.popup.open');
    // if there is an already open popup, close it
    if (popupActive) {
      popupClose(popupActive, false);
    }
  }

  currentPopup.classList.add('open');
  currentPopup.addEventListener('click', (event) => {
    // if clicked outside of .popup__content, close the popup
    if (!event.target.closest('.popup__content')) {
      popupClose(event.target.closest('.popup'));
    }
  });
};

const popupClose = (popupActive) => {
  popupActive.classList.remove('open');
};

// Selecting master and service
// const select = (sender) => {
//   sender.classList.toggle('selected');
// }

// Form submission
document.querySelector('.confirm').addEventListener('click', (e) => {
  e.preventDefault();

  fetch('https://httpbin.org/post', {
    method: 'POST',
    body: new FormData(booking)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.querySelector('.confirmation').innerHTML = `
        <span>${data.form.username}</span>, you are booked for <span>${data.form.time}</span> <span>${data.form.selection}</span> for the following procedures:
        <span>${data.form.procedure}</span>.<br> Your master: <span>${data.form.person}</span>
      `;
    })
    .catch(err => console.log(err));
});

// Form validation
// Dates earlier than the current date should be disabled
// Selected time should be inactive - use local storage?
// When selecting a time, change the background of the container
