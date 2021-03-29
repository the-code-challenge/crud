# Code Challenge: Crud

El objetivo del challenge es implementar un crud básico, utilizando un array para almacenar los elementos.

Se debe implementar

## create
Agrega un elemento a la lista y lo retorna con su ID
 
### Parametros
Un objeto con las propiedades name y lastname  
1- Objeto: {name, lastname} (ej: { name:'John', lastname: 'Rambo' })

### Retorna
Un objeto que incluye las propiedades id, name y lastname
- Objecto {id, name, lastname} (ej: { id: 3, name:'John', lastname: 'Rambo' })

---

## read
Busca un elemento por su ID y lo retorna
 
### Parametros
Un ID numerico
1 - id {type: Number}  (ej: 2)

### Retorna
Un objeto que incluye las propiedades id, name y lastname
- Objecto {id, name, lastname} (ej: { id: 3, name:'John', lastname: 'Rambo'})

---

## update
Busca un elemento por su ID, lo actualiza y lo retorna
 
### Parametros
Un ID numerico
1 - id {type: Number}  (ej: 2)
- Objecto {name, lastname} (ej: { name:'John', lastname: 'Rambo' })

### Retorna
Un objeto que incluye las propiedades id, name y lastname
- Objecto {id, name, lastname} (ej: { id: 3, name:'John', lastname: 'Rambo' })

---
 
## delete
Busca un elemento por su ID y lo remueve
 
### Parametros
Un ID numerico
1 - id {type: Number}  (ej: 2)

### Retorna
- Retorna true si encontró el elemento y lo elimino con exito
- Retorna false si no logro encontrar un element con el ID proporcionado


## Instrucciones
- Crear un nuevo repositorio utilizando este repositorio como template (Boton: use this template).
- Editar el código de la función definida en el archivo index.js con un algoritmo que permita obtener los resultados esperados en los test.
- Ejecutar los test validando que todos resulten exitosos

## Ejecutar Pruebas

Instalar dependencias (mocha)
```
npm install
```

Ejecutar test
```
npm run test
```

