import EventBus from "./event.js";
import LobbyEvents from "./lobbyEvents.js";

export function showLobby(container) {
  container.innerHTML = "";

  /* ===== LOBBY DIV ===== */
  const lobbyDiv = document.createElement("div");
  Object.assign(lobbyDiv.style, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "95vw",
    height: "92vh",
    backgroundColor: "rgba(220, 190, 190, 0.2)",
    border: ".1rem solid black",
    gap: "1rem",
    padding: "1rem"
  });

  /* ===== TITLE ===== */
  const title = document.createElement("h2");
  title.textContent = "WELCOME TO THE HOTEL 🎉";
  Object.assign(title.style, {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem"
  });

  /* ===== LEVEL CONTAINER ===== */
  const levelContainer = document.createElement("div");
  Object.assign(levelContainer.style, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "60%",
    height: "60%",
    backgroundColor: "rgba(200, 200, 255, 0.3)",
    border: ".1rem dashed black",
    padding: "1rem",
    gap: "0.2rem",
    overflowY: "auto"
  });

  const levelCount = 12;
  const levels = [];

  // Create level divs
  for (let i = 1; i <= levelCount; i++) {
    const levelDiv = document.createElement("div");
    levelDiv.id = `level-${i}`;
    levelDiv.textContent = `Level ${i}`;
    Object.assign(levelDiv.style, {
      width: "80%",
      padding: "0.5rem",
      textAlign: "center",
      backgroundColor: i === 1 ? "green" : "lightblue",
      color: "white",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "background-color 0.2s"
    });
    levelContainer.appendChild(levelDiv);
    levels.push(levelDiv);
  }

  /* ===== UP/DOWN BUTTONS ===== */
  const buttonContainer = document.createElement("div");
  Object.assign(buttonContainer.style, {
    display: "flex",
    gap: "1rem",
    marginTop: "1rem"
  });

  const upBtn = document.createElement("button");
  upBtn.textContent = "Up";
  Object.assign(upBtn.style, {
    padding: "0.5rem 1rem",
    backgroundColor: "gray",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  });

  const downBtn = document.createElement("button");
  downBtn.textContent = "Down";
  Object.assign(downBtn.style, {
    padding: "0.5rem 1rem",
    backgroundColor: "gray",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }); 
  
  const playBtn = document.createElement("button");
  playBtn.textContent = "PLAY";
  Object.assign(playBtn.style, {
    backgroundColor: "green",
    color: "white",
    fontSize: '20px',
    border: ".1rem solid black",
    borderRadius: "8px",
    cursor: "pointer"
  });


  buttonContainer.appendChild(upBtn);
  buttonContainer.appendChild(downBtn);

  /* ===== EVENT LISTENERS ===== */
  upBtn.addEventListener("click", () => EventBus.emit("levelDown"));
  downBtn.addEventListener("click", () => EventBus.emit("levelUp"));

  EventBus.on("levelChanged", ({ oldLevel, newLevel }) => {
    // Deactivate old level
    const oldDiv = document.getElementById(`level-${oldLevel}`);
    oldDiv.style.backgroundColor = "lightblue";

    // Activate new level
    const newDiv = document.getElementById(`level-${newLevel}`);
    newDiv.style.backgroundColor = "green";
  });

  /* ===== INITIALIZE EVENTS ===== */
  LobbyEvents.init(levelCount);

  /* ===== APPEND ===== */
  lobbyDiv.appendChild(title);
  lobbyDiv.appendChild(playBtn);
  lobbyDiv.appendChild(levelContainer);
  lobbyDiv.appendChild(buttonContainer);
  container.appendChild(lobbyDiv);
}
