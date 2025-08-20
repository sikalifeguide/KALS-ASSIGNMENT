async function loadResults() {
  try {
    const response = await fetch("results.json"); // load JSON file
    const results = await response.json();
    const container = document.querySelector(".kals-gallery-container");
    container.innerHTML = "";

    results.forEach(r => {
      const div = document.createElement("div");
      div.className = "event-item";
      div.innerHTML = `
        <img src="${r.file}" alt="${r.name}">
        <p class="event-caption">~ ${r.name} Result: ${r.score}</p>
      `;
      container.appendChild(div);
    });
  } catch (err) {
    console.error("Error loading results:", err);
  }
}
loadResults();