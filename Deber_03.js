/*
* Deber 3
* usar un arreglo de json (nombre, edad, fechaNacimiento, Telf)
- callback crear UN USUARIO (JSON) -> buscar en si ya existe debe impirmir q ya existe y sino crearlo
- callback editar un usuario
- callback eliminar un usuario
- callback listar usuario
* @author Israel Quishpe
*/

var json = {
    arreglos: {
      persona: ["Israel", "24", "01/02/96", "0983209202"],
    },
  };
  
  
  function listarPersona(arreglo, m) {
    arreglo.forEach((usuario) => {
      console.log(usuario);
    });
    m({
      mensaje: "Usuarios",
    });
  }
  
  listarPersona(json.arreglos.persona, (respuestaMensaje) => {
    console.log(respuestaMensaje);
  });
  


  
  function anadirPersona(arreglo,nombre,edad,fecha,telefono,m){
      arreglo.push(nombre)  
      arreglo.push(edad)  
      arreglo.push(fecha)  
      arreglo.push(telefono)  
     
      m(
          {
          mensaje: 'Nueva Usuario Agregada',
          arreglo
      }
      )
  }
  
  var indice = json.arreglos.persona.indexOf("Jaime");
  if(indice !== -1){
    console.log("Este usuario ya se encuentra agregado");
  }else{
    anadirPersona(json.arreglos.persona, 'Crsitina','26','23/02/93','0960025004',(mensaje) =>{
      console.log(mensaje);
      
  })
  }
 

  
  function editarPersona(arreglo,nombre,edad,fecha,telefono,indice,indice2,indice3,indice4,m) {
  
    arreglo[indice] = nombre
    
    arreglo[indice2] = edad
    
    arreglo[indice3] = fecha
  
    arreglo[indice4] = telefono
    
    m({
      mensaje: "Usuario editado",
      arreglo,
    });
  }
  
  editarPersona(json.arreglos.persona, "Rosa",'40','28/10/79','099987412',0,1,2,3,(respuestaMensaje) => {
    console.log(respuestaMensaje);
  });
  
  
  
  
  function eliminarPersona(arreglo,nombre,edad,fecha,telefono,indice,indice2,indice3,indice4,m) {
  
    arreglo[indice] = nombre
    
    arreglo[indice2] = edad
    
    arreglo[indice3] = fecha
  
    arreglo[indice4] = telefono
    m({
      mensaje: "Uusario eliminado",
      arreglo,
    });
  }
  
  eliminarPersona(json.arreglos.persona, "",'','','',0,1,2,3,(respuestaMensaje) => {
    console.log(respuestaMensaje);
  });