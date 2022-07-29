function float(){ /*UTLIZAMOS EL FLOAT PARA PODER UTILIZAR NUMERO DECIMALES */
    var a = parseInt(document.ernum.a.value);
    var b = parseInt(document.ernum.b.value);/*ACA SE PASAN A DEFINIR LAS VARIABLES  */
    var c = parseInt(document.ernum.c.value);
   
    if(a<b & a<c ) /* hace el recorrido  donde (a) es la menor */
    {
        if(b<c){ /*hace el recorrido donde b es menor que c*/
      
        
       document.write(' <br> menor:'+a); // muestra los resultados 
       document.write(' <br>medio:'+b);
       document.write(' <br>mayor:' +c);
          }
          else{
             document.write(' <br>menor:' +a); // muestra los resultados 
           document.write(' <br>medio:' +c);
           document.write(' <br>mayor:' +b);
          }
    }
    
    if(b<a & b<c) /* hace el recorrido  donde (b) es la menor  */
    {
        if(a<c) /* hace el recorrido  donde (a) es menor que (c) */
        {	document.write(' <br> menor:' +b); // muestra los resultados 
           document.write(' <br>medio:' +a);
           document.write(' <br>mayor:' +c);
            
        }
        else{
             document.write(' <br>menor:' +b); // muestra los resultados 
           document.write(' <br>medio:' +c);
           document.write(' <br>mayor:' +a);
          }
          
        //
    }
    
    if(c<a & c<b ) /* hace el recorrido  donde (c) es menor que (a) */
    {
        if(a<b) /* hace el recorrido  donde (a) es menor que (b) */
        {
       document.write(' <br>menor:' +c); //muestra los resultados 
       document.write(' <br>medio:' +a);
       document.write(' <br>mayor:' +b);
          }
          else{
             document.write(' <br>menor:' +c); //muestra los resultados 
           document.write(' <br>medio:' +b);;
           document.write(' <br>mayor:' +a);
          }
    } // siguen los iguales 
    if(a==b & a==c )  //donde los resultados son iguales 
    {
        if(b==c){
      
        
       document.write(' <br>igual:' +a); //muestra lis resultados 
       document.write(' <br>igual:' +b);
       document.write(' <br>igual:' +c);
          }
          else{
             document.write(' <br>igual:' +a);
           document.write(' <br>igual:' +c);
           document.write(' <br>igual:' +b);
          }
    }
    if(a==b & a!=c )
    {
        if(b==c){
      
        
       document.write(' <br>igual:' +a);
       document.write(' <br>igual:' +b);
       document.write(' <br>diferente:' +c);
          }
          else{
             document.write(' <br>igual:' +a);
           document.write(' <br>igual:' +c);
           document.write(' <br>diterente:' +b);
          }
    }
    
}