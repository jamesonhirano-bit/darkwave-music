const tracks = [
  { title: "Track 01", subtitle: "ORIGINAL MIX", file: "assets/tracks/track-01.mp3" },
  { title: "Track 02", subtitle: "ORIGINAL MIX", file: "assets/tracks/track-02.mp3" },
  { title: "Track 03", subtitle: "ORIGINAL MIX", file: "assets/tracks/track-03.mp3" },
  { title: "Track 04", subtitle: "ORIGINAL MIX", file: "assets/tracks/track-04.mp3" },
  { title: "Track 05", subtitle: "ORIGINAL MIX", file: "assets/tracks/track-05.mp3" },
  { title: "Track 06", subtitle: "ORIGINAL MIX", file: "assets/tracks/track-06.mp3" },
  { title: "Track 07", subtitle: "ORIGINAL MIX", file: "assets/tracks/track-07.mp3" },
  { title: "Track 08", subtitle: "ORIGINAL MIX", file: "assets/tracks/track-08.mp3" }
];
const list = document.querySelector("#track-list");
const safeGet = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
const likes = safeGet("dw-likes", {});
const plays = safeGet("dw-plays", {});
function render() {
  list.innerHTML = tracks.map((t, i) => {
    const id = String(i + 1).padStart(2, "0");
    return `<article class="track">
      <span class="track-num">${id}</span>
      <div><div class="track-title">${t.title}</div><div class="track-sub">${t.subtitle}</div></div>
      <audio controls preload="none" data-track="${id}"><source src="${t.file}" type="audio/mpeg">お使いのブラウザは音声再生に対応していません。</audio>
      <span class="track-stat">▶ <b id="plays-${id}">${plays[id] || 0}</b></span>
      <button class="like-btn ${likes[id] ? "liked" : ""}" data-like="${id}" aria-pressed="${!!likes[id]}">♥ <span id="likes-${id}">${likes[id] ? 1 : 0}</span></button>
    </article>`;
  }).join("");
  document.querySelectorAll("audio[data-track]").forEach(audio => {
    audio.addEventListener("play", () => {
      const id = audio.dataset.track;
      plays[id] = (plays[id] || 0) + 1;
      localStorage.setItem("dw-plays", JSON.stringify(plays));
      document.querySelector("#plays-" + id).textContent = plays[id];
    });
  });
  document.querySelectorAll("[data-like]").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.dataset.like;
      if (likes[id]) return;
      likes[id] = true;
      localStorage.setItem("dw-likes", JSON.stringify(likes));
      button.classList.add("liked");
      button.setAttribute("aria-pressed", "true");
      document.querySelector("#likes-" + id).textContent = "1";
    });
  });
}
document.querySelector("#year").textContent = new Date().getFullYear();
render();