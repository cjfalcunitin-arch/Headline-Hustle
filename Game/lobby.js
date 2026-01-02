export function showLobby(container) {
  container.innerHTML = "";

  const displayDiv = document.createElement('div');
  Object.assign(displayDiv.style, {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95vw',
    height: '95vh',
    backgroundColor: 'rgba(220, 190, 190, 0.2)',
    border: '.1rem solid black',
  });

  displayDiv.textContent = "WELCOME TO THE LOBBY 🎉";
  container.appendChild(displayDiv);
}
