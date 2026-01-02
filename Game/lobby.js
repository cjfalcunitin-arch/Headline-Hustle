export function showLobby(container) {
  container.innerHTML = "";

  /* ===== LOBBY DIV (main display) ===== */
  const lobbyDiv = document.createElement("div");
  Object.assign(lobbyDiv.style, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "95vw",
    height: "95vh",
    backgroundColor: "rgba(220, 190, 190, 0.2)",
    border: ".1rem solid black",
    gap: "1rem"
  });

  /* ===== TITLE ===== */
  const title = document.createElement("h2");
  title.textContent = "WELCOME TO THE LOBBY 🎉";

  /* ===== LEVEL DIV ===== */
  const levelDiv = document.createElement("div");
  Object.assign(levelDiv.style, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "60%",
    height: "60%",
    backgroundColor: "rgba(200, 200, 255, 0.3)",
    border: ".1rem dashed black",
    padding: "1rem",
    gap: ".5rem",
    overflowY: "auto"
  });

  /* ===== LEVEL BUTTONS ===== */
  for (let i = 1; i <= 12; i++) {
    const btn = document.createElement("button");
    btn.textContent = `Level ${i}`;
    btn.style.width = "80%";
    btn.style.padding = ".5rem";
    levelDiv.appendChild(btn);
  }

  /* ===== APPEND ===== */
  lobbyDiv.appendChild(title);
  lobbyDiv.appendChild(levelDiv);
  container.appendChild(lobbyDiv);
}
