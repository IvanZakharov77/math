document.addEventListener('DOMContentLoaded', function () {
  // Ждем 4 секунды (4000 миллисекунд) и показываем блок
  setTimeout(function () {
    var optimusBlock = document.getElementById('optimus');
    optimusBlock.style.display = 'none';
  }, 4000);
});
// nnnnnnnnnnnn
var correctAnswer;

var correctAnswer;
var correctCounter = 0;

function startProblem() {
  var operation = document.getElementById('operation').value;
  var digits = document.getElementById('digits').value;

  var operator;
  if (operation === 'multiplication') {
    operator = '*';
  } else if (operation === 'division') {
    operator = '/';
  } else if (operation === 'addition') {
    operator = '+';
  } else if (operation === 'subtraction') {
    operator = '-';
  }

  var num1, num2;
  if (digits === '1') {
    num1 = Math.floor(Math.random() * 9) + 1;
    num2 = Math.floor(Math.random() * 9) + 1;
  } else if (digits === '2') {
    num1 = Math.floor(Math.random() * 90) + 10;
    num2 = Math.floor(Math.random() * 90) + 10;
  } else {
    num1 = Math.floor(Math.random() * 90) + 10;
    num2 = Math.floor(Math.random() * 9) + 1;
  }

  // Для вычитания выбираем числа, чтобы результат не был отрицательным
  if (operation === 'subtraction') {
    num1 = Math.max(num1, num2);
    num2 = Math.min(num1, num2);
  }

  // Для деления выбираем числа, которые делятся без остатка
  if (operation === 'division') {
    num1 = Math.floor(Math.random() * 9) + 1;
    num2 = Math.floor(Math.random() * 9) + 1;
    num1 = num1 * num2;
  }

  correctAnswer = eval(num1 + ' ' + operator + ' ' + num2);

  var problem = num1 + ' ' + operator + ' ' + num2;
  document.getElementById('problem').innerText = problem;

  document.getElementById('problem-container').style.display = 'block';

  // Сбрасываем видимость кнопки при новой задаче
  document.getElementById('watchCartoonBtn').style.display = 'none';
}

function showAnswer() {
  alert('Правильный ответ: ' + correctAnswer);
}

function playSound(soundId) {
  var audio = document.getElementById(soundId);
  audio.play();
}

function checkAnswer() {
  var userAnswer = document.getElementById('answer').value;
  var feedback = document.getElementById('feedback');

  if (userAnswer == correctAnswer) {
    feedback.innerText = 'Правильно!';
    playSound('correctSound');

    // Показываем кнопку "Смотреть случайный мультфильм" при правильном ответе
    document.getElementById('watchCartoonBtn').style.display = 'block';
  } else {
    // Очищаем содержимое feedback перед добавлением изображения
    var feedback = document.getElementById('feedback');
    feedback.innerHTML = '';

    // Создаем элемент img и устанавливаем необходимые атрибуты
    var feedbackImage = document.createElement('img');
    feedbackImage.id = 'feedback-image';
    feedbackImage.src = './jpg/vlad.webp';
    feedbackImage.alt = 'Feedback Image';
    feedbackImage.style.width = '80%';

    setTimeout(function () {
      var optimusBlock = document.getElementById('feedback-image');
      optimusBlock.style.display = 'none'; // или используйте другое значение,
    }, 4000);

    // Добавляем изображение в feedback
    feedback.appendChild(feedbackImage);

    // Показываем изображение
    feedbackImage.classList.remove('hidden');
    playSound('incorrectSound');

    // Скрываем кнопку при неверном ответе
    document.getElementById('watchCartoonBtn').style.display = 'none';
  }
}

function watchRandomCartoon() {
  var cartoons = [
    'https://www.youtube.com/@crazy_paleontologist',
    'https://www.youtube.com/@BoysandToys',
    'https://www.youtube.com/results?search_query=lego+%D1%81%D0%BE%D0%B1%D0%B8%D1%80%D0%B0%D0%B5%D0%BC',
    'https://www.youtube.com/@NovyiKotLeopold',
    'https://www.youtube.com/@TOBOT_Russia',
    'https://www.youtube.com/@CarsRobotsTransformers',
    'https://www.youtube.com/@TransformersRussian',
    'https://www.youtube.com/@user-pq3kn5le8s',
  ];

  var randomIndex = Math.floor(Math.random() * cartoons.length);
  var randomCartoon = cartoons[randomIndex];

  window.open(randomCartoon, '_blank');
}
