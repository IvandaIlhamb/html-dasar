// Data produk dalam bentuk array of objects
const products = [
    {
        nama: "Arsenal Home Kit 2023/2024",
        harga: "Rp. 2.000.000",
        gambar: "../assests/images/arsenal.png"
    },
    {
        nama: "Fc Barcelona Home Kit 2023/2024",
        harga: "Rp. 4.000.000",
        gambar: "../assests/images/barca.png"
    },
    {
        nama: "Brighton & Hove Albion Home Kit 2023/2024",
        harga: "Rp. 1.800.000",
        gambar: "../assests/images/brighton.png"
    }
];

// Fungsi untuk menampilkan produk di halaman HTML
function tampilkanProduk() {
    const productContainer = document.getElementById("product-list");

    products.forEach(product => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";

        const imgDiv = document.createElement("div");
        imgDiv.className = "img-card";

        const img = document.createElement("img");
        img.src = product.gambar;
        img.alt = product.nama;
        img.className = "kit";

        imgDiv.appendChild(img);

        const kontenDiv = document.createElement("div");
        kontenDiv.className = "konten-teks";

        const namaH2 = document.createElement("h2");
        namaH2.textContent = product.nama;

        const hargaH2 = document.createElement("h2");
        hargaH2.className = "harga";
        hargaH2.textContent = product.harga;

        const btnBlockDiv = document.createElement("div");
        btnBlockDiv.className = "btn-block";

        const detailLink = document.createElement("a");
        detailLink.href = "#";
        detailLink.className = "detail";
        detailLink.textContent = "Selengkapnya";

        btnBlockDiv.appendChild(detailLink);
        kontenDiv.appendChild(namaH2);
        kontenDiv.appendChild(hargaH2);
        kontenDiv.appendChild(btnBlockDiv);
        cardDiv.appendChild(imgDiv);
        cardDiv.appendChild(kontenDiv);

        productContainer.appendChild(cardDiv);
    });
}

// Memanggil fungsi tampilkanProduk untuk menampilkan produk
tampilkanProduk();
