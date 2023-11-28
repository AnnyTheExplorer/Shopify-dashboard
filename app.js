// To update the logo svg for responsive
document.addEventListener("DOMContentLoaded", function () {
  const logo = document.getElementById("logo");

  function adjustLogoSize() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 480) {
      logo.src = "https://crushingit.tech/hackathon-assets/shopify-icon.svg";
      logo.setAttribute("width", "100px");
      logo.setAttribute("height", "auto");
    } else {
      logo.src =
        "https://crushingit.tech/hackathon-assets/shopify-icon-desktop.svg";
      logo.setAttribute("width", "150px");
      logo.setAttribute("height", "auto");
    }
  }

  adjustLogoSize();
  window.addEventListener("resize", adjustLogoSize);
});


// To implement a notification dropdown on clicking the icon.
const notificationIcon = document.getElementById("notificationIcon");
const notificationContent = document.getElementById("notificationContent");

notificationIcon.addEventListener("click", function () {
  if (notificationContent) {
    if (notificationContent.style.display === "block") {
      notificationContent.style.display = "none";
    } else {
      notificationContent.style.display = "block";
    }
  }
});


// To implement a dropdown on clicking the admin profile.
const dashboardToggle = document.getElementById("dashboardToggle");
const userDashboard = document.getElementById("userDashboard");

dashboardToggle.addEventListener("click", function () {
  if (userDashboard.style.display === "block") {
    userDashboard.style.display = "none";
  } else {
    userDashboard.style.display = "block";
  }
});

document.addEventListener("click", function (event) {
  if (
    !userDashboard.contains(event.target) &&
    event.target !== dashboardToggle
  ) {
    userDashboard.style.display = "none";
  }
});


// To remove the trial-extension when the X svg is clicked.
document.addEventListener("DOMContentLoaded", function () {
  var removeSectionIcon = document.getElementById("removeSectionIcon");

  removeSectionIcon.addEventListener("click", function () {
    var parentContainer = this.closest(".trial-extension");
    parentContainer.parentNode.removeChild(parentContainer);
  });
});


// To update the checkbox svg upon task completion
document.addEventListener("DOMContentLoaded", function () {
  var checkboxImages = document.querySelectorAll(".list-item .checkbox");
  var originalImages = [
    "https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg",
    "https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg",
    "https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg",
    "https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg",
    "https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg"
  ];
  var newImages = [
    "https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg",
    "https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg",
    "https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg",
    "https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg",
    "https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg"
  ];
  var completionStatus = Array(checkboxImages.length).fill(false);

  checkboxImages.forEach(function (checkbox, index) {
    checkbox.addEventListener("click", function () {
      if (completionStatus[index]) {
        this.src = originalImages[index];
        completionStatus[index] = false;
      } else {
        this.src = newImages[index];
        completionStatus[index] = true;
      }
    });
  });
});


// To update the progress tracker of the accordion according to tasks completed or not.
const tasks = [false, false, false, false, false];

function updateProgress(taskIndex) {
  const progressText = document.getElementById("progressText");
  const progressFill = document.getElementById("progressFill");

  tasks[taskIndex] = !tasks[taskIndex];

  const completedTasks = tasks.filter((task) => task).length;
  const progressPercentage = (completedTasks / tasks.length) * 100;

  progressText.textContent = `${completedTasks}/${tasks.length} completed`;
  progressFill.style.width = `${progressPercentage}%`;
}
