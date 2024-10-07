const orang = {
    nama : "putri wahyuni",
    alamat : "bogor",
    usia : 20,
    jk : "perempuan",
    kendaraan : {
        mobil1 : "pajero",
        mobil2 : "lamborghini",
        motor : "harley",
        pesawat : "boeing"
    }
}

console.log(orang.nama);
console.log(orang.alamat);
console.log(orang.usia);
console.log(orang.jk);

// Perbaikan penggunaan backticks untuk interpolasi string
console.log(`nama saya ${orang.nama}, saya berasal dari ${orang.alamat}, berjenis kelamin ${orang.jk} dan sekarang berusia ${orang.usia} tahun`);

// Perbaikan akses DOM menggunakan backticks dan perbaikan penggunaan `innerHTML`
document.getElementsByClassName("object")[0].innerHTML = `nama saya ${orang.nama}, saya berasal dari ${orang.alamat}, berjenis kelamin ${orang.jk} dan sekarang berusia ${orang.usia} tahun`;

console.log(orang.kendaraan.mobil1);
console.log(orang.kendaraan.mobil2);
console.log(orang.kendaraan.motor);
console.log(orang.kendaraan.pesawat);

const mahasiswa = {
    namaDepan: "putri",
    namaBelakang: "wahyuni",
    // Perbaikan penggunaan backticks di dalam method
    namaLengkap: function() {
        return `${this.namaDepan} ${this.namaBelakang}`; // penggunaan this untuk mengakses properti objek
    }
}

console.log(mahasiswa.namaLengkap());

function mahasiswaSIK(nama, kelas, angkatan) {
    this.nama = nama;
    this.kelas = kelas;
    this.angkatan = angkatan;
}

const putri = new mahasiswaSIK("putri wahyuni", "A", 2023);
const nuril = new mahasiswaSIK("nuril", "A", 2023);
const shaina = new mahasiswaSIK("shaina", "A", 2023);

console.log(putri.nama);
console.log(putri.kelas);
console.log(putri.angkatan);

console.log(nuril.nama);
console.log(nuril.kelas);
console.log(nuril.angkatan);
