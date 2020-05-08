var json = {
    arreglos: {
      uno: [2, 4, 5, 8, 6, 9, 10],
      dos: [
        { valor: 1 },
        { valor: 4 },
        { valor: 2 },
        { valor: 24 },
        { valor: 100 },
        { valor: 23 },
        { valor: 45 },
        { valor: 23 },
      ],
    },
  };
  
  
  //Arreglo 1.1
  //Multiplicar x 2
  var uno1 = json.arreglos.uno.map((item, index, arreglos) => {
    return item * 2
  }
  );
  console.log("====== 1.1 Multiplicación x 2 ======")
  console.log(uno1)
  
  
  //Arreglo 1.2
  //Filtrar números pares
  var uno2 = json.arreglos.uno.filter((item, valor, arreglos) => {
      return item === 2 | item === 4 | item === 6 | item === 8 | item === 10
    });
  console.log("====== 1.2 Pares ======")
  console.log(uno2)
  
  
  //Arreglo 2.1
  //Filtro números impares
  var dos1 = json.arreglos.dos.filter((item, valor, arreglos) => {
      return item.valor === 1 | item.valor === 23 | item.valor === 45;
    });
  console.log("====== 2.1 Impares ====== ")
  console.log(dos1)
  
  
  //Arreglo 2.2
  //Sumar + 2
  var dos2 = json.arreglos.dos.map((item, index, arreglos) => {
      return item.valor + 2
    });
  console.log("====== 2.2 Suma + 2 ======")
  console.log(dos2)