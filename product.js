// med urlParams kan vi fiske id'et ud af URL'en og vise det rigtige produkt
window.addEventListener("DOMContentLoaded", hentData);
const urlParams = new URLSearchParams(window.location.search);
const fakeid = urlParams.get("id"); ///***i give it fakeid =const name then i give console(log fakeid )i begynde to get my data  */
console.log(fakeid);
// const fakeid = "C00900";
console.log(fakeid);
// const url = `https://hvqqqwpdmwotjgxebrxv.supabase.co/rest/v1/TSL`;
const url = `https://hvqqqwpdmwotjgxebrxv.supabase.co/rest/v1/TSL?id=eq.${fakeid}`;
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2cXFxd3BkbXdvdGpneGVicnh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU2MDY4NzQsImV4cCI6MjA0MTE4Mjg3NH0.K9dKO1K4NQBdSCsqBZHh1Yc4L8VNHDBNgRCzsI0fSSQ";

const options = {
  headers: {
    apikey: key,
  },
};

function hentData() {
  fetch(url, options)
    .then((res) => res.json())
    .then(showData);
}
function showData(items) {
  const item = items[0];
  console.log(item);
  document.querySelector(".name").textContent = item.produktnavn_og_model;
  document.querySelector(".assetname").textContent = item.id;
  document.querySelector(".brand").textContent = item.brand;
  document.querySelector(".objectname").textContent = item.objektkode;
  document.querySelector(".categoryname").textContent = item.category;
  document.querySelector(".typeb").textContent = item.taskonomi2;
  document.querySelector(".typec").textContent = item.taskonomi3;
  document.querySelector(".dynamicpics").setAttribute("src", `assets/${item.img}`);
}
