// Fetch request to Supabase to get all unique "type" values
fetch("https://hvqqqwpdmwotjgxebrxv.supabase.co/rest/v1/TSLN", {
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2cXFxd3BkbXdvdGpneGVicnh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU2MDY4NzQsImV4cCI6MjA0MTE4Mjg3NH0.K9dKO1K4NQBdSCsqBZHh1Yc4L8VNHDBNgRCzsI0fSSQ",
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data); // Debug: See the fetched data

    // Get all unique "type" values
    const uniqueTypes = [...new Set(data.map((item) => item.type))];

    // Display the unique "type" values on the page
    vis(uniqueTypes);
  })
  .catch((error) => {
    console.error("Fejl ved hentning af data:", error);
  });

// Function to display the data on the page
function vis(data) {
  const main = document.querySelector("main");
  data.forEach((type) => {
    const template = document.querySelector("#smallProductTemplate").content;
    const copy = template.cloneNode(true);

    copy.querySelector("h3").textContent = type;

    main.appendChild(copy);
  });
}
