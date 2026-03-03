const ans = [
    "Cl₂",
    "NO₂",
    "Cl₂",
    "HF",
    "HBr",
    "H₂S",
    "CO₂",
    "SO₂",
    "NO₂",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
]

let showed = Array.from({ length: 100 }, () => []);

function clicked(id){
    let element = document.getElementById(id);
    if (showed[id-1] == false){
        element.textContent = id + ". " + ans[id-1];
        showed[id-1] = true;
    } else {
        element.textContent = id + ". ";
        showed[id-1] = false;
    }
    console.log(id + ans[id - 1] + showed[id-1]);
}

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  clicked(keyName)
});