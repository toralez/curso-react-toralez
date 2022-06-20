
# One Ring Store

Proyecto desarrollado en el curso de React Js de Coderhouse.

Consiste en un ecommerce de venta de consolas y videojuegos. Cuenta con la posibilidad de ordenar por nombre y precio los productos. También de filtrar por las distintas categorías.

Simula el proceso completo de compra de productos, desde la selección hasta el envío del formulario con los datos del comprador.

Al añadir productos al carrito se verá el número total en la barra superior.

Si se ingresa al carrito estando vacio, se mostrara un mensaje de que no hay productos deleccionados y un botón para vovler al home.

Tanto los datos de los productos como las órdenes de compra son almacenadas en firebase.

El stock es manejado por firestore y se actualiza con cada nueva orden.

Enlace al deploy del proyecto: https://curso-react-toralez.netlify.app.


## Tecnologías Utilizadas

- React
- Material UI
- React Router Dom
- Firebase
- Netlify
## Ejecución

Para ejecutar el proyecto puede descargarlo o clonarlo desde:



```bash
  git clone https://github.com/toralez/curso-react-toralez.git
  cd curso-react-toralez
```

Luego instalar las dependencias:

```bash
  npm install
```

El proyecto se crea en firestore con la colección **products**, que almacena los datos de los productos de la tienda (title, price, stock, description, pictureUrl, category).

**Ejemplo:**

Luego instalar las dependencias:

```
  {
    title: "Consola Switch Lite",
    price: "58000",
    stock: 5,
    description: "Consola portatil",
    pictureUrl: 'https://assets.com/image/hardware/consola-switch-lite',
    category: 'consolas',
  }
```

La colección **orders** se generará automaticamente cuando se cree la primera orden.

**Ejemplo:**

```
  {
    buyer:
      {
        name:"Dante",
        phone:"654321",
        email:"dante@dominio.com"
      },
    items:
      [
        {
          "id":"y7pKHq9DTONenTrwc2Yf",
          "title":"Mando Pro",
          "price":"14900",
          "quantity":2
        },
        {
          "id":"b8gGiO2SC7cl9DGNxuEl",
          "title":"Joy-Con",
          "price":"10000",
          "quantity":1
        },
      ],
    "total":52300,
    "time":"19 de junio de 2022, 10:21:36 UTC-3"
  }
```
## Consideraciones

**Material UI**

Se seleccionó Material UI ya que es una librería con una rápida curva de aprendizaje y con la cual se pueden generar diseños modernos y profesionales.

Se usa, con algunas modificaciones, el tema **dark** provisto por esta librería.

**Barra lateral**

Junto con las categorías de los productos, se podrá ver la imagen y el título de los productos a medida que se añadan al carrito.

**Formulario de compra**

Cuenta con verificación en los campos para asegurarse de que todos estén completos y que el formato del correo sea el adecuado.

**Firebase**

Se almacenan en firebase todos los datos relacionados a los productos y las ordenes de compra generadas.

**Netlify**

Se utiliza la plataforma Netlify para alojar una versión de demostración del sitio.
