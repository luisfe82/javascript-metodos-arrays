export const metodos = [
    {
        id:1,
        titulo:'map()',
        tipo:'sin mutación',
        sintaxis:'Array.prototype.map ( callbackfn [ , thisArg ] )',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
        descripcion:'Permite recorrer el array y modificar los elementos presentes en él, retornando un nuevo array con la misma longitud que el original.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--O0S1zqAh--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f25rnjq2j6wuhugxzi2a.png'
    },
    {
        id:2,
        titulo:'filter()',
        tipo:'sin mutación',
        sintaxis:'Array.prototype.filter ( callbackfn [ , thisArg ] )',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
        descripcion:'Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--bxDOPQK0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h6447ms3disaktwi74os.png'
    },
    {
        id:3,
        titulo:'forEach()',
        tipo:'sin mutacion',
        sintaxis:'Array.prototype.forEach ( callbackfn [ , thisArg ] )',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
        descripcion:'Permite iterar el contenido de un array. Recibe un callback que toma como parámetro el elemento actual de la iteración y el indice del mismo.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--LwaMt-IT--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kxv5bwmtsptuohcd2dqr.png'
    },
    {
        id:4,
        titulo:'find()',
        tipo:'sin mutación',
        sintaxis:'arr.find(callback[, thisArg])',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find',
        descripcion:'Recorre el array y retorna la primera coincidencia del elemento que se busca.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--9VP1yB_---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yipdbg0l4wnbt2ybm3bl.png'
    },
    {
        id:5,
        titulo:'sort()',
        tipo:'mutación',
        sintaxis:'Array.prototype.sort (comparefn)',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
        descripcion:'Ordena los elementos del array y retorna el arreglo ordenado. Los elementos se ordenarán en orden ascendente (de la A a la Z) por defecto.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--Ct-ILb_S--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m28vi4f62mvduofxun0q.png'
    },
    {
        id:6,
        titulo:'some()',
        tipo:'sin mutación',
        sintaxis:'Array.prototype.some ( callbackfn [ , thisArg ] )',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some',
        descripcion:'Itera el array y retorna un booleano si como mínimo uno de los elementos presentes en el array pasa una condición determinada. Recibe un callback que se encargara de preguntar aquello que queremos dentro del array.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--bttRthyJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fzys22t49oe2b00p1bvj.png'
    },
    {
        id:7,
        titulo:'every()',
        tipo:'sin mutación',
        sintaxis:'Array.prototype.every ( callbackfn [ , thisArg ] )',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
        descripcion:'Es similar al some(), ya que itera el array y retorna un booleano. Pero esta vez, para que dicho booleano sea true todos los elementos del array deberán pasar la condición dada.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--tZMj08ex--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dqj5q7a3h3tkvwq0bqvh.png'
    },
    {
        id:8,
        titulo:'concat()',
        tipo:'sin mutación',
        sintaxis:'Array.prototype.concat ( [ item1 [ , item2 [ , … ] ] ] )',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat',
        descripcion:'Se utiliza para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--o-O7kiug--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wfsr0g0uxu6crvby9x6z.png'
    },
    {
        id:9,
        titulo:'includes()',
        tipo:'sin mutación',
        sintaxis:'arr.includes(searchElement) --  arr.includes(searchElement, fromIndex)',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes',
        descripcion:'Determina si un array incluye un determinado elemento y retorna un booleano según corresponda.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--2CRKGeJ6--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o6wdww82n63ptkkmt3qu.png'
    },
    {
        id:10,
        titulo:'join()',
        tipo:'sin mutación',
        sintaxis:'Array.prototype.join (separator)',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join',
        descripcion:'Une todos los elementos de un array en una cadena. Podemos pasarle como parámetro el carácter de separación que debe agregar entre los elementos.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--UlXj5JHT--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7im37ahu1s67c7pk32g8.png'
    },
    {
        id:11,
        titulo:'reduce()',
        tipo:'sin mutación',
        sintaxis:'Array.prototype.reduce ( callbackfn [ , initialValue ] )',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce',
        descripcion:'Aplica una función a un acumulador y a cada valor de una array (de izquierda a derecha) para reducirlo a un único valor.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--dDNpVMF9--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sx68tqk220y3jyqahrkm.png'
    },
    {
        id:12,
        titulo:'indexOf()',
        tipo:'sin mutación',
        sintaxis:'AArray.prototype.indexOf ( searchElement [ , fromIndex ] )',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf',
        descripcion:'Retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--Z6EBGq4N--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xjwma9dcyod21ife9r80.png'
    },
    {
        id:13,
        titulo:'findIndex()',
        tipo:'sin mutación',
        sintaxis:'arr.findIndex(callback[, thisArg])',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex',
        descripcion:'Retorna el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--xEBSa2Vg--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e3vkm3xkxdrvbswp4v4j.png'
    },
    {
        id:14,
        titulo:'fill()',
        tipo:'mutación',
        sintaxis:'arr.fill(value) -- arr.fill(value, start) -- arr.fill(value, start, end)',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill',        
        descripcion:'Cambia todos los elementos de un array por un valor estático, desde el índice de inicio hasta el índice final. Retorna el array modificado.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--A3emdVjX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lfiwo362se6dpspsb0tp.png'
    },
    {
        id:15,
        titulo:'push()',
        tipo:'mutación',
        sintaxis:'Array.prototype.push ( [ item1 [ , item2 [ , … ] ] ] )',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
        descripcion:'Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--LnW0qgCn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/khv934b2k2qaqwft8q0f.png'
    },
    {
        id:16,
        titulo:'pop()',
        tipo:'sin mutación',
        sintaxis:'Array.prototype.pop ( )',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop',
        descripcion:'Elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--k6Nz0Z6w--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8gkwxrcgqrzzlcckkchr.png'
    },
    {
        id:17,
        titulo:'shift()',
        tipo:'mutación',
        sintaxis:'Array.prototype.shift ( )',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift',
        descripcion:'Elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--Ex8ZQhAa--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zblrb9uldw4blb605krc.png'
    },
    {
        id:18,
        titulo:'unshift()',
        tipo:'mutación',
        sintaxis:'Array.prototype.unshift ( [ item1 [ , item2 [ , … ] ] ] )',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift',
        descripcion:'Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--zioGpWgq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q333rq1o787jr99217ps.png'
    },
    {
        id:19,
        titulo:'slice()',
        tipo:'sin mutación',
        sintaxis:'Array.prototype.slice (start, end)',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice',
        descripcion:'Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--UQQZpdSw--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nxdd2w5v7ufqcamtmghy.png'
    },
    {
        id:20,
        titulo:'reverse()',
        tipo:'mutación',
        sintaxis:'Array.prototype.reverse ( )',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse',
        descripcion:'Invierte el orden de los elementos de un array. El primer elemento pasa a ser el último y el último pasa a ser el primero.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--0rjiKxmn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cx3jwoqesf2ruyzgc2lg.png'
    },
    {
        id:21,
        titulo:'splice()',
        tipo:'mutación',
        sintaxis:'Array.prototype.splice (start, deleteCount [ , item1 [ , item2 [ , … ] ] ] )',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice',
        descripcion:'Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--btuf-qkB--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zs4zscoz5o72xbysw84u.png'
    },
    {
        id:22,
        titulo:'lastIndexOf()',
        tipo:'sin mutación',
        sintaxis:'Array.prototype.lastIndexOf ( searchElement [ , fromIndex ] )',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf',
        descripcion:'Busca un elemento en un array y devuelve su posición. Comienza buscando por el final del array. Retorna -1 si el elemento no se encontrara.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--fpmlCZ-d--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tmappcxwkv92gs15ypaz.png'
    },
    {
        id:23,
        titulo:'flat()',
        tipo:'sin mutación',
        sintaxis:'var newArray = arr.flat([depth]);',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat',
        descripcion:'Crea una nuevo array con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--hIfcrAgY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ell6dbackl27setargzv.png'
    },
    {
        id:24,
        titulo:'isArray()',
        tipo:'sin mutación',
        sintaxis:'',
        link:'',
        descripcion:'Determina si el valor pasado es un Array.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--maUfBmHk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/upfe6eaormv9mt1hlsvm.png'
    },
    {
        id:25,
        titulo:'from()',
        tipo:'sin mutación',
        sintaxis:'',
        link:'',
        descripcion:'Crea una nueva instancia de Array a partir de un objeto iterable.',
        imagen:'https://res.cloudinary.com/practicaldev/image/fetch/s--SokA2985--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zxsazaddecc4156sccdj.png'
    },
    {
        id:26,
        titulo:'copyWithin()',
        tipo:'mutación',
        sintaxis:'arr.copyWithin(target) --  arr.copyWithin(target, start) -- arr.copyWithin(target, start, end)',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin',
        descripcion:'El método copyWithin() copia superficialmente parte de una matriz a otra ubicación en la misma matriz y la devuelve, sin modificar su tamaño.',
        imagen:'https://appdividend.com/wp-content/uploads/2019/06/Javascript-Array-copyWithin-Example-JS-Array-copyWithin-Tutorial.png'
    },
    {
        id:27,
        titulo:'entries()',
        tipo:'sin mutación',
        sintaxis:'a.entries()',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries',
        descripcion:'El método entries() devuelve un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice de la matriz.',
        imagen:'https://static.platzi.com/media/user_upload/object-entries-35641553-0f81-4d1d-9251-c9e6b15f41ce.jpg'
    },
    {
        id:28,
        titulo:'keys()',
        tipo:'sin mutación',
        sintaxis:'arr.keys()',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys',
        descripcion:'El método keys() devuelve un nuevo Array Iterator que contiene las claves para cada índice de la matriz.',
        imagen:'https://katophelix.github.io/javascript-the-movie/images/video/array.png'
    },
    {
        id:29,
        titulo:'reduceRight()',
        tipo:'sin mutación',
        sintaxis:'Array.prototype.reduceRight ( callbackfn [ , initialValue ] )',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight',
        descripcion:'El método reduceRight() aplica una función contra un acumulador y cada valor de la matriz (de derecha a izquierda) tiene que reducirlo a un solo valor.',
        imagen:'https://miro.medium.com/v2/resize:fit:1400/1*IZeXlRPbRtyVr8hLKgxy0A.png'
    },
    {
        id:30,
        titulo:'toLocaleString()',
        tipo:'sin mutación',
        sintaxis:'Array.prototype.toLocaleString ( )',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString',
        descripcion:'El método toLocaleString() devuelve una cadena que representa los elementos de la matriz. Los elementos se convierten en cadenas utilizando sus métodos toLocaleString y estas cadenas están separadas por una cadena específica de la configuración regional (como una coma “,”).',
        imagen:'https://wesbos.com/static/606573b6f00845201e0f8fb8b647403b/9f11b/CmoKS0JVUAA8sEI.jpg'
    },
    {
        id:31,
        titulo:'toSource()',
        tipo:'sin mutación',
        sintaxis:'arr.toSource()',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSource',
        descripcion:'El método toSource() devuelve una cadena que representa el código fuente de la matriz.',
        imagen:'https://wesbos.com/static/606573b6f00845201e0f8fb8b647403b/9f11b/CmoKS0JVUAA8sEI.jpg'
    },
    {
        id:32,
        titulo:'toString()',
        tipo:'sin mutación',
        sintaxis:'Array.prototype.toString ( )',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString',
        descripcion:'El método toString() devuelve una cadena que representa la matriz especificada y sus elementos.',
        imagen:'https://appdividend.com/wp-content/uploads/2019/04/Javascript-Array-ToString-Example-Array.prototype.toString-Tutorial.png'
    },
    {
        id:33,
        titulo:'values()',
        tipo:'sin mutación',
        sintaxis:'arr.values()',
        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values',
        descripcion:'El método de valores () devuelve un nuevo objeto Array Iterator que contiene los valores para cada índice en la matriz.',
        imagen:'https://katophelix.github.io/javascript-the-movie/images/video/array.png'
    }
]