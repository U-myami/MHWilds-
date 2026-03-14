const params = new URLSearchParams(window.location.search);
const monsterId = params.get("id"); // [cite: 11]

const monster = MONSTERS.find(m => m.id === monsterId);
if (monster) {
  document.getElementById("name").textContent = monster.name; // [cite: 12]
  document.getElementById("type").textContent = monster.type; // [cite: 12]
  document.getElementById("hp").textContent = monster.hp; // [cite: 12]

  const drops = DROPS.filter(d => d.monsterId === monsterId); // [cite: 13]
  const dropList = document.getElementById("drops");
  drops.forEach(drop => {
    const li = document.createElement("li");
    li.textContent = `${drop.itemName} (${drop.dropRate}%)`; // [cite: 14]
    dropList.appendChild(li);
  });
}