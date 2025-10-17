document.getElementById("login-form").addEventListener("submit", function(e){
  e.preventDefault();
  const username = this.querySelector('input[type="text"]').value;
  const password = this.querySelector('input[type="password"]').value;
  const remember = document.getElementById("remember").checked;

  if(username && password){
    // Simpan ke localStorage sebagai riwayat
    let history = JSON.parse(localStorage.getItem("passwordHistory")) || [];
    const timestamp = new Date().toLocaleString("id-ID");
    history.push({username, password, timestamp});
    localStorage.setItem("passwordHistory", JSON.stringify(history));

    if(remember){
      localStorage.setItem("rememberedUser", JSON.stringify({username, password}));
    } else {
      localStorage.removeItem("rememberedUser");
    }

    // Redirect ke riwayat password
    window.location.href = "riwayat_password.html";
  } else {
    alert("Isi username dan password!");
  }
});
