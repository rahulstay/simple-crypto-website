const btc = document.getElementById("bitcoin");
const eth = document.getElementById("eth");

async function getPrices() {
  try {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd";
    const response = await fetch(url);
    const data = await response.json();

    btc.innerText = data.bitcoin.usd;
    eth.innerText = data.ethereum.usd;
  } catch (err) {
    console.error("Error fetching prices:", err);
  }
}


getPrices();

// Hamburger 
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


