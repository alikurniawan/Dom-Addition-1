
function hitungHasil() {
  const input_1 = document.getElementsByName('input_1')[0].value;
  const input_2 = document.getElementsByName('input_2')[0].value;

  let result = Number(input_1) + Number(input_2);

  document.getElementById('hasilAkhir').value = result;

}
