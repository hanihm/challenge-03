function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  //Menggunakan for
  // for (let i = 0; i < result.length; i++){
  //   for (let k = 0; k < result.length - 1; k++){
  //     //membandingkan elemen yang berdekatan
  //     if (result[k].year < result[k + 1].year) {
  //       let storage = result[k];
  //       result[k] = result[k + 1];
  //       result[k + 1] = storage;
  //     }
  //   }
  // }

  //Menggunakan sort
result.sort((i, k) => { return k.year - i.year });


  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
