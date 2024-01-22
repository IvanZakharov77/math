document.addEventListener('DOMContentLoaded', function () {
  // Ждем 4 секунды (4000 миллисекунд) и показываем блок
  setTimeout(function () {
    var optimusBlock = document.getElementById('optimus');
    optimusBlock.style.display = 'none'; // или используйте другое значение, такое как "flex" или "inline-block" в зависимости от ваших потребностей
  }, 4000);
});
