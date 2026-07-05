const colors = {
  carlos: "#d8a940",
  fer: "#9a7cff",
  pulso: "#46a7ff",
  ciudad: "#32d38a",
  traders: "#f4c94f",
  ceo: "#d9e1ec",
  salud: "#62e06f",
  rutina: "#8a94a8",
  lectura: "#b8a7ff",
  buffer: "#9aa3ad",
  descanso: "#77c8b8"
};

const projects = [
  { name: "Carlos Puc", key: "carlos", status: "En foco", progress: 72 },
  { name: "Fer Puc", key: "fer", status: "Construcción", progress: 64 },
  { name: "Pulso Inteligente", key: "pulso", status: "En foco", progress: 58 },
  { name: "Mi Ciudad", key: "ciudad", status: "Exploración", progress: 28 },
  { name: "Wake Up Traders", key: "traders", status: "Mantenimiento", progress: 40 }
];

const xpRewards = {
  "Ejercicio": 55,
  "Lectura": 25,
  "Fer Puc": 60,
  "Clientes": 55,
  "Carlos Puc": 50,
  "Publicar contenido": 75,
  "Día CEO": 150,
  "Planeación Estratégica": 90,
  "PULSO INTELIGENTE": 120,
  "Mi Ciudad": 65,
  "Wake Up Traders": 35,
  "BUFFER OPERATIVO": 10,
  "default": 15
};

const schedule = [
  ["Lunes", [
    ["06:00", "06:10", "Levantarse", "rutina"], ["06:10", "06:25", "Preparar avena", "rutina"], ["06:25", "06:40", "Desayuno ligero", "rutina"], ["06:40", "08:10", "Ejercicio", "salud"], ["08:10", "09:00", "Baño y desayuno fuerte", "rutina"], ["09:00", "13:00", "Clientes / Carlos Puc", "carlos"], ["13:00", "15:00", "Comida y descanso", "descanso"], ["15:00", "18:00", "Clientes y entregables", "carlos"], ["18:00", "19:00", "BUFFER OPERATIVO", "buffer"], ["19:00", "21:00", "Fer Puc", "fer"], ["21:00", "22:00", "Wake Up Traders", "traders"]
  ]],
  ["Martes", [
    ["06:00", "06:10", "Levantarse", "rutina"], ["06:10", "06:25", "Preparar avena", "rutina"], ["06:25", "06:40", "Desayuno ligero", "rutina"], ["06:40", "08:10", "Ejercicio", "salud"], ["08:10", "09:00", "Baño y desayuno fuerte", "rutina"], ["09:00", "13:00", "Clientes", "carlos"], ["13:00", "15:00", "Comida y descanso", "descanso"], ["15:00", "18:00", "Clientes", "carlos"], ["18:00", "19:00", "BUFFER OPERATIVO", "buffer"], ["19:00", "21:00", "Fer Puc", "fer"], ["21:00", "22:00", "Lectura", "lectura"]
  ]],
  ["Miércoles", [
    ["06:00", "06:10", "Levantarse", "rutina"], ["06:10", "06:25", "Preparar avena", "rutina"], ["06:25", "06:40", "Desayuno ligero", "rutina"], ["06:40", "08:10", "Ejercicio", "salud"], ["08:10", "09:00", "Baño y desayuno fuerte", "rutina"], ["09:00", "12:00", "PULSO INTELIGENTE", "pulso"], ["12:00", "13:00", "Clientes opcional", "carlos"], ["13:00", "15:00", "Comida y descanso", "descanso"], ["15:00", "18:00", "Clientes principal", "carlos"], ["18:00", "19:00", "BUFFER OPERATIVO", "buffer"], ["19:00", "21:00", "Fer Puc", "fer"], ["21:00", "22:00", "Lectura", "lectura"]
  ]],
  ["Jueves", [
    ["06:00", "06:10", "Levantarse", "rutina"], ["06:10", "06:25", "Preparar avena", "rutina"], ["06:25", "06:40", "Desayuno ligero", "rutina"], ["06:40", "08:10", "Ejercicio", "salud"], ["08:10", "09:00", "Baño y desayuno fuerte", "rutina"], ["09:00", "12:00", "PULSO INTELIGENTE", "pulso"], ["12:00", "13:00", "Clientes opcional", "carlos"], ["13:00", "15:00", "Comida y descanso", "descanso"], ["15:00", "18:00", "Clientes principal", "carlos"], ["18:00", "19:00", "BUFFER OPERATIVO", "buffer"], ["19:00", "21:00", "Fer Puc", "fer"], ["21:00", "22:00", "Wake Up Traders", "traders"]
  ]],
  ["Viernes", [
    ["06:00", "06:10", "Levantarse", "rutina"], ["06:10", "06:25", "Preparar avena", "rutina"], ["06:25", "06:40", "Desayuno ligero", "rutina"], ["06:40", "08:10", "Ejercicio", "salud"], ["08:10", "09:00", "Baño y desayuno fuerte", "rutina"], ["09:00", "12:00", "Día CEO", "ceo"], ["12:00", "14:00", "Planeación Estratégica", "ceo"], ["15:00", "18:00", "Clientes y pendientes", "carlos"], ["18:00", "19:00", "BUFFER OPERATIVO", "buffer"], ["19:00", "21:00", "Fer Puc", "fer"], ["21:00", "22:00", "Lectura", "lectura"]
  ]],
  ["Sábado", [
    ["08:00", "10:00", "Mi Ciudad / oportunidades flexibles", "ciudad"], ["10:30", "13:00", "Grabaciones en calle", "ciudad"], ["13:00", "15:00", "Familia", "descanso"], ["15:00", "17:00", "Oportunidades y eventos", "ciudad"], ["17:00", "18:00", "Planeación ligera", "ceo"], ["19:00", "20:00", "Recuperación ligera", "descanso"], ["20:00", "22:00", "Espacios flexibles para proyectos", "fer"]
  ]],
  ["Domingo", [
    ["08:30", "10:00", "Descanso", "descanso"], ["10:00", "12:00", "Planeación semanal", "ceo"], ["12:00", "15:00", "Familia", "descanso"], ["16:00", "17:00", "Lectura", "lectura"], ["17:00", "19:00", "Recuperación o proyectos personales", "fer"]
  ]]
];

let completed = new Set(JSON.parse(localStorage.getItem("fp_completed") || "[]"));
let xp = Number(localStorage.getItem("fp_xp") || "360");

const quotes = [
  "La claridad es una ventaja competitiva.",
  "Hoy no administras pendientes: diriges una campaña.",
  "Cada bloque completado compra una versión más libre del futuro.",
  "Riqueza, salud, reputación, comunidad y legado se construyen por ciclos.",
  "La energía bien dirigida se convierte en impacto visible."
];

const eventDetails = {
  "PULSO INTELIGENTE": "Grabación · Estrategia · Planeación · Seguimiento · Coordinación · Producción",
  "BUFFER OPERATIVO": "Cerrar pendientes · Traslados · Llamadas extendidas · Cena ligera · Descanso mental"
};

const nonMissionTypes = new Set(["rutina", "descanso", "buffer"]);

function minutes(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function isMissionEvent(event) {
  return !nonMissionTypes.has(event[3]);
}

function eventXp(title) {
  const key = Object.keys(xpRewards).find(item => title.includes(item));
  return xpRewards[key || "default"];
}

function renderProjects() {
  const list = document.getElementById("projectsList");
  list.innerHTML = projects.map(project => `
    <article class="project-card" style="--accent:${colors[project.key]}">
      <div class="project-title">
        <div class="project-name"><span class="dot"></span>${project.name}</div>
        <span class="project-status">${project.status}</span>
      </div>
      <div class="mini-progress" style="--value:${project.progress}%"><span></span></div>
      <div class="project-meta"><span>Cumplimiento</span><span>${project.progress}%</span></div>
    </article>
  `).join("");
}

function renderAxis() {
  const axis = document.getElementById("timeAxis");
  axis.innerHTML = "<div></div>";
  for (let hour = 6; hour <= 23; hour++) {
    axis.innerHTML += `<div class="time-label">${String(hour).padStart(2, "0")}:00</div>`;
  }
}

function renderCalendar() {
  const calendar = document.getElementById("calendar");
  const compact = document.querySelector(".calendar-panel").classList.contains("compact-view");
  const headerHeight = compact ? 38 : 44;
  const morningScale = compact ? 2.1 : 3;
  const dayScale = compact ? 0.72 : 0.9;
  const morningEnd = 9 * 60;
  const timeToY = (time) => {
    const value = typeof time === "number" ? time : minutes(time);
    const morningMinutes = Math.max(0, Math.min(value, morningEnd) - 360);
    const dayMinutes = Math.max(0, value - morningEnd);
    return headerHeight + morningMinutes * morningScale + dayMinutes * dayScale;
  };
  calendar.innerHTML = "";
  schedule.forEach(([day, events], dayIndex) => {
    const missionEvents = events
      .map((event, eventIndex) => ({ event, eventIndex }))
      .filter(item => isMissionEvent(item.event));
    const doneCount = missionEvents.filter(item => completed.has(`${dayIndex}-${item.eventIndex}`)).length;
    const column = document.createElement("section");
    column.className = "day-column";
    column.dataset.day = dayIndex;
    column.innerHTML = `<div class="day-header"><span>${day}</span><span class="day-score">${doneCount}/${missionEvents.length}</span></div>`;

    events.forEach(([start, end, title, type], eventIndex) => {
      const id = `${dayIndex}-${eventIndex}`;
      const detail = eventDetails[title] ? `<span class="event-detail">${eventDetails[title]}</span>` : "";
      const event = document.createElement("article");
      event.className = `event ${completed.has(id) ? "completed" : ""}`;
      event.draggable = true;
      event.dataset.id = id;
      event.dataset.day = dayIndex;
      event.dataset.index = eventIndex;
      event.style.setProperty("--event-color", colors[type]);
      event.style.setProperty("--top", `${timeToY(start)}px`);
      event.style.setProperty("--height", `${Math.max(18, timeToY(end) - timeToY(start) - 4)}px`);
      event.innerHTML = `
        <span class="event-title">${title}</span>
        <span class="event-time">${start} - ${end} · +${eventXp(title)} XP</span>
        ${detail}
        <div class="event-actions">
          <button title="Completar" aria-label="Completar misión">✓</button>
          <button title="Expandir" aria-label="Expandir misión">↗</button>
        </div>
      `;
      event.querySelector("button").addEventListener("click", (e) => {
        e.stopPropagation();
        toggleComplete(id, event);
      });
      event.querySelectorAll("button")[1].addEventListener("click", (e) => {
        e.stopPropagation();
        event.classList.toggle("expanded");
        const expanded = event.classList.contains("expanded");
        const baseHeight = Math.max(18, timeToY(end) - timeToY(start) - 4);
        event.style.height = expanded ? `${Math.max(baseHeight + 42, 82)}px` : `${baseHeight}px`;
      });
      event.addEventListener("dblclick", () => toggleComplete(id, event));
      event.addEventListener("dragstart", () => {
        event.classList.add("dragging");
        event.dataTransfer?.setData("text/plain", id);
      });
      event.addEventListener("dragend", () => event.classList.remove("dragging"));
      column.appendChild(event);
    });

    column.addEventListener("dragover", (e) => e.preventDefault());
    column.addEventListener("drop", (e) => {
      e.preventDefault();
      const id = e.dataTransfer.getData("text/plain");
      const dragged = document.querySelector(`[data-id="${id}"]`);
      if (!dragged) return;
      const rect = column.getBoundingClientRect();
      const y = Math.max(headerHeight, e.clientY - rect.top);
      dragged.style.setProperty("--top", `${y}px`);
      column.appendChild(dragged);
      showToast("Bloque reprogramado");
    });

    calendar.appendChild(column);
  });
}

function todayIndex() {
  const jsDay = new Date().getDay();
  return jsDay === 0 ? 6 : jsDay - 1;
}

function renderMissions() {
  const day = Math.min(todayIndex(), schedule.length - 1);
  const events = schedule[day][1].filter(isMissionEvent).slice(0, 7);
  const list = document.getElementById("dailyMissions");
  list.innerHTML = events.map((event, index) => {
    const eventIndex = schedule[day][1].findIndex(item => item === event);
    const id = `${day}-${eventIndex}`;
    const priorities = ["alta", "media", "media", "baja", "alta", "baja", "media"];
    return `
      <article class="mission-item ${completed.has(id) ? "done" : ""}" data-mission="${id}">
        <button aria-label="Completar misión"></button>
        <div class="mission-copy">
          <strong>${event[2]}</strong>
          <span>${event[0]} - ${event[1]} · +${eventXp(event[2])} XP</span>
        </div>
        <span class="priority ${priorities[index]}">${priorities[index]}</span>
      </article>
    `;
  }).join("");

  list.querySelectorAll(".mission-item").forEach(item => {
    item.querySelector("button").addEventListener("click", () => {
      const id = item.dataset.mission;
      const event = document.querySelector(`[data-id="${id}"]`);
      toggleComplete(id, event);
    });
  });
}

function renderAchievements() {
  const achievements = [
    ["Disciplina", "30 días entrenando.", colors.salud, "30"],
    ["Constructor", "100 bloques completados.", colors.carlos, "100"],
    ["Estratega", "4 viernes CEO consecutivos.", colors.ceo, "CEO"],
    ["Creador", "50 piezas de contenido publicadas.", colors.purple, "50"]
  ];
  document.getElementById("achievements").innerHTML = achievements.map(item => `
    <article class="achievement" style="--accent:${item[2]}">
      <div class="badge">${item[3]}</div>
      <strong>${item[0]}</strong>
      <p>${item[1]}</p>
    </article>
  `).join("");
}

function toggleComplete(id, eventElement) {
  const [day, index] = id.split("-").map(Number);
  const title = schedule[day][1][index][2];
  if (completed.has(id)) {
    completed.delete(id);
    xp = Math.max(0, xp - eventXp(title));
  } else {
    completed.add(id);
    xp += eventXp(title);
    eventElement?.classList.add("flash");
    showToast(`Misión completada · +${eventXp(title)} XP`);
  }
  localStorage.setItem("fp_completed", JSON.stringify([...completed]));
  localStorage.setItem("fp_xp", String(xp));
  updateStats();
  renderCalendar();
  renderMissions();
}

function updateStats() {
  const allEvents = schedule.flatMap(day => day[1].map((event, eventIndex) => ({ event, eventIndex, dayIndex: schedule.indexOf(day) })));
  const missionEvents = allEvents.filter(item => isMissionEvent(item.event));
  const completedMissionCount = missionEvents.filter(item => completed.has(`${item.dayIndex}-${item.eventIndex}`)).length;
  const weekly = Math.round((completedMissionCount / missionEvents.length) * 100);
  const level = 12 + Math.floor(xp / 500);
  const missing = 500 - (xp % 500);
  document.getElementById("weeklyProgress").textContent = `${weekly}%`;
  document.getElementById("levelValue").textContent = level;
  document.getElementById("xpValue").textContent = xp;
  document.getElementById("xpBar").style.width = `${(xp % 500) / 5}%`;
  document.getElementById("xpMissing").textContent = `Faltan ${missing} XP para el siguiente nivel`;
  document.getElementById("blocksDone").textContent = completedMissionCount;
  document.getElementById("weeklyMissions").textContent = `${completedMissionCount}/${missionEvents.length}`;
  document.getElementById("clientBlocks").textContent = allEvents.filter(item => item.event[3] === "carlos").length;
  document.getElementById("annualAdvance").textContent = `${Math.max(43, 43 + Math.floor(weekly / 12))}%`;
  document.getElementById("energyValue").textContent = `${Math.max(58, 92 - Math.floor(completed.size * 0.7))}%`;
  const todayMissions = [...document.querySelectorAll(".mission-item")];
  const allDone = todayMissions.length > 0 && todayMissions.every(item => completed.has(item.dataset.mission));
  document.getElementById("completionReward").classList.toggle("show", allDone);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

document.getElementById("focusToggle").addEventListener("click", () => {
  document.body.classList.toggle("focus-mode");
  showToast(document.body.classList.contains("focus-mode") ? "Modo enfoque activado" : "Modo enfoque desactivado");
});

document.querySelectorAll(".tool-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tool-btn").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(".calendar-panel").classList.toggle("compact-view", button.dataset.view === "compact");
    renderCalendar();
  });
});

setInterval(() => {
  const quote = quotes[Math.floor(Date.now() / 5000) % quotes.length];
  document.getElementById("quoteText").textContent = quote;
}, 5000);

renderProjects();
renderAxis();
renderCalendar();
renderMissions();
renderAchievements();
updateStats();
