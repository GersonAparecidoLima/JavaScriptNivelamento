
	const pessoa =["Gerson","Aparecido",30,"Professor"];
	document.getElementById("demo").innerHTML = pessoa;
	//document.getElementById("demo2").innerHTML = pessoa.join(" - ");
	
	//remove ultimo elemento
	pessoa.pop();
	// adiciona um elemento
	pessoa.push('push adiciona');
	// remove o primeiro elemento
	pessoa.shift();
	// Adiciona elemento no inicio
	pessoa.unshift("ops", 5);
	
	// altera o conteúdo de um array removendo ou substituindo elementos existentes e/ou adicionando novos elementos
	pessoa.splice(1, 0, 'adicionando pelo splice');
	
	document.getElementById("demo2").innerHTML = pessoa;

/* 
   O concat()método de Arrayinstâncias é usado para mesclar dois ou mais arrays. 
   Este método não altera os arrays existentes, mas retorna um novo array.
	const array1 = ['a', 'b', 'c'];
	const array2 = ['d', 'e', 'f'];
	const array3 = array1.concat(array2);
	console.log(array3);
*/


/*
	O sort()método de Arrayinstâncias ordena os elementos de um array no lugar e retorna a 
	referência ao mesmo array, agora ordenado.
	
	const arraySort = [1, 30, 4, 21, 100000];
	arraySort.sort();
	console.log(arraySort);
*/


/*
	Deixar Array em Ordem Numérica

    const arraySort = [1, 30, 4, 21, 100000];
	arraySort.sort(
	function(a,b){return a - b}
	);
	console.log(arraySort);
*/
	
	/*
	 Pegar o MAIOR número de um array
	
    const ArrayMaior = [1, 30, 4, 21, 100000];
	
	function MaiorNumero(arr){
		return Math.max.apply(null,arr);
	}
	console.log("1, 30, 4, 21, 100000 o maior é: ==> " + MaiorNumero(ArrayMaior));
    */


	/*
	 Pegar o Menor número de um array
	
    const ArrayMenor = [1, 30, 4, 21, 100000];
	
	function MenorNumero(arr){
		return Math.min.apply(null,arr);
	}
	console.log("1, 30, 4, 21, 100000 o menor é: ==> " + MenorNumero(ArrayMenor));
    */
	
	
	/*
	Filtragem de números

	const ArrayMaior20 = [1, 30, 4, 21, 100000];
	const Maior20 = ArrayMaior20.filter(Filtragem);
	function Filtragem(value, index, array){
		return value > 20;				
	}
	console.log(Maior20);
	
	*/	
	
	
