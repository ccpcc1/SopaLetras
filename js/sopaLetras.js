
var palabras=[]; // donde se almacenaran las palabras que el usuario ingreso.
var Letras=['a','b','c','d','h','i','o','e','u','s','t','p','q'] // array para rellenar espacios vacios
var longitudMatriz=10; //longitud maxima de la matriz
var matrizSopaLetras=[]; // matriz donde se almacenaran la sopa de letras
var contenedor=document.getElementById('contenedor');
for (var i = 0; i < longitudMatriz; i++)
{
	matrizSopaLetras[i]= new Array(longitudMatriz);	

}

function ingresarPalabra()
{
	let palabra=document.getElementById('Palabra');// si desea que en vez del input apareza un mensaje emergente comente esta linea y descomente la siguiente
	//let palabra=window.prompt("ingrese la palabra");
	if (palabra.length>0 || isNaN(palabra) || palabra<=longitudMatriz)
	{
		agregarPalabra(palabra.value);
		palabra.value="";
	}
	else
	{
		alert("por favor ingrese una palabra");
	}

}
function limpiar()
{
	for (var i = 0; i < longitudMatriz; i++)
	{
		matrizSopaLetras[i]= new Array(longitudMatriz);	
	}
	contenedor.innerHTML="";
	
}

function agregarPalabra(palabra)
{
	palabras.push(palabra);
}


function acomodarPalabras() // funcion para acomodar palabras en la matriz
{
	limpiar();	
	for (var i = 0; i < palabras.length; i++) 
	{
		let aleatorio= Math.floor(Math.random() *3);

		switch(aleatorio)
		{
			case 0:
					var resultado=false;
					resultado=(horizontal(palabras[i],i))?true:vertical(palabras[i],i);
					resultado=(resultado)?true:diagonal(palabras[i],i);
					resultado=(resultado)?true:diagonal(palabras[i],longitudMatriz);
					resultado=(resultado)?true:horizontal(palabras[i],i);
					resultado=(resultado)?true:vertical(palabras[i],longitudMatriz);
					resultado=(resultado)?true:horizontal(palabras[i],longitudMatriz);
					
					break;
			case 1:
					var resultado=false;
					resultado=(diagonal(palabras[i],i))?true:vertical(palabras[i],i);
					resultado=(resultado)?true:horizontal(palabras[i],i);
					resultado=(resultado)?true:diagonal(palabras[i],i);
					resultado=(resultado)?true:diagonal(palabras[i],longitudMatriz);
					resultado=(resultado)?true:horizontal(palabras[i],longitudMatriz);
					resultado=(resultado)?true:vertical(palabras[i],longitudMatriz);
					break;
			case 2:
					var resultado=false;
					resultado=vertical(palabras[i],i)?true:horizontal(palabras[i],i);
					resultado=(resultado)?true:vertical(palabras[i],i);
					resultado=(resultado)?true:diagonal(palabras[i],i);
					resultado=(resultado)?true:diagonal(palabras[i],longitudMatriz);
					resultado=(resultado)?true:vertical(palabras[i],longitudMatriz);
					resultado=(resultado)?true:horizontal(palabras[i],longitudMatriz);
					break;
			
		}
	}
	pintarSopaLetras();
}




function horizontal(palabra,posicion)
{
	var indice=0;
	let disponible=true;

	for (var i = 0; i < longitudMatriz; i++)
	{
		if (matrizSopaLetras[posicion][i]!=null)
		{
			if (((longitudMatriz-1)-(i+1))>palabra.length)
			{
				indice=i+1;
				disponible=true;
				break;
			}
			else
			{
				disponible=false;
			}
		}
	} 
	if (disponible)
		{
			if(Math.floor(Math.random() * 2)==0)
			{
				for (var i = 0; i < palabra.length; i++) 
				{
					console.log(palabra.charAt(i));
					matrizSopaLetras[posicion][i+indice]=palabra.charAt(i);
				}
			}
			else
			{
				for (var i = 0; i < palabra.length; i++) 
				{
					console.log(palabra.charAt(palabra.length-i));
					matrizSopaLetras[posicion][indice+i]=palabra.charAt(palabra.length-i);
				}
			}
			return true;
		}
	else
	{
		console.log("no se pudo pintar en la matriz");
		return false;
	}
}

function diagonal(palabra,posicion)
{
	var indice=0;
	let disponible=true;

	for (var i = posicion;i < longitudMatriz; i++)
	{
		if (matrizSopaLetras[i][i]!=null)
		{
			if (((longitudMatriz-1)-(i+1))>=palabra.length)
			{
				indice=i+2;
				disponible=true;
			}
			else
			{
				disponible=false;
			}
		}
	} 
	if (disponible)
		{
			if(Math.floor(Math.random() * 2)==0)
			{
				for (var i = 0; i < palabra.length; i++) 
				{
					console.log(palabra.charAt(i));
					matrizSopaLetras[indice+i][indice+i]=palabra.charAt(i);
				}
			}
			else
			{
				for (var i = 0; i < palabra.length; i++) 
				{
					console.log(palabra.charAt(palabra.length-i-1));
					matrizSopaLetras[indice+i][indice+i]=palabra.charAt(palabra.length-i-1);
				}
			}
			return true;
		}
	else
	{
		console.log("no se pudo pintar en la matriz");
		return false;
	}
}



function vertical(palabra,posicion)
{
	var indice=0;
	let disponible=true;

	for (var i = 0; i < longitudMatriz; i++)
	{
		if (matrizSopaLetras[i][posicion]!=null)
		{
			if (((longitudMatriz-1)-(i+1))>palabra.length)
			{
				indice=i+1;
				disponible=true;
			}
			else
			{
				disponible=false;
			}
		}
	} 
	if (disponible)
		{
			if(Math.floor(Math.random() * 2)==0)
			{
				for (var i = 0; i < palabra.length; i++) 
				{
					console.log(palabra.charAt(i));
					matrizSopaLetras[indice+i][posicion]=palabra.charAt(i);
				}
			}
			else
			{
				for (var i = 0; i < palabra.length; i++) 
				{
					console.log(palabra.charAt(palabra.length-i));
					matrizSopaLetras[indice+i][posicion]=palabra.charAt(palabra.length-i-1);
				}
			}
			return true;
		}
	else
	{
		console.log("no se pudo pintar en la matriz");
		return false;
	}
}



function pintarSopaLetras()
{
	
	for (var i = 0; i < matrizSopaLetras.length; i++) 
		{
			for (var j = 0; j < matrizSopaLetras.length;j++) 
			{
				if(matrizSopaLetras[i][j]!=null)
				{
					contenedor.innerHTML+="<button class='letras blue'><strong>"+matrizSopaLetras[i][j]+"</strong></button>"
				}
				else
				{
					//matrizSopaLetras[i][j]=Letras[Math.floor(Math.random() * Letras.length)];
					contenedor.innerHTML+="<button class='letras letras-round'><strong>"+Letras[Math.floor(Math.random() * Letras.length)]+"</strong></button>"
				}
				
			}
			contenedor.innerHTML+="<br>";
		}

}


