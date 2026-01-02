import EventBus from "./event.js";

export function showLoading(container) {
  container.innerHTML = '';
  
  const wrapper = document.createElement("div");
  styleCenter(wrapper);

  const title = document.createElement("div");
  title.textContent = "LOADING.JS";
  title.style.marginBottom = "10px";

  const counter = document.createElement("div");
  counter.style.fontSize = "20px";

  wrapper.appendChild(title);
  wrapper.appendChild(counter);
  container.appendChild(wrapper);

  let count = 100;
  const totalDuration = Math.random() * 2000 + 1000;
  const intervalTime = totalDuration / 100;

  counter.textContent = count;

  const interval = setInterval(() => {
    count--;
    if (Math.random() > 0.7) count -= Math.floor(Math.random() * 3);

    if (count <= 0) {
      counter.textContent = "0";
      clearInterval(interval);
      EventBus.emit("loadingComplete"); // 🔥 emit event instead of callback
      return;
    }

    counter.textContent = count;
  }, intervalTime);
}

function styleCenter(el) {
  el.style.height = "100vh";
  el.style.display = "flex";
  el.style.flexDirection = "column";
  el.style.justifyContent = "center";
  el.style.alignItems = "center";
  el.style.fontSize = "32px";
  el.style.fontWeight = "bold";
}
