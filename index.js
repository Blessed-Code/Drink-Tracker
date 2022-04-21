let inputUsia = "Adult"; ///// ini buat INPUT usia !!!!!

function totalPerhari(input) {
  let result = 0;

  if (input === "Adult") {
    result = 10000;
  } else {
    result = 7500;
  }

  return result;
}

// console.log(totalPerhari(inputUsia));

let totalAirPerHari = totalPerhari(inputUsia) /// ini untuk OUTPUT kebutuhan total per hari !!!!


//============================================


let inputMinum = ["11.00", 1000]  // ini INPUT untuk minum ditambakah ke array !! INPUT minum = [jam, jumlah minum mililiter] !!!!
// [ ["11.00", 1000],  ["13.00", 900], ["15.00", 900]]

function historyMinum(arr){
    let result = []

    result.push(arr)
    return result
}

// console.log(historyMinum(inputMinum))
let outputArrHistoryMinum = historyMinum(inputMinum) // ini untuk OUTPUT history minum !!!!


// bisa 2 pilihan output
// sudahminum: 4500 \\ kebutuhantoal == 10000
// kurangnyahari ini = 10000-4500 \\ kebutuhal total == 10000


function kurangHariIni(kebutuhan, arrHistory){

    let result = 0

    // console.log(kebutuhan,arrHistory)
    let airHariIni = 0

    for(let i=0;i<arrHistory.length;i++){
        airHariIni += arrHistory[i][1]
        
    }

    result = kebutuhan - airHariIni
    return result

}

// let outputHistoryCoba = [["11.00", 1000],["13.00", 900],["16.00", 2000],["19.00", 1500]]

// console.log(kurangHariIni(totalAirPerHari, outputHistoryCoba))
// console.log(kurangHariIni(totalAirPerHari, outputArrHistoryMinum))

let outputKurangMinumHariIni = kurangHariIni(totalAirPerHari, outputArrHistoryMinum) /// ini untuk OUTPUT kekurangan air hari ini !!!!

