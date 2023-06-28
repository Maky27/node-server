# node-server

¿Qué sucedió al usar async y await?

Al utilizar `async` y `await`, el código asincrónico se puede escribir de manera más secuencial y legible. Las funciones marcadas como `async` indican que contienen operaciones asincrónicas. Al utilizar `await` dentro de una función `async`, se puede esperar a que se resuelva una promesa antes de continuar con la ejecución del código. Esto evita el uso de callbacks y permite un flujo de control más lineal y fácil de seguir.

¿Qué sucedió al usar el método then()?

El método `then()` se utiliza para encadenar callbacks y manejar el resultado cuando una promesa se resuelve exitosamente. Al usar el método `then()`, se puede especificar una función de callback que se ejecutará cuando la promesa se resuelva. Esta función de callback recibirá el valor resuelto de la promesa como argumento. De esta manera, se puede manejar el resultado exitoso de una promesa y encadenar las operaciones de manera adecuada.

¿Qué diferencias encontraste entre async, await y el método then()?

- `async` y `await` son palabras clave de JavaScript que permiten trabajar con código asincrónico de manera secuencial y fácilmente legible. Al utilizar `async` en la declaración de una función, se indica que la función contiene código asincrónico y puede utilizar la palabra clave `await` para esperar la resolución de una promesa antes de continuar con la ejecución. Esto facilita la escritura de código asincrónico de manera similar a una ejecución síncrona.

- El método `then()` se utiliza para encadenar callbacks y manejar el resultado exitoso de una promesa cuando se resuelve. Permite especificar qué hacer con el valor resuelto de la promesa. Al encadenar múltiples operaciones utilizando el método `then()`, se pueden manejar los resultados de manera secuencial.

En resumen, `async` y `await` proporcionan una sintaxis más sencilla y legible para trabajar con código asincrónico, mientras que el método `then()` permite encadenar callbacks y manejar los resultados de las promesas. Ambos enfoques tienen sus usos y pueden ser utilizados según las necesidades del proyecto y las preferencias del desarrollador.
