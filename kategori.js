const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
console.log(category);

// Fetch request til Supabase
fetch(`https://hvqqqwpdmwotjgxebrxv.supabase.co/rest/v1/TSL?category=eq.${category}`, {
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2cXFxd3BkbXdvdGpneGVicnh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU2MDY4NzQsImV4cCI6MjA0MTE4Mjg3NH0.K9dKO1K4NQBdSCsqBZHh1Yc4L8VNHDBNgRCzsI0fSSQ",
  },
})
  .then((res) => res.json())
  .then(vis);

function vis(data) {
  console.table(data);
}

  //   data.forEach((element) => {
  //     const link = document.createElement("a");
  //     link.href = `underkategori.html?id=${element.id}`;
  //     link.textContent = element.name;
  //     document.body.appendChild(link);
  //   });
