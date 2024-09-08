import crypto from "crypto"; // Mengimpor modul crypto

const randomString = crypto.randomBytes(256).toString("base64"); // Menghasilkan string acak dan mengonversinya ke Base64

console.log(randomString); // Menampilkan string acak ke konsol
