window.addEventListener('scroll', () => {
  var scrollPosition = window.scrollY;
  var opacityValue = 1 - (scrollPosition / (window.innerHeight / 2.9));
  var fontSizeValue = 14 + (scrollPosition / 100);
  
  document.querySelector('.main-heading').style.opacity = opacityValue;
  document.querySelector('.main-heading').style.fontSize = fontSizeValue + 'px';
})

window.addEventListener('scroll', function () {
  var scrollTop = window.scrollY;
  var leftCard = document.getElementById('leftCard');
  var rightCard = document.getElementById('rightCard');
  var windowHeight = window.innerHeight;

  leftCard.style.left = (-730 + (scrollTop / windowHeight) * 400) + 'px';
  leftCard.style.opacity = (scrollTop / windowHeight);

  rightCard.style.right = (-730 + (scrollTop / windowHeight) * 400) + 'px';
  rightCard.style.opacity = (scrollTop / windowHeight);
});

let input = document.querySelector('.input');
let value = input.value;
let dlte = document.getElementById('delete');
let file_delt = document.getElementById('btnfle');
let file = document.getElementById('file');

dlte.addEventListener('click', () => {
  input.value = '';
  file.value = '';
})

var test_btn = document.getElementById('test');
test.addEventListener('click', () => {
  let percentage = document.getElementById('percentage');
  percentage.innerText=''+"%";
  percentage.style.color = 'white';
  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = '0';
  let input = document.querySelector('.input');
  input.classList.add('input_transparent');
  input.disabled = true;
  let Ai_cnt = document.getElementById('Ai_cnt');
  let Hmn_cnt = document.getElementById('Hmn_cnt');
  Ai_cnt.innerText='0';
  Hmn_cnt.innerText='0';

  setTimeout(() => {
    function updateProgressBar(progress) {
    const progressBar = document.getElementById("progress-bar");
    progressBar.style.width = `${progress}%`;
  }

  function animateProgressBar(targetProgress, duration) {
    const progressBar = document.getElementById("progress-bar");
    let currentProgress = parseInt(progressBar.style.width) || 0;
    const increment = (targetProgress - currentProgress) / (duration / 10);

    const intervalId = setInterval(function () {
      currentProgress += increment;
      updateProgressBar(currentProgress);
      if (currentProgress >= targetProgress) {
        clearInterval(intervalId);
      }
    }, 10);
  }

  let ai_Content = 80.457869;
  ai_Content=ai_Content.toFixed(2);
  animateProgressBar(ai_Content, 2000);

  let percentage = document.getElementById('percentage');
  percentage.innerText = ai_Content + '%';
  if (ai_Content > 75) {
    percentage.style.color = '#E72929'
  }

  let Ai_cnt = document.getElementById('Ai_cnt');
  let Hmn_cnt = document.getElementById('Hmn_cnt');

  Ai_cnt.innerText = ai_Content;
  Hmn_cnt.innerText = (100 - ai_Content).toFixed(2);
  input.disabled = false;
  input.classList.remove('input_transparent');
  }, 2000);
  
});
