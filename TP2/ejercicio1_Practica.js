//ejercicio 1 

    var verdadero, char;
    var valores = [verdadero, false, 2, "hola", "mundo", 3, char]
    
  

    var valorresStr = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof valores[i] === "string") {
          valores.push (valores[i])  
        }
        
    }
    console.log ("2, Imprimir los elementos de menores a mayor cantidad de letra: " + 
      valorresStr.sort(function(a,b){
  
        return a-b;
        
      }));
