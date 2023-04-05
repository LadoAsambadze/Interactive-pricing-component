const slider = document.querySelector("#rangeInput");
const pageViews = document.querySelector(".pageviews");
const dollar = document.querySelector(".dollar");
const switchButton = document.querySelector(".for-discount");
const price = document.querySelector('input[type="range"]');
let isDown = false;
dollar.value = 16;

slider.addEventListener("mousedown", () => {
  isDown = true;
  slider.classList.add("active");
});

slider.addEventListener("mouseup", () => {
  !isDown;
  slider.classList.remove("active");
});

slider.addEventListener("input", letsTry);

function letsTry() {
  if (slider.value == "8") {
    pageViews.innerHTML = "10K PAGEVIEWS";
    dollar.innerHTML = "$8.00";
    dollar.value = 8;
    slider.style.background =
      "linear-gradient( to right, #a4f3eb 0%, #a4f3eb 0%, #ecf0fb 0%, #ecf0fb 100% )";
    onlyActive();
  } else if (slider.value == "12") {
    pageViews.innerHTML = "50K PAGEVIEWS";
    dollar.innerHTML = "$12.00";
    dollar.value = 12;
    slider.style.background =
      "linear-gradient( to right, #a4f3eb 0%, #a4f3eb 25%, #ecf0fb 0%, #ecf0fb 100% )";
      onlyActive();
  } else if (slider.value == "16") {
    pageViews.innerHTML = "100K PAGEVIEWS";
    dollar.innerHTML = "$16.00";
    dollar.value = 16;
    slider.style.background =
      "linear-gradient( to right, #a4f3eb 0%, #a4f3eb 50%, #ecf0fb 0%, #ecf0fb 100% )";
    onlyActive();
  } else if (slider.value == "20") {
    pageViews.innerHTML = "200K PAGEVIEWS";
    dollar.innerHTML = "$20.00";
    dollar.value = 20;
    slider.style.background =
      "linear-gradient( to right, #a4f3eb 0%, #a4f3eb 75%, #ecf0fb 0%, #ecf0fb 100% )";
    onlyActive();
  } else if (slider.value == "24") {
    pageViews.innerHTML = "500K PAGEVIEWS";
    dollar.innerHTML = "$24.00";
    dollar.value = 24;
    slider.style.background =
      "linear-gradient( to right, #a4f3eb 0%, #a4f3eb 100%, #ecf0fb 0%, #ecf0fb 100% )";
    onlyActive();
  }
}

switchButton.addEventListener("change", ifActive);

function ifActive() {
  switchButton.classList.toggle("active");
  if (switchButton.classList.contains("active")) {
    let multipliedValue = dollar.value * 6.75;
    dollar.innerHTML = "$" + multipliedValue.toFixed(2);
  } else {
    let multipliedValue = dollar.value;
    dollar.innerHTML = "$" + multipliedValue.toFixed(2);
  }
}

function onlyActive() {
  if (switchButton.classList.contains("active")) {
    let multipliedValue = dollar.value * 6.75;
    dollar.innerHTML = "$" + multipliedValue.toFixed(2);
  }
}
