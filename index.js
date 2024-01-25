const ip3 = '46.150.10.154';
const ip1 = '2a02:908:d11:3520::cccb';
const ip2 = '31.202.123.78';
const ip4 = '88.154.56.58';
const ip5 = '2001:9e8:597e:9c00:713a:c5c7:159c:e826';
// Создаем новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();
let ipAddress;
// Указываем URL сервиса, который предоставляет информацию об IP
var url = 'https://api64.ipify.org?format=json';

// Настраиваем запрос
xhr.open('GET', url, true);

// Определяем обработчик события, который будет вызван при успешном завершении запроса
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Распарсиваем JSON-ответ
    var response = JSON.parse(xhr.responseText);

    // Получаем IP-адрес из ответа
    ipAddress = response.ip;
    if (response.ip === ip1) {
      console.log('hello');
    }
    // Выводим IP-адрес в консоль
  } else {
    console.error('Произошла ошибка при запросе IP-адреса:', xhr.statusText);
  }
};

// Определяем обработчик события, который будет вызван при ошибке запроса
xhr.onerror = function () {
  console.error('Произошла сетевая ошибка при запросе IP-адреса.');
};

// Отправляем запрос
xhr.send();
// .........................................................
let answer = 0;

function startGame() {
  var firstBlock = document.querySelector('.first_block');
  var optimus1 = document.getElementById('optimus1');
  var optimus2 = document.getElementById('optimus2');
  var audio = document.getElementById('hello_nikita');
  var audioL = document.getElementById('hello_leo');
  // Скрываем первый блок
  firstBlock.style.display = 'none';

  // Воспроизводим аудио

  // Показываем нужную картинку на 4 секунды в зависимости от условия
  if (ipAddress === ip1) {
    showImage(optimus1);
    audio.play();
  } else if (ipAddress === ip2) {
    showImage(optimus1);
    audioL.play();
  } else if (ipAddress === ip4) {
    showImage(optimus1);
    audioL.play();
  } else if (ipAddress === ip5) {
    showImage(optimus1);
    audioL.play();
  } else {
    showImage(optimus2);
  }
}

function showImage(element) {
  // Показываем элемент
  element.style.display = 'block';

  // Спрячем элемент через 4 секунды
  setTimeout(function () {
    element.style.display = 'none';
  }, 4000);
}
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
// кнопка начать или дальше
const btnStart = document.getElementById('btn_start');
btnStart.addEventListener('click', function () {
  btnStart.innerHTML = 'Следующий';
});
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
    feedback.style.fontSize = '25px';
    answer += 1;
    if (answer === 5) {
      // Показываем кнопку "Смотреть случайный мультфильм" при правильном ответе
      document.getElementById('watchCartoonBtn').style.display = 'block';
      answer = 0;
    }
    // playSound('correctSound');
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
  answer = 0;
  var cartoons = [
    'https://www.youtube.com/@crazy_paleontologist',
    'https://www.youtube.com/@BoysandToys',
    'https://www.youtube.com/results?search_query=lego+%D1%81%D0%BE%D0%B1%D0%B8%D1%80%D0%B0%D0%B5%D0%BC',
    'https://www.youtube.com/@NovyiKotLeopold',
    'https://www.youtube.com/@TOBOT_Russia',
    'https://www.youtube.com/@CarsRobotsTransformers',
    'https://www.youtube.com/@TransformersRussian',
    'https://www.youtube.com/@user-pq3kn5le8s',
    'https://www.youtube.com/@PetyaIVolk',
  ];

  var randomIndex = Math.floor(Math.random() * cartoons.length);
  var randomCartoon = cartoons[randomIndex];

  window.open(randomCartoon, '_blank');
}
