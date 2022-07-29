function float(){
    var N1 = parseInt(document.maymen.N1.value);
    var N2 = parseInt(document.maymen.N2.value);

    if(N1<N2)// oirganiza el caso donde el numero 1 es menor que el numero 2 
	{
        document.write(' <br>el numero mayor es:'+N2);//muestra los numeros organizados de mayor a menor 
        document.write('<br>el numero menor es:'+N1);
	}
	if (N1>N2)// oirganiza el caso donde el numero 1 es mayor que el numero 2 
	{
        document.write(' <br> el numero menor es:'+N2);//muestra los numeros organizados de mayor a menor 
        document.write(' <br>el numero mayor es:'+N1);
	}
	if(N1==N2)// oirganiza el caso donde los  dos numeros son iguales 
	{
        document.write(' <br>los numeros son iguales:');	//muestra que son iguales 
	}
    }