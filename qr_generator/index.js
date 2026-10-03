const QRCode = require('qrcode');

const GUARDERIA_MENU_URL = "https://raul94a.github.io/menu-guarderia/";
const OUTPUT_PATH = "./menu-guarderia-qr.png";

QRCode.toFile(OUTPUT_PATH, GUARDERIA_MENU_URL, function (err) {
    if (err) return console.error("Error occurred:", err);

    console.log(`QR code saved successfully at ${OUTPUT_PATH}`);
});