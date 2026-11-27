// Данные направлений. В поле image можно указать путь к вашему файлу картинки (например: 'images/guitar.jpg')
const directionsData = [
  {
    id: "acoustic",
    category: "strings",
    title: "Акустическая гитара",
    reviews: "45 отзывов",
    points: [
      "Видимый результат через 1–2 месяца",
      "70% урока — ваша практика",
      "Максимальный упор на технику",
    ],
    price: "от 550,00 ₽",
    image: "img/AkGuitar.svg", // Сюда вставлять имя файла картинки, например: 'images/acoustic.jpg'
  },
  {
    id: "electric",
    category: "strings",
    title: "Электрогитара",
    reviews: "24 отзывов",
    points: [
      "Стратокастер, джазовые и другие стили",
      "Быстрая практика с ударными",
      "Простая теория импровизации",
    ],
    price: "от 550,00 ₽",
    image: "img/ElGuitar1.svg",
  },
  {
    id: "vocal",
    category: "vocals",
    title: "Эстрадный и джазовый вокал",
    reviews: "67 отзывов",
    points: [
      "Снятие зажимов за 1 неделю",
      "10 простых шагов к красивому голосу",
      "Самые эффективные методики",
    ],
    price: "от 550,00 ₽",
    image: "img/Vokal.svg",
  },
  {
    id: "piano",
    category: "piano",
    title: "Синтезатор и фортепиано",
    reviews: "21 отзыв",
    points: [
      "Подбор индивидуального репертуара",
      "Классические и современные стили",
      "Красивые мелодии для начинающих",
    ],
    price: "от 550,00 ₽",
    image: "img/piano.svg",
  },
  {
    id: "solfeggio",
    category: "vocals",
    title: "Сольфеджио",
    reviews: "18 отзывов",
    points: [
      "Простая и понятная теория",
      "Аранжировка песен и треков",
      "Применение навыков на практике",
    ],
    price: "от 550,00 ₽",
    image: "img/soulfedjo.svg",
  },
  {
    id: "drums",
    category: "drums",
    title: "Барабаны",
    reviews: "32 отзыва",
    points: [
      "Чувство ритма с первого занятия",
      "Игра под любимые минусовки",
      "Постановка рук и координация",
    ],
    price: "от 600,00 ₽",
    image: "img/drumnbased.svg",
  },
  {
    id: "bass",
    category: "strings",
    title: "Бас-гитара",
    reviews: "19 отзывов",
    points: [
      "Грув, слэп и пальцевая техника",
      "Работа в ритм-секции с барабанщиком",
      "Разбор партий любимых групп",
    ],
    price: "от 550,00 ₽",
    image: "img/basguitar.svg",
  },
  {
    id: "ukulele",
    category: "strings",
    title: "Укулеле",
    reviews: "28 отзывов",
    points: [
      "Первая песня уже на пробном уроке",
      "Лёгкий старт для детей и взрослых",
      "Аккомпанемент и фингерстайл",
    ],
    price: "от 500,00 ₽",
    image: "img/ahelele.svg",
  },
  {
    id: "rock-vocal",
    category: "vocals",
    title: "Рок и экстрим вокал",
    reviews: "24 отзыва",
    points: [
      "Безопасное расщепление без вреда связкам",
      "Мощная опора и расширение диапазона",
      "Работа с микрофоном на сцене",
    ],
    price: "от 600,00 ₽",
    image: "img/rock.svg",
  },
];

// Данные преподавателей. В поле photo указывайте путь к вашему файлу (например: 'images/teacher1.jpg')
const teachersData = [
  {
    name: "Дмитрий Никулин",
    bio: "FOH/мониторный инженер, преподаватель электрогитары и импровизации",
    photo: "img/prep1.avif", // Сюда вставлять путь к фото, например: 'images/aram.jpg'
  },
  {
    name: "Алексей Кузьменко",
    bio: "Саунд-продюсер и звукорежиссёр студии, выпускник консерватории",
    photo: "img/prep2.avif",
  },
  {
    name: "Амина Агаева",
    bio: "Артист и сонграйтер, автор и сопродюсер платиновых релизов",
    photo: "img/prep3.avif",
  },
  {
    name: "Арам Вардикян",
    bio: "Артист, сонграйтер, продюсер, педагог по эстрадному вокалу",
    photo: "img/prep4.avif",
  },
  {
    name: "Павел Алехин",
    bio: "Владеет 8 инструментами, эксперт в сведении, мастеринге и сольфеджио",
    photo: "img/prep5.avif",
  },
  {
    name: "Себастьян Скрипин",
    bio: "Профессиональный гитарист и аранжировщик, специалист по современной импровизации",
    photo: "img/prep6.avif",
  },
  {
    name: "Захар Алупов",
    bio: "Концертмейстер, лауреат международных конкурсов, преподаватель фортепиано и синтезатора",
    photo: "img/prep7.avif",
  },
];

// =========================================================================
// 1. БЕСКОНЕЧНАЯ БЕСШОВНАЯ КАРУСЕЛЬ НАПРАВЛЕНИЙ
// =========================================================================
const dirViewport = document.getElementById("dirViewport");
const dirTrack = document.getElementById("dirTrack");
const dirPrev = document.getElementById("dirPrev");
const dirNext = document.getElementById("dirNext");

let currentDirItems = [...directionsData];
let dirCloneCount = 4;
let dirCurrentIndex = 0;
let dirIsTransitioning = false;
let dirAutoTimer = null;

function createDirCardHTML(item) {
  // Если поле item.image заполнено, подставляем тег <img>, иначе оставляем блок пустым под картинку
  const imageContent = item.image
    ? `<img src="${item.image}" alt="${item.title}" class="dir-card__img" />`
    : `<div style="width:100%; height:100%; background:var(--art-bg); display:flex; align-items:center; justify-content:center; color:var(--text-muted); font-size:12px;">Пусто для фото</div>`;

  return `
    <article class="dir-card">
      <div class="dir-card__art">${imageContent}</div>
      <div class="dir-card__body">
        <h3 class="dir-card__title">${item.title}</h3>
        <div class="dir-card__rating">
          <span class="stars">★★★★★</span>
          <span>${item.reviews}</span>
        </div>
        <ul class="dir-card__list">
          ${item.points.map((p) => `<li>${p}</li>`).join("")}
        </ul>
        <div class="dir-card__price">Цена: <strong>${item.price}</strong></div>
      </div>
    </article>
  `;
}

function buildInfiniteDirections(filterTag = "all") {
  const filtered =
    filterTag === "all"
      ? directionsData
      : directionsData.filter(
          (item) => item.id === filterTag || item.category === filterTag
        );

  currentDirItems = filtered.length ? filtered : directionsData;
  const n = currentDirItems.length;

  if (n === 1) {
    dirTrack.style.transition = "none";
    dirTrack.style.justifyContent = "center";
    dirTrack.style.transform = "translateX(0px)";
    dirTrack.innerHTML = createDirCardHTML(currentDirItems[0]);
    clearInterval(dirAutoTimer);
    return;
  }

  dirTrack.style.justifyContent = "flex-start";
  dirCloneCount = Math.max(4, n);

  const headClones = [];
  const tailClones = [];
  for (let i = 0; i < dirCloneCount; i++) {
    headClones.push(currentDirItems[(n - (dirCloneCount % n) + i) % n]);
    tailClones.push(currentDirItems[i % n]);
  }

  const fullList = [...headClones, ...currentDirItems, ...tailClones];
  dirTrack.innerHTML = fullList.map(createDirCardHTML).join("");

  dirCurrentIndex = dirCloneCount;
  dirIsTransitioning = false;
  setDirPosition(false);
  restartDirAutoplay();
}

function setDirPosition(animate = true) {
  const cards = dirTrack.querySelectorAll(".dir-card");
  if (!cards.length) return;
  const step = cards[0].offsetWidth + 24;
  const offset = dirCurrentIndex * step - 24;

  dirTrack.style.transition = animate
    ? "transform 0.55s cubic-bezier(0.25, 0.8, 0.25, 1)"
    : "none";
  dirTrack.style.transform = `translateX(-${offset}px)`;
}

function moveDir(delta) {
  if (currentDirItems.length <= 1 || dirIsTransitioning) return;
  dirIsTransitioning = true;
  dirCurrentIndex += delta;
  setDirPosition(true);
}

if (dirTrack && dirViewport && dirPrev && dirNext) {
  dirTrack.addEventListener("transitionend", (e) => {
    if (e.propertyName !== "transform") return;
    const n = currentDirItems.length;
    dirIsTransitioning = false;

    if (dirCurrentIndex >= dirCloneCount + n) {
      dirCurrentIndex -= n;
      setDirPosition(false);
    } else if (dirCurrentIndex < dirCloneCount) {
      dirCurrentIndex += n;
      setDirPosition(false);
    }
  });

  dirPrev.addEventListener("click", () => {
    moveDir(-1);
    restartDirAutoplay();
  });

  dirNext.addEventListener("click", () => {
    moveDir(1);
    restartDirAutoplay();
  });

  dirViewport.addEventListener("mouseenter", () => clearInterval(dirAutoTimer));
  dirViewport.addEventListener("mouseleave", restartDirAutoplay);
}

function restartDirAutoplay() {
  clearInterval(dirAutoTimer);
  if (currentDirItems.length <= 1) return;
  dirAutoTimer = setInterval(() => moveDir(1), 3500);
}

// =========================================================================
// 2. БЕСКОНЕЧНАЯ БЕСШОВНАЯ КАРУСЕЛЬ ПРЕПОДАВАТЕЛЕЙ
// =========================================================================
const teachersCarousel = document.getElementById("teachersCarousel");
const teachersTrack = document.getElementById("teachersTrack");
const teachPrev = document.getElementById("teachPrev");
const teachNext = document.getElementById("teachNext");

const teachN = teachersData.length;
const teachCloneCount = teachN;
let teachIndex = teachCloneCount + 2;
let teachIsTransitioning = false;
let teachAutoTimer = null;

function buildInfiniteTeachers() {
  const fullList = [...teachersData, ...teachersData, ...teachersData];
  teachersTrack.innerHTML = fullList
    .map((t, domIdx) => {
      // Если фото не указано, ставим заглушку
      const photoContent = t.photo
        ? `<img src="${t.photo}" alt="${t.name}" class="teacher-card__photo" />`
        : `<div style="position:absolute; right:0; bottom:0; width:75%; height:90%; background:#dcded7; display:flex; align-items:center; justify-content:center; color:#666; font-size:11px; text-align:center; padding:10px;">Нет фото</div>`;

      return `
      <div class="teacher-card" data-dom-index="${domIdx}">
        <p class="teacher-card__bio">${t.bio}</p>
        ${photoContent}
        <h3 class="teacher-card__name">${t.name}</h3>
      </div>
    `;
    })
    .join("");

  teachersTrack.querySelectorAll(".teacher-card").forEach((card) => {
    card.addEventListener("click", () => {
      const targetDomIdx = Number(card.dataset.domIndex);
      if (targetDomIdx === teachIndex || teachIsTransitioning) return;
      teachIsTransitioning = true;
      teachIndex = targetDomIdx;
      updateTeacherPosition(true);
      restartTeachAutoplay();
    });
  });

  requestAnimationFrame(() => updateTeacherPosition(false));
  restartTeachAutoplay();
}

function updateTeacherPosition(animate = true) {
  const cards = teachersTrack.querySelectorAll(".teacher-card");
  if (!cards.length) return;

  cards.forEach((c, idx) => {
    c.classList.toggle("is-center", idx === teachIndex);
  });

  const cardWidth = 280;
  const gap = 20;
  const step = cardWidth + gap;
  const containerCenter = teachersCarousel.offsetWidth / 2;
  const cardCenter = teachIndex * step + cardWidth / 2;
  const shift = containerCenter - cardCenter;

  teachersTrack.style.transition = animate
    ? "transform 0.55s cubic-bezier(0.25, 0.8, 0.25, 1)"
    : "none";
  teachersTrack.style.transform = `translateX(${shift}px)`;
}

function moveTeacher(delta) {
  if (teachIsTransitioning) return;
  teachIsTransitioning = true;
  teachIndex += delta;
  updateTeacherPosition(true);
}

if (teachersTrack && teachersCarousel && teachPrev && teachNext) {
  teachersTrack.addEventListener("transitionend", (e) => {
    if (e.propertyName !== "transform") return;
    teachIsTransitioning = false;

    if (teachIndex >= teachCloneCount + teachN) {
      teachIndex -= teachN;
      updateTeacherPosition(false);
    } else if (teachIndex < teachCloneCount) {
      teachIndex += teachN;
      updateTeacherPosition(false);
    }
  });

  teachPrev.addEventListener("click", () => {
    moveTeacher(-1);
    restartTeachAutoplay();
  });

  teachNext.addEventListener("click", () => {
    moveTeacher(1);
    restartTeachAutoplay();
  });

  teachersCarousel.addEventListener("mouseenter", () =>
    clearInterval(teachAutoTimer),
  );
  teachersCarousel.addEventListener("mouseleave", restartTeachAutoplay);
}

function restartTeachAutoplay() {
  clearInterval(teachAutoTimer);
  teachAutoTimer = setInterval(() => moveTeacher(1), 4000);
}

// =========================================================================
// Фильтрация, меню и форма
// =========================================================================
function activateTag(tag) {
  document.querySelectorAll(".tag-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.tag === tag);
  });

  document.querySelectorAll(".tag-group").forEach((group) => {
    const hasActiveSub = group.querySelector(`.tag-btn--sub[data-tag="${tag}"]`);
    const groupBtn = group.querySelector(".tag-btn--group");
    if (hasActiveSub && groupBtn) {
      groupBtn.classList.add("active");
    }
  });

  buildInfiniteDirections(tag);
}

document.querySelectorAll(".tag-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const tag = btn.dataset.tag;
    const parentGroup = btn.closest(".tag-group");

    if (btn.classList.contains("tag-btn--group") && parentGroup) {
      const wasOpen = parentGroup.classList.contains("is-open");
      document.querySelectorAll(".tag-group").forEach((g) => g.classList.remove("is-open"));
      if (!wasOpen) {
        parentGroup.classList.add("is-open");
      }
    } else {
      document.querySelectorAll(".tag-group").forEach((g) => g.classList.remove("is-open"));
    }

    activateTag(tag);
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll(".tag-group").forEach((g) => g.classList.remove("is-open"));
});

document.querySelectorAll("[data-quick-tag]").forEach((link) => {
  link.addEventListener("click", () => {
    activateTag(link.dataset.quickTag);
  });
});

const burgerBtn = document.getElementById("burgerBtn");
const mainNav = document.getElementById("mainNav");
if (burgerBtn && mainNav) {
  burgerBtn.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

const trialForm = document.getElementById("trialForm");
const formSuccess = document.getElementById("formSuccess");

if (trialForm && formSuccess) {
  trialForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formSuccess.style.display = "block";
    trialForm.reset();
    setTimeout(() => {
      formSuccess.style.display = "none";
    }, 5000);
  });
}

window.addEventListener("resize", () => {
  if (dirTrack && currentDirItems.length > 1) setDirPosition(false);
  if (teachersTrack) updateTeacherPosition(false);
});

// Инициализация
if (dirTrack) buildInfiniteDirections("all");
if (teachersTrack) buildInfiniteTeachers();

// =========================================================================
// Переключение светлой и тёмной темы
// =========================================================================
const themeToggle = document.getElementById("themeToggle");
const rootEl = document.documentElement;

if (localStorage.getItem("theme") === "dark") {
  rootEl.setAttribute("data-theme", "dark");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = rootEl.getAttribute("data-theme") === "dark";
    if (isDark) {
      rootEl.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      rootEl.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });
}
