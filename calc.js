fetch("https://happyapi.fr/api/devises")
  .then((donneesTaux) => donneesTaux.json())
  .then((tauxDevise) => {
    let tableau = [];
    let maVariable = tauxDevise.result;
    let maVariable2 = maVariable.result;
    let maVariable3 = maVariable2.devises;
    let table = document.querySelector("table");
    let montant = document.getElementById("montant");

    tableau.push(maVariable3);

    let selectBalize = document.getElementsByTagName("tr");
    for (let i = 0; i < maVariable3.length; i++) {
      let tr = document.createElement("tr");
      table.appendChild(tr);

      let intitule = [
        "Dollar des États-Unis",
        "Yen",
        "Len",
        "Couronne tchèque",
        "Couronne danoise",
        "Livre sterling",
        "Forint hongrois",
        "Złoty polonais",
        "Leu roumain",
        "Couronne suédoise",
        "Franc suisse",
        "Couronne islandaise",
        "Couronne norvégienne",
        "Livre turque",
        "Dollar australien",
        "Réal brésilien",
        "Dollar canadien",
        "Yuan chinois",
        "Dollar de Hong Kong",
        "Rupiah indonésienne",
        "Shekel israélien",
        "Roupie indienne",
        "Won sud-coréen",
        "Peso mexicain",
        "Ringgit malaisien",
        "Dollar néo-zélandais",
        "Peso philippin",
        "Dollar de Singapour",
        "Baht thaïlandais",
        "Rand sud-africain",
      ];

      const myElements =
        intitule[i] +
        " => " +
        " " +
        maVariable3[i].codeISODevise +
        " => " +
        " Taux " +
        maVariable3[i].taux;
      selectBalize[i].textContent = myElements;

      selectBalize[i];
      selectBalize[i].addEventListener("mouseover", () => {
        selectBalize[i].style.backgroundColor = "blue";
        selectBalize[i].style.color = "white";
        selectBalize[i].style.fontSize = "20px";
      });
      selectBalize[i].addEventListener("mouseout", () => {
        selectBalize[i].style.backgroundColor = "";
        selectBalize[i].style.color = "black";
        selectBalize[i].style.fontSize = "";
      });

      montant.addEventListener("input", (e) => {
        selectBalize[i].addEventListener("click", () => {
          const inputValue = e.target.value;
          const regex = /[^0-9]/g;
          const sanitizedValue = inputValue.replace(regex, "");
          // montant.style.width = "500px";

        

          if (sanitizedValue === "") {
            montant.value = "Veuillez taper un chiffre s.v.p";
          } else {
            montant.value = sanitizedValue;
            selectBalize[i].style.backgroundColor = "red";
            let result = e.target.value * maVariable3[i].taux;
            let resultat = document.querySelector(".resultat");
            resultat.innerHTML =
              result.toFixed(2) + " " + maVariable3[i].codeISODevise;
            resultat.classList.add("show");
          }
          selectBalize[i].addEventListener("click", () => {
            // ...
            resultat.innerHTML = ""; // Réinitialise la valeur de la case résultat
            resultat.classList.remove("show"); // Cache la case résultat
            // ...
          });
          montant.addEventListener("click", () => {
            if (montant.value === "Veuillez taper un chiffre s.v.p") {
              montant.value = "";
            } else {
              resultat.classList.remove("show"); // Cache la case résultat
            }
          });
          
          

          montant.addEventListener("click", () => {
            if (montant.value === "Veuillez taper un chiffre s.v.p") {
              montant.value = "";
            }
          });
        });
      });
    }
  });
