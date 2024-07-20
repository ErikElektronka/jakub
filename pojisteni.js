let pojisteni = [];
let showTable = new Boolean(false);

function vytvorPojisteneho() {
  let jmeno = document.getElementById('jmeno').value;
  let prijmeni = document.getElementById('prijmeni').value;
  let vek = document.getElementById('vek').value;
  let telefon = document.getElementById('telefon').value;

  pojisteni.push({ jmeno, prijmeni, vek, telefon });



  aktualizujSeznam();
  resetForm();
}

function aktualizujSeznam() {
  let tabulka = document.getElementById('myTable');
  tabulka.innerHTML = `
    <tr>
      <th>Jméno</th>
      <th>Příjmení</th>
      <th>Věk</th>
      <th>Telefon</th>
    </tr>
  `;

  pojisteni.forEach((osoba) => {
    tabulka.innerHTML += `
      <tr>
        <td>${osoba.jmeno}</td>
        <td>${osoba.prijmeni}</td>
        <td>${osoba.vek}</td>
        <td>${osoba.telefon}</td>
      </tr>
    `;
  });
}

function zobrazTabulku() {
  if(showTable == 0){
    document.getElementById("myTable").style.display = "table";
    showTable = new Boolean(true);
    document.getElementById('buttonShowTable').innerHTML = 'Skryj tabulku';
  } else {
    document.getElementById("myTable").style.display = "none";
    showTable = new Boolean(false);
    document.getElementById('buttonShowTable').innerHTML = 'Ukaž tabulku';
  }
}

function resetForm() {
  document.getElementById('jmeno').value = '';
  document.getElementById('prijmeni').value = '';
  document.getElementById('vek').value = '';
  document.getElementById('telefon').value = '';
}
