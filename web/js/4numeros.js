/*procesa los numeros */ 
function ejecutar () {
    var a = parseInt(document.form.a.value);
    var b = parseInt(document.form.b.value);
    var c = parseInt(document.form.c.value);
    var d = parseInt(document.form.d.value);
   
/*unirlas y colocar saltos de linea n */ 
    if(a==b && b==c && c==d) {
     window.alert('  todos son iguales');	
    }
    if(a==b && b==c && c>d) { 
     window.alert('  el primero, segundo y tercero son mayores:'+c);
     window.alert('  el cuarto es el menor:'+d);
    }
    if(a==b && b==c && c<d) { 
     window.alert('  el cuarto es el mayor:'+d); 
     window.alert('  el primero, segundo y tercero son menores:'+c);
     window.alert('  el primero y segundo son iguales mayores:'+a);
     window.alert('  el tercero y cuarto son iguales menores:'+c);
    }
    if(a==b && b<c && c==d){ 
     window.alert('  el tercero y cuarto son mayores iguales:'+c);
     window.alert('  el primero y segundo son menores iguales:'+a); 
    }
    if(a>b && b==c && c==d){
     window.alert('  el primero es el mayor:'+a);
     window.alert('   el segundo, tercera y cuarta son menores iguales:'+b);
    }
    if(a<b && b==c && c==d){ 
       window.alert('el segundo, tercero y cuarto son mayores:'+b);
       window.alert('  el primero es el menor:'+a);
    }
    if(a>b && b>c && c==d){ 
       window.alert('  el primero es el mayor:'+a); 
       window.alert('  el segundo es:'+b);
       window.alert('  tercero y cuarto son iguales menores:'+c);
    }
    if(a==b && b>c && c>d){
       window.alert('  el primero y segundo son mayores iguales:'+a); 
       window.alert('  el intermedio es:'+c);
       window.alert('  el menor es:'+d); 
    }
    if(a==b && b<c && c<d){
       window.alert('  el cuarto es el mayor:'+d); 
       window.alert('  el segundo es:'+c);
       window.alert('  el primero y segundo son menores iguales:'+a); 
    }
    if(a<b && b<c && c==d){
       window.alert('  el tercero y cuarto son mayores:'+c);
       window.alert('  el segundo es:'+b);
       window.alert('  el menor es :'+a); 
    }
    if(a>d && d>c && c==b){
       window.alert('  el primero es el mayor:'+a); 
       window.alert('  el intermedio  es :'+d); 
       window.alert('  el segundo y tercero son iguales menores:'+b);
    }
    if(a<b && b==c && c<d){
       window.alert('  el cuarto es el mayor:'+d);
      window.alert('  el segundo y tercero son iguales menores:'+b);
       window.alert('  el menor es:'+a);
    }
    if(a==d && d>c && c>b){
       window.alert('  el primero y cuarto son iguales mayores:'+a);
       window.alert('  el intermedio es'+c);
       window.alert('  el menor es:'+b);
    }
    if(c>b && b>d && d==a) {
       window.alert('  el tercero es mayor'+c);
       window.alert('  el intermedio es:'+b);
       window.alert('  el primero y el cuarto son menores iguales:'+d); 
    }
    if(a<c && c<b && b==d) {
       window.alert('  el segundo y cuarto son mayores iguales:'+b);
       window.alert('  el intermedio es:'+c);
       window.alert('  el menor es:'+a); 
    }
    if(a==c && c>b && b==d){
       window.alert('  el primero y el tercero son mayores iguales:'+a);
       window.alert('  el segundo y el cuarto son menores iguales:'+b);
    }
    if(a==c && c<b && b==d){
       window.alert('  el segundo y cuarto son mayores iguales:'+b);
       window.alert('  el primero y el tercero son menores iguales:'+a); 
    }
    if(a==d && d>b && b==c){
       window.alert('  el primero y cuarto son mayores:'+a); 
       window.alert('  el segundo y tercero son menores iguales:'+b);
    }
    if(a==d && d<b && b==c){
       window.alert('  el segundo y tercero son mayores iguales:'+b);
       window.alert('  el primero y cuarto son menores iguales:'+a); 
    }
    if(a==d && d<c && c<b){
       window.alert('  el mayor es:'+b);
       window.alert('  el intermedio es:'+c);
           window.alert('  el primero y el cuarto son menores iguales:'+a); 
    }
    if (a==b && b<d && d<c){
       window.alert('  el tercero es el mayor :'+c);
       window.alert('  el intermedio es:'+d); 
       window.alert('  el primero y segundo son menores iguales:'+a); 
    }
    if(a==b&& b>d&& d>c){
       window.alert('  el primero y el segundo son mayores:'+a); 
       window.alert('  el intermedio es:'+d); 
       window.alert('  el menor es :'+c);
    }
    if(a==b&& b==d&& d<c){
       window.alert('  el mayor es :'+c);
       window.alert('  el primero, segundo y cuarto son iguales menores:'+a); 
    }
    if(a==b&& b==d&& d>c){
       window.alert('  el primero, segundo y cuarto son mayores iguales:'+a); 
       window.alert('  el menor es:'+c);
    }
    if(a==c&& c==d&& d<b){
       window.alert('  el mayor es:'+b);
       window.alert('  el primero, tercero y cuarto son iguales menores:'+a); 
    }
    if(a==c&& c==d&& d>b){
       window.alert('  el primero, tercero y cuarto son mayores:'+a); 
       window.alert('  el menor es:'+b);
    }
    if(c>a&& a>b&& b==d){
       window.alert('  el tercero es mayor:'+c);
       window.alert('  el intermedio es :'+a); 
       window.alert('  el segundo y tercero son iguales:'+b);
    }
    if(b==d&& d>a&& a>c){
       window.alert('  el segundo y cuarto son mayores iguales:'+b);
       window.alert('  el intermedio es:'+a); 
       window.alert('  el menor es:'+c);
    }
    if(b>a&& a==d&& d>c){
       window.alert('  el mayor :'+b);
       window.alert('  el primero y el cuarto son iguales menores:'+a); 
       window.alert('  el menor es:'+c);
    }
    if(a>c&& c>b&& b==d){
       window.alert('  el mayor es:'+a); 
       window.alert('  el intermedio es:'+c);
       window.alert('  el segundo y cuarto son menores iguales:'+b);
    }
    if(a==d&& d>b&& b>c){
       window.alert('  el primero y cuarto son mayores:'+a); 
       window.alert('  el intermedio es:'+b);
       window.alert('  el menor es'+c);	
    }
    if(b>a&& a==c&& c>d){
       window.alert('  el mayor :'+b);
       window.alert('  el primero y el tercero son iguales menores:'+a); 
       window.alert('  el menor es:'+d); 
    }
    if(a==c&& c>d&& d>b){
       window.alert('  el primero y tercero son mayores:'+a); 
       window.alert('  el intermedio es:'+d); 
       window.alert('  el menor es:'+b);	
    }
    if(a==c&& c>b&& b>d){
       window.alert('  el primero y tercero son mayores:'+a); 
       window.alert('  el intermedio es:'+b);
       window.alert('  el menor es:'+d);	
    }
    if(d==c&& c>a&& a>b){
       window.alert('  el tercero y cuarto son mayores'+c);
       window.alert('  el intermedio es:'+a); 
       window.alert('  el menor es:'+b);
    }
    if(d>b&& b>a&& a==c){
       window.alert('  el mayor es:'+d); 
       window.alert('  el intermedio es:'+b);
       window.alert('  el primero y tercero son menores:'+a); 
    }
    if(b>d&& d>a&& a==c){
       window.alert('  el mayor es:'+b);
       window.alert('  el intermedio es:'+d); 
       window.alert('  el primero y tercero son menores:'+a); 
    }
    if(c>a&& a==b&& b>d){
       window.alert('  el mayor es:'+c);
       window.alert('  el primero y segundo son menores iguales:'+a); 
       window.alert('  el menor es:'+d); 
    }
    if(d>a&& a==b&& b>c){
       window.alert('  el mayor es:'+d); 
       window.alert('  el primero y segundo son menores iguales:'+a); 
       window.alert('  el menor es:'+c);
    }
    if(d>a&& a==c&& c>b){
       window.alert('  el mayor es:'+d); 
       window.alert('  el primero y tercero son menores iguales:'+a); 
       window.alert('  el menor es:'+b);
    }
    if(a>b&& b>c&& c>d){
       window.alert('  el primero es el mayor :'+a); 
       window.alert('  el segundo es:'+b);
       window.alert('  el tercero es :'+c);
       window.alert('  el menor es:'+d);  
    }
    if(a<b&& b<c&& c<d){
       window.alert('  el primero es el mayor :'+d); 
       window.alert('  el segundo es:'+c);
       window.alert('  el tercero es :'+b);
       window.alert('  el menor es:'+a);  
    }
    if(a>b&& b>d&& d>c){
       window.alert('  el mayor es:'+a); 
       window.alert('  el segundo es:'+b);
       window.alert('  el tercero es:'+d); 
       window.alert('  el menor es:'+c);
        

    }
    if(a>c&& c>d&& d>b){
       window.alert('  el mayor es:'+a);
    
       window.alert('  el segundo es'+c);
       window.alert('  el tercero es:'+d); 
       window.alert('  el menor es:'+b);
    }
    if(b>c&& c>d&& d>a){
       window.alert('  el mayor es:'+b);
       window.alert('  el segundo es'+c);
       window.alert('  el tercero es:'+d);
       window.alert('  el menor es:'+a);
    }
    if(a>d&& d>c&& c>b){
       window.alert('  el mayor es:'+a);
       window.alert('  el segundo es:'+d);
       window.alert('  el tercero es'+c);
       window.alert('  el menor es:'+b);
    }
    if(c>a&& a>d&& d>b){
       window.alert('  el mayor es'+c);
       window.alert('  el segundo es:'+a);
       window.alert('  el tercero es:'+d);
       window.alert('  el menor es:'+b);
    }
    if(c>d&& d>a&& a>b){
       window.alert('  el mayor es'+c);
       window.alert('  el segundo es:'+d);
       window.alert('  el tercero es:'+a);
       window.alert('  el menor es:'+b);
    }
    if(c>a&& a>b&& b>d){
       window.alert('  el mayor es'+c);
       window.alert('  el segundo es:'+a);
       window.alert('  el tercero es:'+b);
       window.alert('  el menor es:'+d);
    }
    if(c>b&& b>d&& d>a){
       window.alert('  el mayor es'+c);
       window.alert('  el segundo es:'+b);
       window.alert('  el tercero es:'+d);
       window.alert('  el menor es:'+a);
    }
    if(c>d&& d>b&& b>a){
       window.alert('  el mayor es'+c);
       window.alert('  el segundo es:'+d);
       window.alert('  el tercero es:'+b);
       window.alert('  el menor es:'+a);
    }
    if(d>a&& a>b&& b>c){
       window.alert('  el mayor es:'+d);
       window.alert('  el segundo es:'+a);
       window.alert('  el tercero es:'+b);
       window.alert('  el menor es'+c);
    }
    if(a>c&& c>b&& b>d){
       window.alert('  el mayor es:'+a);
       window.alert('  el segundo es'+c);
       window.alert('  el tercero es:'+b);
       window.alert('  el menor es:'+d);
    }
    if(d>a&& a>c&& c>b){
       window.alert('  el mayor es:'+d);
       window.alert('  el segundo es:'+a);
       window.alert('  el tercero es'+c);
       window.alert('  el menor es:'+b);
    }
    if(b>d&& d>a&& a>c){
       window.alert('  el mayor es:'+b);
       window.alert('  el segundo es:'+d);
       window.alert('  el tercero es:'+a);
       window.alert('  el menor es'+c);
    }
    if(d>b&& b>c&& c>a){
       window.alert('  el mayor es:'+d);
       window.alert('  el segundo es:'+b);
       window.alert('  el tercero es'+c);
       window.alert('  el menor es:'+a);
    }
    if(b>a&& a>d&& d>c){
       window.alert('  el mayor es:'+b);
       window.alert('  el segundo es:'+a);
       window.alert('  el tercero es:'+d);
       window.alert('  el menor es'+c);
    }
} 
