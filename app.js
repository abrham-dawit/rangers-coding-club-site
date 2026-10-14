// Rangers Coding Club v2 — lesson tracks, project cards, and a demo
// join form (sign-ups persist in localStorage only; see README).

const TRACKS = [
  { icon: "🧩", name: "Scratch Rangers", level: "Beginner · younger grades",
    desc: "Drag-and-drop coding with Scratch: animations, stories, and first games. No typing, all building." },
  { icon: "🐍", name: "Python Rangers", level: "Beginner–Intermediate",
    desc: "Real text-based coding in Python: drawings with turtle, number games, and a first chatbot that answers back." },
  { icon: "🌐", name: "Web Rangers", level: "Intermediate",
    desc: "HTML, CSS, and a little JavaScript — every ranger ships their own webpage about something they love." },
  { icon: "🤖", name: "Robot Rangers", level: "Intermediate–Advanced",
    desc: "Code that moves things: motors, sensors, and simple robots. The track for kids who ask \"but can it drive?\"" },
];

const PROJECTS = [
  { icon: "🎮", name: "Your first game", desc: "A Scratch or Python game with a score, a way to lose, and a way to win. Demo-day favorite." },
  { icon: "🏠", name: "A website about you", desc: "Your own page: your interests, your photos policy (ask first!), your favorite links — live HTML you wrote." },
  { icon: "🎲", name: "Number guessing championship", desc: "Python game with difficulty levels and a high-score chase across the club." },
  { icon: "🎨", name: "Generative art show", desc: "Code that draws: spirals, patterns, and randomness, printed and hung up at demo day." },
  { icon: "💬", name: "A chatbot with opinions", desc: "A Python bot that answers questions about your favorite topic — and has jokes ready." },
  { icon: "🏎️", name: "Robot obstacle run", desc: "Program a robot through the club obstacle course. Fastest clean run takes the season." },
];

document.getElementById("trackGrid").innerHTML = TRACKS.map(t => `
  <article class="track-card">
    <div class="icon">${t.icon}</div>
    <span class="level ${t.level.includes("Advanced") ? "adv" : ""}">${t.level}</span>
    <h3>${t.name}</h3>
    <p>${t.desc}</p>
  </article>`).join("");

document.getElementById("projectGrid").innerHTML = PROJECTS.map(p => `
  <article class="project-card">
    <div class="icon">${p.icon}</div>
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
  </article>`).join("");

const trackSelect = document.getElementById("jTrack");
trackSelect.innerHTML = TRACKS.map(t => `<option>${t.name}</option>`).join("") + `<option>Not sure yet</option>`;

// --- Join form (demo: localStorage only) ---
const KEY = "rangers-club-signups-v2";
function loadSignups() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; }
}
const form = document.getElementById("joinForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const signup = {
    name: document.getElementById("jName").value.trim(),
    grade: document.getElementById("jGrade").value,
    email: document.getElementById("jEmail").value.trim(),
    track: trackSelect.value,
    notes: document.getElementById("jNotes").value.trim(),
    ts: Date.now(),
  };
  const signups = loadSignups();
  signups.push(signup);
  localStorage.setItem(KEY, JSON.stringify(signups));
  form.reset();
  formMsg.textContent = `You're on the list, ${signup.name.split(" ")[0]}! (Demo note: this sign-up was saved in this browser only — the live site will email the club.) Total sign-ups on this device: ${signups.length}.`;
});
