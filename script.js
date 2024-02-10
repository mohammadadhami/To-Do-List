document.addEventListener('DOMContentLoaded', function () {
  const incrementButtons = document.querySelectorAll('.incrementButton');
  const counterValues = document.querySelectorAll('.counterValue');

  incrementButtons.forEach((button, index) => {
    let count = 0;

    button.addEventListener('click', function () {
      count++;
      counterValues[index].textContent = count;
    });
  });
});
