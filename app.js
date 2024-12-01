

// birinchi algarithm


alert("birinchi masala boshlandi");

let  a = +(prompt("1-tomon uzunligini kiriting (metr):"));
let b = +(prompt("2-tomon uzunligini kiriting (metr):"));

if ((a) && (b)) {
    let S = a * b;
  console.log("Yer maydonining yuzasi: " + S + " m²");

}
 
// birinchi algarithm end




// ikkinchi algarithm



alert("ikkinchi masala boshlandi");

const num1 =(prompt("1-sonni kiriting (0 ga teng emas):"));
const num2 = (prompt("2-sonni kiriting (0 ga teng emas):"));


if (num1 !== 0 && num2 !== 0 && (num1) && (num2)) {
 
  const sum = num1 + num2;

  
  const product = num1 * num2;

  
  const square1 = Math.pow(num1, 2);
  const square2 = Math.pow(num2, 2);

 
  console.log("Sonlarning yig'indisi: " + sum);
  console.log("Sonlarning ko'paytmasi: " + product);
  console.log("1-sonning kvadrati: " + square1);
  console.log("2-sonning kvadrati: " + square2);
} else {
  console.log("Iltimos, nolga teng bo'lmagan sonlarni kiriting!");
}

// ikkinchi algarithm end   









// // uchinchi algarithm    


alert("uchinchi masala boshlandi");

const  N1 = +(prompt("1-sonni kiriting (0 ga teng emas):"));
const N2 = +(prompt("2-sonni kiriting (0 ga teng emas):"));


if (N1 !== 0 && N2 !== 0 && (N1) &&(N2)) {
 
  const average = (N1 + N2) / 2;

 
  console.log("Ikki sonning o'rta arifmetigi: " + average);
 
} 

// uchinchi algarithm end










// tortinchi algaritm 


alert("tortinchi masala boshlandi");

let A = prompt(" 4-masala  sonini kiriting:");


if (A % 2 === 0) {
  console.log("A soni juft");
} else {
  console.log("A soni toq");
}

//  tortinchi algaritm end









// beshinchi algaritm


alert("beshinchi masala  boshlandi");

// Random A sonini olamiz
let R = prompt(" beshinchi masala son kiriting:"); // 0 dan 99 gacha random son

console.log(" R son: " + R);

// A sonini 5 ga bo'linishini tekshiramiz
if (R % 5 === 0 && R % 3 === 0) {
  console.log("R soni 3 va 5 ga bo'linadi!");
} else if (R % 5 === 0) {
  console.log("R soni 5 ga bo'linadi!");
} else if (R % 3 === 0) {
  console.log("R soni 3 ga bo'linadi!");
} else {
  console.log("R soni 3 va 5 ga bo'linmaydi!");
}






// // beshinchi algaritm end








// OLTINCHI ALGARITM


alert("oltinchi masala boshlandi");


let M = prompt("M sonini kiriting:");
let N = prompt("N sonini kiriting:");


function engYaqinSon(a, b) {
    const target = 5;  
    const distA = Math.abs(a - target); 
    const distB = Math.abs(b - target); 
    if (distA < distB) {
        console.log(`M soni (${a}) 5 ga yaqinroq.`);
    } else if (distB < distA) {
        console.log(`N soni (${b}) 5 ga yaqinroq.`);
    } else {
        console.log("M va N sonlari teng masofada.");
    }
}

engYaqinSon(Number(M  ), Number(N));












// oltinchi masala end











// yettinchi masala


alert("yetinchi masala boshlandi");

let numbers = [12, 45, 67, 89, 23]; 

console.log("Sonlar arrayi:", numbers);

  
let firstNumber = numbers[0]; 
let lastNumber = numbers[numbers.length - 1]; 


let sum = firstNumber + lastNumber;

console.log("Birinchi va oxirgi sonlarning yig'indisi:", sum);


// yettinchi masala end
 













   









