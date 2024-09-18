// Hent URL-parametre
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

console.log("Category from URL:", category); // Debugging

// Opdater h1 baseret på den valgte kategori
if (category) {
  document.querySelector("h1").textContent = decodeURIComponent(category);
  console.log("Updated h1 with category:", decodeURIComponent(category)); // Debugging
} else {
}

// Fetch request til Supabase
fetch(`https://hvqqqwpdmwotjgxebrxv.supabase.co/rest/v1/TSLN?category=eq.${encodeURIComponent(category)}`, {
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2cXFxd3BkbXdvdGpneGVicnh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU2MDY4NzQsImV4cCI6MjA0MTE4Mjg3NH0.K9dKO1K4NQBdSCsqBZHh1Yc4L8VNHDBNgRCzsI0fSSQ",
  },
})
  .then((res) => res.json())
  .then((data) => {
    const uniqueProducts = new Set();
    const filteredData = data.filter((item) => {
      if (uniqueProducts.has(item.produktnavn)) {
        return false;
      } else {
        uniqueProducts.add(item.produktnavn);
        return true;
      }
    });
    vis(filteredData.slice(0, 8));
  });

function vis(data) {
  console.table(data); // Viser data i konsollen

  data.forEach((item) => {
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h3").textContent = item.produktnavn;
    copy.querySelector("img").src = "pimgs/" + item.asset_id + ".webp";
    document.querySelector("main").appendChild(copy);
  });
}