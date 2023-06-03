//  ------------------- Scheduler ---------------------------
document.querySelectorAll('input[type="radio"]').forEach(function (radio) {
  radio.addEventListener('change', function () {
    var selectedDate = document.querySelector('input[name="date"]:checked').nextElementSibling.innerHTML;
    var selectedTime = document.querySelector('input[name="time"]:checked').nextElementSibling.innerHTML;
    document.getElementById("selectedTime").innerText = selectedDate + " " + selectedTime;
  });
});

//  ------------------- Popup ---------------------------
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Chuyển đến tab tiếp theo
function nextTab() {
  var activeTab = $(".u-tab-link.active");
  activeTab.removeClass("active");
  activeTab.closest("li").next().find(".u-tab-link").addClass("active");

  var activePanel = $(".u-tab-panel.u-tab-active");
  activePanel.removeClass("u-tab-active");
  activePanel.next().addClass("u-tab-active");
}

// Quay lại tab trước đó
function prevTab() {
  var activeTab = $(".u-tab-link.active");
  activeTab.removeClass("active");
  activeTab.closest("li").prev().find(".u-tab-link").addClass("active");

  var activePanel = $(".u-tab-panel.u-tab-active");
  activePanel.removeClass("u-tab-active");
  activePanel.prev().addClass("u-tab-active");
}
