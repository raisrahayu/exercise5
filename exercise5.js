console.log("Rais Rahayu");

// No.1 Write a function to get the lowest, highest and average value in the array (with and without sort function).
console.log('Soal No.1');
const nomerArray = [4, 8, 11, 1];

function tanpaSort(array) {
    let terendah = array[0];
    let tertinggi = array[0];
    let jumlah = array[0];
    for(let i = 0; i < array.length; i++) {
        let hasil = array[i];
        if(hasil < terendah) {
            terendah = hasil;
        }
        if(hasil > tertinggi) {
            tertinggi = hasil;
        }
        jumlah += hasil;
    }
    let ratarata = jumlah / array.length;
    return `Terendah  = ${terendah}
Tertinggi = ${tertinggi}
Rata-rata = ${ratarata}`
  
};

let sortArray = tanpaSort(nomerArray);
console.log(`Nilai sorting dari ${nomerArray} 
${sortArray}`);
console.log("Dengan Method Sorting"); // terendah = 1, tertinggi = 11, rata-rata = 6

// Dengan Method Sorting
function denganSorting(array) {
    const arrayTerurut = array.sort((a, b) => a - b);
    const arrayTerendah = arrayTerurut[0];
    const arrayTertinggi = arrayTerurut[arrayTerurut.length - 1];
    const nilaiJumlah = array.reduce((a,b) => a + b);
    const nilaiRataRata = nilaiJumlah / array.length;
    return `Terendah    = ${arrayTerendah}
Tertinggi   = ${arrayTertinggi}
Rata - rata = ${nilaiRataRata}`
}

let sortArray2 = denganSorting(nomerArray);
console.log(sortArray2); // terendah = 1, tertinggi = 11, rata-rata = 6

console.log("----------------------------");

// No.2 Write a function that takes an array of words and returns a string by concatenating the words inthe array, separated by commas and - the last word - by an 'and'.
console.log("Soal No.2");
const rubahArray = ["kucing", "kuda", "anjing", "sapi", "banteng"];

function arrayKeKalimat(array) {
    const bukanArray = "Ini bukan array";
    const panjangArray = array.length;
    if(!Array.isArray(array)) {
        return bukanArray;
    } 
    else if (panjangArray === 0) {
        return ` `;
    }
    else if (panjangArray === 1) {
        return `array[0]`;
    }
    else if (panjangArray === 2) {
        return `${array[0]} dan ${array[1]}`;
    }
    else {
        let arrayTerakhir = array[panjangArray - 1]
        let arrayLain = array.slice(0, panjangArray - 1).join(", ");
        return `${arrayLain}, dan ${arrayTerakhir}`
    }
}

console.log(arrayKeKalimat(rubahArray)); // kucing, kuda, anjing, sapi, dan banteng

console.log("----------------------------");
// No.3 Write a function to split a string and convert it into an array of words
console.log("Soal No.3");

function ubahKeArray(kataString) {
    let kataKeArray = kataString.split(" ")
    return kataKeArray

}

const kataYangDiubah = "Hari Ini Cerah";
const jadiArray = ubahKeArray(kataYangDiubah);
console.log(jadiArray); // ["Hari", "Ini", "Cerah"]

console.log("----------------------------");

// No.4 Write a function to calculate each element in the same position from two arrays of integer
console.log("Soal No.4");

function sumArray(array1, array2) {
    if( !Array.isArray(array1) || !Array.isArray(array2) || array1.length !== array2.length ) {
        return `Data harus berupa array dan panjang array harus sama`;
    }
    const hasilJumlah = [];
    for(let i = 0; i < array1.length; i++) {
        const jumlah = array1[i] + array2[i]
        hasilJumlah.push(jumlah)
    }
    return hasilJumlah
    
}

const array1 = [13, 8, 100];
const array2 = [9, 7, 5];
const hasil = sumArray(array1, array2);
console.log(hasil);

console.log("----------------------------");
// No.5 Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
console.log("Soal No.5");

function pushArray(array, pushData) {
    if ( !Array.isArray(array)) {
        return `Ini bukan Array`;
    }
    if ( array.includes(pushData)) {
        return array;
    } else {
        return [...array, pushData];
    }
}

let array3 = [1, 6, 9, 5];
let tambahArray = 7;
let arraySekarang = pushArray(array3, tambahArray);
console.log(arraySekarang); //[1, 6, 9, 5, 7]

console.log("----------------------------");
// No.6 Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
console.log("Soal No.6");

let arrayOddEven = [1, 4, 3, 7, 10, 15, 22, 23, 27, 32, 34];

function rmvOdd(array) {
    const arrayGenap = array.filter((num) => num % 2 === 0);
    return arrayGenap
    
}
const evenArray = rmvOdd(arrayOddEven);
console.log(evenArray); // [4, 10, 22, 32, 34]


