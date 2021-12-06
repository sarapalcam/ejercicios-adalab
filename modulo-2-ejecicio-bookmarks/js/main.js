"use strict";

/*Listado de variables*/

const menuDropdown = document.querySelector(".js-menudropdown");
const menuDataActions = document.querySelector(".js-data-actions__add");
const dataList = document.querySelector(".js-data-list");
const dataTypeView = document.querySelector(".js-type-of-view");
const inputSearchDesc = document.querySelector(".js-input-search");
inputSearchDesc.value = " ";
const inputSearch = inputSearchDesc.value;

/*Variable en la que se añadirán todos los datos de la lista de enlaces*/

let html = " ";

/*Mostrar los menús desplegables*/

menuDropdown.classList.remove("collapsed");
menuDataActions.classList.remove("hidden");

/*Datos del enlace 1: se ha añadido un condicional para que se marque como leído o no en función del valor booleano de bmk1Seen, y otro para que aparezca el mensaje "No tiene" si no hay etiquetas en el enlace*/

const bmk1Url =
  "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion";
const bmk1Desc = "JS en los materiales de Adalab";
const bmk1Seen = true;
const bmk1Tags1 = "";
let bmk1Tags2 = "";

if (bmk1Desc.includes(inputSearch)) {
  html += `<article class="data__item">
<p class="item__url">
  <a href=${bmk1Url.replace(
    "https://",
    ""
  )} target="_blank" rel="noopener noreferrer">
  ${bmk1Url.replace("https://", "")}
  </a>
</p>`;
  if (bmk1Seen === true) {
    html += `<p class="item__seen">
  <input type="checkbox" checked name="item_imp_2" id="item_imp_2">
</p>`;
  } else {
    html += `<p class="item__seen">
  <input type="checkbox" name="item_imp_2" id="item_imp_2">
</p>`;
  }
  html += `<p class="item__desc">${bmk1Desc}</p>`;
  if (bmk1Tags1 === "" && bmk1Tags2 === "") {
    html += `
    <ul class="item__tags">
    <li>No tiene</li>
  </ul>
  </article>`;
  } else {
    html += `
<ul class="item__tags">
  <li class="item__tag">${bmk1Tags1}</li><li class="item__tag">${bmk1Tags2.toLowerCase()}</li>
</ul>
</article>`;
  }
}

/*Datos del enlace 2: se ha añadido un condicional para que se marque como leído o no en función del valor booleano de bmk2Seen, y otro para que aparezca el mensaje "No tiene" si no hay etiquetas en el enlace*/

const bmk2Url =
  "https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/";
const bmk2Desc = "Ideas de proyectos JS";
const bmk2Seen = true;
const bmk2Tags1 = "";
const bmk2Tags2 = "";

if (bmk2Desc.includes(inputSearch)) {
  html += `<article class="data__item">
<p class="item__url">
  <a href="${bmk2Url.substr(
    8
  )}" target="_blank">thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/</a></a></p>`;
  if (bmk2Seen === true) {
    html += `<p class="item__seen">
<input type="checkbox" checked name="item_imp_1" id="item_imp_1">
</p>`;
  } else {
    html += `<p class="item__seen">
<input type="checkbox" name="item_imp_1" id="item_imp_1">
</p>`;
  }
  html += `<p class="item__desc">${bmk2Desc}</p>`;
  if (bmk2Tags1 === "" && bmk2Tags2 === "") {
    html += `
  <ul class="item__tags">
  <li>No tiene</li>
</ul>
</article>`;
  } else {
    html += `
<ul class="item__tags">
<li class="item__tag">${bmk2Tags1}</li><li class="item__tag">${bmk2Tags2.toLowerCase()}</li>
</ul>
</article>`;
  }
}

/*Datos del enlace 3: se ha añadido un condicional para que se marque como leído o no en función del valor booleano de bmk3Seen, y otro para que aparezca el mensaje "No tiene" si no hay etiquetas en el enlace*/

const bmk3Url =
  "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web";
const bmk3Desc = "HTML en los materiales de Adalab";
const bmk3Seen = true;
let bmk3Tags1 = "";
let bmk3Tags2 = "";

if (bmk3Desc.includes(inputSearch)) {
  html += `<article class="data__item">
<p class="item__url">
  <a href=${bmk3Url.slice(
    8
  )} rel="noopener noreferrer">books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web</a>
</p>`;
  if (bmk3Seen === true) {
    html += `<p class="item__seen">
  <input type="checkbox" checked name="item_imp_2" id="item_imp_2">
</p>`;
  } else {
    html += `<p class="item__seen">
  <input type="checkbox" name="item_imp_2" id="item_imp_2">
</p>`;
  }
  html += `<p class="item__desc">${bmk3Desc}</p>`;
  if (bmk3Tags1 === "" && bmk3Tags2 === "") {
    html += `
<ul class="item__tags">
<li>No tiene</li>
</ul>
</article>`;
  } else {
    html += `
<ul class="item__tags">
<li class="item__tag">${bmk3Tags1}</li><li class="item__tag">${bmk3Tags2.toLowerCase()}</li>
</ul>
</article>`;
  }
}

/*Condicional para cambiar el tipo de vista del listado de enlaces*/

if (dataTypeView.classList.contains(".tableview")) {
  dataTypeView.classList.toggle(".listview");
} else if (dataTypeView.classList.contains(".listview")) {
  dataTypeView.classList.toggle(".tableview");
}

/*Añadir los datos del listado*/

dataList.innerHTML = html;
