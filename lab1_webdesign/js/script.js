(function () {
  'use strict';

  /* ==========================================================
     ЗАДАНИЕ 1. Светлая / тёмная тема
     ========================================================== */
  var root = document.documentElement;
  var themeBtn = document.querySelector('.theme-toggle');
  var systemLight = window.matchMedia('(prefers-color-scheme: light)');

  // Какая тема сейчас реально включена:
  // выбранная вручную (data-theme) или, если не выбирали, системная
  function currentTheme() {
    return root.getAttribute('data-theme') || (systemLight.matches ? 'light' : 'dark');
  }

  // Подпись кнопки для скринридеров: что произойдёт при нажатии
  function updateThemeLabel() {
    var label = currentTheme() === 'light' ? 'Включить тёмную тему' : 'Включить светлую тему';
    themeBtn.setAttribute('aria-label', label);
  }

  themeBtn.addEventListener('click', function () {
    var next = currentTheme() === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);          // CSS-переменные меняются сами
    try { localStorage.setItem('theme', next); } catch (e) {}   // запоминаем выбор
    updateThemeLabel();
  });

  // Если пользователь не выбирал тему вручную и поменял её в системе
  systemLight.addEventListener('change', updateThemeLabel);
  updateThemeLabel();

  /* ==========================================================
     ЗАДАНИЕ 2. Мобильное меню-бургер
     ========================================================== */
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('site-nav');
  var closeBtn = document.querySelector('.nav__close');
  var desktop = window.matchMedia('(min-width: 768px)');

  function setMenu(open, returnFocus) {
    nav.classList.toggle('is-open', open);                  // плавное открытие через CSS
    document.body.classList.toggle('no-scroll', open);      // блокируем прокрутку страницы
    burger.setAttribute('aria-expanded', String(open));     // состояние для доступности

    if (open) {
      closeBtn.focus();
    } else if (returnFocus) {
      burger.focus();
    }
  }

  burger.addEventListener('click', function () { setMenu(true); });
  closeBtn.addEventListener('click', function () { setMenu(false, true); });

  // Закрываем меню при клике на любую ссылку внутри него
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });

  // Закрываем по клавише Esc
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) setMenu(false, true);
  });

  // Если окно растянули до планшета/десктопа, снимаем блокировку прокрутки
  desktop.addEventListener('change', function (e) {
    if (e.matches) setMenu(false);
  });

  /* ==========================================================
     ЗАДАНИЕ 3. Анимации при прокрутке
     ========================================================== */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // 1. Плавное появление блоков (Intersection Observer)
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);          // анимация срабатывает один раз
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // нет поддержки или включено «уменьшение движения» — показываем всё сразу
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // 2. Параллакс в Hero и 3. прогресс-бар прокрутки
  var hero = document.querySelector('.hero');
  var heroBg = document.querySelector('.hero__bg');
  var progress = document.querySelector('.progress');
  var ticking = false;

  function updateOnScroll() {
    var scrollY = window.scrollY;

    // Прогресс: доля пройденной страницы от 0 до 1
    var max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.setProperty('--progress', max > 0 ? Math.min(scrollY / max, 1) : 0);

    // Параллакс: фон сдвигается на 20% пройденного расстояния (медленнее контента).
    // 0.2 не должно превышать запас сверху в CSS (top: -20%), иначе появится пустая полоса.
    if (!reduceMotion.matches) {
      var shift = Math.min(scrollY, hero.offsetHeight) * 0.2;
      heroBg.style.setProperty('--parallax', shift + 'px');
    }

    ticking = false;
  }

  // requestAnimationFrame: обновляем не чаще, чем кадр отрисовки
  function onScroll() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateOnScroll);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  updateOnScroll();
})();