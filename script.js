function generateQRCode() {
  let text = document.getElementById("textInput").value;
  let qrCodeDiv = document.getElementById("qrcode");

  qrCodeDiv.innerHTML = ""; // ล้าง QR Code เก่าก่อน

  if (text.trim() !== "") {
    new QRCode(qrCodeDiv, {
      text: text,
      width: 200,
      height: 200
    });

    downloadBtn.classList.remove("d-none");
  } else {
    alert("กรุณาใส่ข้อความหรือ URL ก่อน!");
  }
}

function downloadQRCode() {
  let qrCodeImg = document.querySelector("#qrcode img");

  if (qrCodeImg) {
    let link = document.createElement("a");
    link.href = qrCodeImg.src;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    alert("กรุณาสร้าง QR Code ก่อนดาวน์โหลด!");
  }
}

function resetData() {
  let text = (document.getElementById("textInput").value = "");
  let qrCodeDiv = (document.getElementById("qrcode").innerHTML = "");
}
