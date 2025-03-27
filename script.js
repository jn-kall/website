function login() {
    const validNames = ["seniorku"]; // Daftar nama yang valid
    const username = document.getElementById("username").value;
    const errorMessage = document.getElementById("error-message");

    if (validNames.includes(username)) {
        // Jika nama valid, alihkan ke halaman selanjutnya
        window.location.href = "mainpage.html"; // Ganti dengan halaman yang diinginkan
    } else {
        // Jika nama tidak valid, tampilkan pesan error
        errorMessage.style.display = "block";
    }
}
script