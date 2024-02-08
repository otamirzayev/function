// FUNCTION
//1)a sonning ixtiyoriy n-darajasini hisoblovchi power(a, n) nomli funksiya hosil qiling. QY
/*
function power(a, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= a;
  }
  return result;
}
console.log(power(3, 5));
*/

//2)A va B sonlari orasidagi sonlar yig'indisini hisoblovchi sumRange(A, B) nomli funksiya hosil qiling. Agar A > B bo'lsa, funksiya 0 qiymat qaytaradi. QY
//sumRange(8, 10) => 27
/*
function sumRange(A, B) {

  if (A > B) {
    return 0;
  }
  let sum = 0;
  for (let i = A; i <= B; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumRange(8, 10)); 
*/

//3) Butun sonning juft - toqligini aniqlovchi isEven(K) funksiyasini hosil qiling. Funksiya K juft son bo'lsa - true, aks xolda false qiymat qaytarsin. QY
//isEven(10) => true

/*
function isEven(K) {
  if (K % 2 == 0) {
    console.log("true");
  } else console.log("Folse");
}
isEven(10);
*/

//4)Kiritilgan 3 ta a, b, c sonlarning eng kichigini, o’rtachasini va eng kattasini chiqaruvchi sortABC(a, b, c) nomli dastur tuzing. QYM
//sortABC(10, 5, 8) => 5, 8, 10

/*
function sortABC(a, b, c) {
  let min, mid, max;

  min = Math.min(a, b, c);
  max = Math.max(a, b, c);

  if (a !== min && a !== max) {
    mid = a;
  } else if (b !== min && b !== max) {
    mid = b;
  } else {
    mid = c;
  }
  console.log(`${min}, ${mid}, ${max}`);
}
sortABC(10, 5, 8);
*/

//5)  isPowerN(K, N) mantiqiy funksiyasini hosil qiling. (K > 0). Agar K soni N soninig biror darajasi bo'lsa - true, aks xolda false qiymat qaytarilsin.

/*
function isPowerN(K, N) {
  if (K <= 0 && N <= 0) {
    return false;
  }

  let couter = 1;
  while (couter < K) {
    couter *= N;
  }
  return couter == K;
}
console.log(isPowerN(8, 2));
*/

//6)  monthDays funksiyasidan foydalangan xolda, prevDate (D, M, Y) funksiyasini hosil qiling. Funksiya berilgan sanadan oldingi sanani aniqlasin, D - kun, Y - yil, M - oyini qaytarsin. QY
//prevDate (10, 3, 2022) => 10.03.2022
/*
function prevDate(D, M, Y) {
  console.log(`${D}.${M}.${Y}`);
}
prevDate(14, 09.2005);
*/

//7)  Doiraning yuzini hisoblovchi areaCircle(R) nomli funksiya hosil qiling. Doiraning yuzi S = π*R^2 orqali hisoblanadi. QY

/*
function areaCircle(R) {
  const pi = Math.PI;
  const S = pi * R * R;
  return S;
}

console.log(areaCircle(5));
*/

//8)  Haqiqiy sonning ishorasini aniqlovchi sign(n) nomli funksiya hosil qiling. Funksiya argumenti noldan kichik bo'lsa -1; noldan katta bo'lsa 1; nolga teng bo'lsa 0 qiymat qaytarsin. QY
// sign(10) => 1

/*
function sign(n) {
  if (n > 0) {
    return 1;
  }
  if (n < 0) {
    return -1;
  } else {
    return 0;
  }
}
console.log(sign(10));
*/
