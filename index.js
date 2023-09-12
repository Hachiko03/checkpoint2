const strings = ["casa", "albero", "tav", "macchina", "giornale"];

/* let stringsOrdered = strings.filter((el) => el.length > 5)
console.log(stringsOrdered); */

function mayorA5(arrayDeStrings) {
    let stringsOrdered = arrayDeStrings.filter((el) => el.length > 5);
    return stringsOrdered;
};

console.log (mayorA5(strings));