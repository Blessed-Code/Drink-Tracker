// let inputUsia = "Adult"; ///// ini buat INPUT usia !!!!!

function totalPerhari(input) {
  let result = 0;

  if (input === "Dewasa") {
    result = 2000;
  } else {
    result = 1000;
  }

  let targetMinum = document.getElementById("targetMinum");
  targetMinum.innerHTML = result + " ml";
}

let indexUrl = document.URL.indexOf('=') + 1;
let umur = document.URL.slice(indexUrl);
console.log(umur);
totalPerhari(umur);

// console.log(totalPerhari(inputUsia));

// let totalAirPerHari = totalPerhari(inputUsia) /// ini untuk OUTPUT kebutuhan total per hari !!!!


//============================================


// let inputMinum = {jam:"11.00",minum: 1000}  // ini INPUT untuk minum ditambakah ke array !! INPUT minum = [jam, jumlah minum mililiter] !!!!
// // [ ["11.00", 1000],  ["13.00", 900], ["15.00", 900]]

// function historyMinum(obj){
//     let result = []

//     result.push(obj)
//     return result
// }

// // console.log(historyMinum(inputMinum))
// let outputArrHistoryMinum = historyMinum(inputMinum) // ini untuk OUTPUT history minum !!!!

// {jam: 11:00
//air: 1000}


// bisa 2 pilihan output
// sudahminum: 4500 \\ kebutuhantoal == 10000
// kurangnyahari ini = 10000-4500 \\ kebutuhal total == 10000


// function kurangHariIni(kebutuhan, arrHistory){

//     let result = 0

//     // console.log(kebutuhan,arrHistory)
//     let airHariIni = 0

//     for(let i=0;i<arrHistory.length;i++){
//         airHariIni += arrHistory[i].minum
        
//     }

//     result = kebutuhan - airHariIni
//     return result

// }

// let outputHistoryCoba = [{ jam: '13.00', minum: 900 }, { jam: '15.00', minum: 800 },{ jam: '17.00', minum: 1200 }]

// console.log(kurangHariIni(totalAirPerHari, outputHistoryCoba))
// console.log(kurangHariIni(totalAirPerHari, outputArrHistoryMinum))

// let outputKurangMinumHariIni = kurangHariIni(totalAirPerHari, outputArrHistoryMinum) /// ini untuk OUTPUT kekurangan air hari ini !!!!

function tambah(angka){
    let progressMinum = document.getElementById("progressMinum");
    
    const arrProgress = progressMinum.innerHTML.split(" ");

    let targetMinum = document.getElementById("targetMinum")
    const arrTarget = targetMinum.innerHTML.split(" ");
    // console.log(Number(arrProgress[0]), Number(arrTarget[0]))
    if ((Number(arrProgress[0])+angka) >= Number(arrTarget[0])){
      alert('Kamu sudah mencapai target minum hari ini !!')
    }

    progressMinum.innerHTML = (Number(arrProgress[0]) + angka) + " ml";
  
    let historyTable = document.getElementById("historyTable");
    let newRowMinum = document.createElement("tr");
    let airDiminum = document.createElement("td");
    airDiminum.innerHTML = angka;

    let newButton = document.createElement("button");
    newButton.innerHTML = "Delete";
    newButton.type = "submit";
    newButton.onclick = function () {
        let progressMinum = document.getElementById("progressMinum");
        const arrProgress = progressMinum.innerHTML.split(" ");
        progressMinum.innerHTML = (Number(arrProgress[0]) - angka) + " ml";
        newRowMinum.remove();
    };

    let tdButton = document.createElement("td");
    tdButton.append(newButton);

    newRowMinum.append(airDiminum, tdButton);

    historyTable.append(newRowMinum);
}

function tambahMinum250() {
    tambah(250)
}

function tambahMinum500() {
    tambah(500)
}

function tambahMinum1000() {
    tambah(1000)
}

function tambahMinumManual() {
  let value = Math.abs(Number(document.getElementById("inputManual").value)); 
  
  tambah(value)
}

function showGantiTarget() {
  var gntiTrgtDiv = document.getElementById("iptGantiTrgtDiv");
  if (gntiTrgtDiv.style.display === "none") {
    let targetMinum = document.getElementById("targetMinum");
    const arrTargetMinum = targetMinum.innerHTML.split(" ");
    let inputGantiTarget = document.getElementById("iptGantiTrgt");
    inputGantiTarget.value = Number(arrTargetMinum[0])
    gntiTrgtDiv.style.display = "block";
  } else {
    gntiTrgtDiv.style.display = "none";
  }
}

function updateTarget(){
  let targetMinum = document.getElementById("targetMinum");
  let inputGantiTarget = document.getElementById("iptGantiTrgt");
  var gntiTrgtDiv = document.getElementById("iptGantiTrgtDiv");
  if (!inputGantiTarget.value) {
    inputGantiTarget.value = 0
  }
  targetMinum.innerHTML = inputGantiTarget.value.toString() + " ml"
  gntiTrgtDiv.style.display = "none";
}