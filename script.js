var qrText = document.getElementById("inp");
var qrBox = document.getElementById("qrbox");
var qrCode = document.getElementById("qrcode");

function generateqr() {
  if (qrText.value.length > 0) {

    qrCode.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +qrText.value;
    qrBox.classList.add("show-qr");

  } else {
    qrText.classList.add("error");

    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
    
  }
}
