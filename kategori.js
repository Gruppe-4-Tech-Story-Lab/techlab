const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
const encoded = encodeURIComponent(category);
console.log(category);

// Fetch request til Supabase
fetch(`https://hvqqqwpdmwotjgxebrxv.supabase.co/rest/v1/TSLN?category=eq.${encoded}`, {
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2cXFxd3BkbXdvdGpneGVicnh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU2MDY4NzQsImV4cCI6MjA0MTE4Mjg3NH0.K9dKO1K4NQBdSCsqBZHh1Yc4L8VNHDBNgRCzsI0fSSQ",
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    const uniqueProducts = new Set();
    const filteredData = data.filter((item) => {
      if (uniqueProducts.has(item.produktnavn)) {
        return false;
      } else {
        uniqueProducts.add(item.produktnavn);
        return true;
      }
    });
    vis(filteredData);
    console.log(filteredData)
  });

// Funktion til at vise data på siden
function vis(data) {
  console.table(data); // Dette viser dataene i konsollen

  data.forEach((item) => {
    const template = document.querySelector("#smallProductTemplate").content;
    const copy = template.cloneNode(true);

    copy.querySelector("h3").textContent = item.produktnavn;
    copy.querySelector(".subtle").textContent = item.type;

    document.querySelector("main").appendChild(copy);
  });
}
