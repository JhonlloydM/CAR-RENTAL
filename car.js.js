function toggleSection(sectionIdToShow) {
  const sections = ["Touring", "Sports", "Services", "Viewall"];

  for (const section of sections) {
    const sectionElement = document.getElementById(section);
    if (section === sectionIdToShow) {
      sectionElement.style.display = "block";
    } else {
      sectionElement.style.display = "none";
    }
  }
}
const buttons = document.querySelectorAll('.dropbtn');
const guideText = document.getElementById('guideText');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    buttons.forEach(btn => btn.classList.remove('selected-button')); // Remove the class from all buttons
    this.classList.add('selected-button'); // Add the class to the clicked button
  });
});

buttons.forEach(button => {
    button.addEventListener('click', function() {
        guideText.style.visibility = 'hidden'; // Hide the text
    });
});
const toggleTextElement = document.getElementById('toggleText');
const touringButton = document.getElementById('touringButton');
const sportsButton = document.getElementById('sportsButton');
const servicesButton = document.getElementById('servicesButton');
const viewallButton = document.getElementById('ViewallButton');

touringButton.addEventListener('click', () => {
  toggleTextElement.textContent = 'Touring Vehicle';
  toggleTextElement.style.display = 'block';
});

sportsButton.addEventListener('click', () => {
  toggleTextElement.textContent = 'Sports Car';
  toggleTextElement.style.display = 'block';
});

servicesButton.addEventListener('click', () => {
  toggleTextElement.textContent = 'Services Vehicle';
  toggleTextElement.style.display = 'block';
});

viewallButton.addEventListener('click', () => {
  toggleTextElement.textContent = 'View all';
  toggleTextElement.style.display = 'block';
});

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
document.addEventListener('DOMContentLoaded', () => {
  const infoIcons = document.querySelectorAll('.car-info');

  infoIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const modal = icon.nextElementSibling;
      modal.classList.add('active');
    });
  });

  const closeIcons = document.querySelectorAll('.services_modal-close');

  closeIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const modal = icon.closest('.services_modal');
      modal.classList.remove('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const modalViews = document.querySelectorAll('.viewall_modal');
  const modalCloses = document.querySelectorAll('.viewall_modal-close');

  function openModal(modalClick) {
    modalViews[modalClick].classList.add('active-modal1');
    document.body.classList.add('modal-open');
    document.body.style.overflowX = 'hidden'; // Disable scrolling
    document.body.style.overflowY = 'hidden'; // Disable scrolling
  }

  modalViews.forEach((modalView, i) => {
    modalView.addEventListener('click', (event) => {
      if (event.target === modalView) {
        modalView.classList.remove('active-modal1');
        document.body.classList.remove('modal-open');
        document.body.style.overflowY = 'auto'; // Enable scrolling vertical
      }
    });
  });

  modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
      modalViews.forEach((modalView) => {
        modalView.classList.remove('active-modal1');
      });
      document.body.classList.remove('modal-open');
      document.body.style.overflowY= 'auto'; // Enable scrolling vertical
    });
  });


  const carImages = document.querySelectorAll('.carimg');
  carImages.forEach((carImage, i) => {
    carImage.addEventListener('click', () => {
      openModal(i);
    });
  });
});
var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
const modals = document.querySelectorAll(".Ourservices-modal");
const boxes = document.querySelectorAll(".box1, .box2, .box3");
const modalCloseButtons = document.querySelectorAll(".Ourservice_modal-close");

// Function to open the specified modal
function openModal(modal) {
  modal.classList.add("active-modal2");
  document.body.style.overflowY = 'hidden'; // Disable vertical scrolling
}

// Function to close all modals and reset input fields
function closeAllModals() {
  modals.forEach((modal) => {
    modal.classList.remove("active-modal2");
    
    // Reset text fields and textareas inside the modal
    const inputsAndTextareas = modal.querySelectorAll("input[type='text'], textarea");
    inputsAndTextareas.forEach(input => {
      input.value = ""; // Reset input value
    });
  });
  document.body.style.overflowY = 'auto'; // Enable vertical scrolling
}

// Event listeners to open modals when boxes are clicked
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    openModal(modals[index]);
  });
});

// Event listeners to close modals when close buttons are clicked
modalCloseButtons.forEach(button => {
  button.addEventListener("click", closeAllModals);
});

// Event listener to close modals when clicking outside the modal content
window.addEventListener("click", function(event) {
  modals.forEach(modal => {
    if (
      event.target === modal &&
      !event.target.closest(".Ourservice_content")
    ) {
      closeAllModals();
    }
  });
});
const navMenu = document.getElementById('nav_list');
const navToggle = document.getElementById('Openbtn');
const navClose = document.getElementById('closebtn');
const navItems = document.querySelectorAll('.nav_item');
const body = document.body;

function disableScrolling() {
  body.style.overflow = 'hidden';
}

function enableScrolling() {
  body.style.overflow = 'auto';
}

/* MENU SHOW */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        disableScrolling();
    });
}

/* MENU HIDE */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        enableScrolling();
    });
}

/* HIDE MENU WHEN ANY NAV_ITEM IS CLICKED */
navItems.forEach((navItem) => {
    navItem.addEventListener('click', () => {
// Hide the sidebar when a nav_item is clicked
    navMenu.classList.remove('show-menu');
    enableScrolling();
    });
});

/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

  