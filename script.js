function convert() {
    const rupiah = document.getElementById('rupiah').value;
    const exchangeRate = 0.000066; // Contoh nilai tukar Rupiah ke Dolar
    const result = rupiah * exchangeRate;
    document.getElementById('result').innerText = `Hasil: $${result.toFixed(2)}`;
}
