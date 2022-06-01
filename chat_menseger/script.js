function mandaZap(elemento) {
  let texto = elemento.firstElementChild.innerText;
  let numero = (85985858812);
  let zapLink = `https://api.whatsapp.com/send?phone=55${numero}&text=${texto}`;

  window.open(zapLink);
}