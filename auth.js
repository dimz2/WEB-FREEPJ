// auth.js
// ============================================
// JANGAN disebar bareng index.html kalau lo mau fitur admin
// (tambah/edit/hapus character) tetep ke-gate dari user lain.
// File ini cuma nyimpen HASH SHA-256 dari password — bukan
// password aslinya — tapi tetep: siapapun yang bisa buka file
// ini di server bisa liat hash-nya. Ini gate simpel buat nahan
// user random, bukan proteksi tingkat backend beneran.
//
// Password default sekarang: admin123  <-- GANTI INI SEKARANG.
//
// Cara ganti password:
// 1. Buka index.html di browser, tekan F12 buat buka console
// 2. Paste baris ini, ganti "passwordBaruLo" sesuai mau lo, terus Enter:
//
//    crypto.subtle.digest('SHA-256', new TextEncoder().encode('passwordBaruLo'))
//      .then(b => console.log([...new Uint8Array(b)].map(x => x.toString(16).padStart(2,'0')).join('')))
//
// 3. Copy hasil hash (string panjang) yang muncul di console
// 4. Paste ganti nilai ADMIN_PASSWORD_HASH di bawah ini
// ============================================
const ADMIN_PASSWORD_HASH = "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9";
