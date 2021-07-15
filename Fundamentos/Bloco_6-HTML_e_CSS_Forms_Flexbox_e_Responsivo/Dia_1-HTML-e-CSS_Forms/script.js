let estados = [
  "AC - Acre",
  "AL - Alagoas",
  "AP - Amapá",
  "AM - Amazonas",
  "BA - Bahia",
  "CE - Ceará",
  "DF - Distrito Federal",
  "ES - Espírito Santo",
  "GO - Goías",
  "MA - Maranhão",
  "MT - Mato Grosso",
  "MS - Mato Grosso do Sul",
  "MG - Minas Gerais",
  "PA - Pará",
  "PB - Paraíba",
  "PR - Paraná",
  "PE - Pernambuco",
  "PI - Piauí",
  "RJ - Rio de Janeiro",
  "RN - Rio Grande do Norte",
  "RS - Rio Grande do Sul",
  "RO - Rondônia",
  "RR - Roraíma",
  "SC - Santa Catarina",
  "SP - São Paulo",
  "SE - Sergipe",
  "TO - Tocantins",
];

const opcoes = document.getElementById('estados');
const listaDeEstados = document.getElementById('estados');

for (let index = 0; index < estados.length; index += 1) {
  const estado = document.createElement("option");
  estado.innerHTML = estados[index];
  listaDeEstados.appendChild(estado);
}

