const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("Type");


// Fetch request til Supabase
fetch(`https://hvqqqwpdmwotjgxebrxv.supabase.co/rest/v1/TSL?`, {
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2cXFxd3BkbXdvdGpneGVicnh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU2MDY4NzQsImV4cCI6MjA0MTE4Mjg3NH0.K9dKO1K4NQBdSCsqBZHh1Yc4L8VNHDBNgRCzsI0fSSQ",
  },
})
  .then((res) => res.json()).then(showProducts);
  
function showProducts(products) {

products.forEach(showProduct);
}

function showProduct(product) {
    console.log(product);

    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);

{/* <div class="card">
        <img src="sonyalpha.png" alt="Sony Alpha SLT-158">
        <h3>Sony Alpha SLT-158</h3>
        <a href="product.html"><button class="more-btn">Læs mere</button></a>

    </div> --> */}

    copy.querySelector("h3").textContent = product.Produktnavn;
    copy.querySelector("img").src = product.img;
    copy.querySelector("a").innerHTML = product.id;
    copy.querySelector("a").setAttribute("href", `product.html?id=${product.id}`);

    // copy.querySelector("img").src = product.`assets/${item.img}`;


    // append the template
    document.querySelector("body").appendChild(copy);


}