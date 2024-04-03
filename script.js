const aesKeyString = "2/SYAmMTJogA/1L52XLagw=="; 
const keyUtf8 = CryptoJS.enc.Base64.parse(aesKeyString);

function encrypt() {
  const inputText = document.getElementById("inputText").value;

  const cipherText = CryptoJS.AES.encrypt(inputText, keyUtf8, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString();
  const encodedUrl = encodeURIComponent(cipherText); 
  document.getElementById("output").innerHTML = "Texto encriptado: " + encodedUrl;
}

function decrypt() {
  const inputText = document.getElementById("inputText").value;
  const decode = decodeURIComponent(inputText);
  const decrypted = CryptoJS.AES.decrypt(decode, keyUtf8, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString(CryptoJS.enc.Utf8);

  document.getElementById("output").innerHTML = "Texto desencriptado: " + decrypted;
}
