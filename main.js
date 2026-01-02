import { showLoading } from "./Game/loading.js";
import { showLobby } from "./Game/lobby.js";
import EventBus from "./Game/event.js";

/* ===== GLOBAL FONT ===== */
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap";
document.head.appendChild(fontLink);

const globalStyle = document.createElement("style");
globalStyle.textContent = `
  * { font-family: 'Patrick Hand', system-ui, -apple-system, BlinkMacSystemFont,
       'Segoe UI', Arial, sans-serif !important; }
`;
document.head.appendChild(globalStyle);

/* ===== GLOBAL NO SCROLL ===== */
document.documentElement.style.overflow = "hidden";
document.body.style.overflow = "hidden";

/* ===== APP ROOT ===== */
const app = document.createElement("div");
app.id = "app";
document.body.appendChild(app);

/* ===== CLEAR SCREEN ===== */
function clearScreen(container) {
  container.innerHTML = '';
}

/* ===== START APP ===== */
function startApp(container = app) {
  clearScreen(container);

  // listen for loading complete event
  EventBus.on("loadingComplete", () => {
    clearScreen(container);
    showLobby(container);
  });

  // start loading
  showLoading(container);
}

/* ===== EXECUTE ===== */
startApp();
