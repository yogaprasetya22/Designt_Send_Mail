const form = document.querySelector('form');

function send() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "jagres3211@gmail.com",
    Password: "yogaprasetya3021",
    To: "jagres3211@gmail.com",
    From: document.getElementById("email").value,
    Subject: document.querySelector("#fnama").value + " " + document.querySelector("#lnama").value + " mengirim anda pesan",
    Body: "<center>" + "Nomor Telpon" + "<br>" + "( " + document.querySelector("#no").value + " )" + "</center>" + "<br><br><br>" + document.getElementById("pesan").value + "<br><br><br><br>",
  }).then(
    (response) => form.reset(),
      Swal.fire({
        title: document.getElementById("fnama").value,
        text: "Terima Kasih",
        icon: "success",
      })
  );
}
function dm() {
  document.documentElement.classList.toggle("darkmode");
  document.querySelectorAll(".nodm").forEach((result) => {
    result.classList.toggle("nodm");
  });
}