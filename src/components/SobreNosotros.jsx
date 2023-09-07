import React from 'react';

function SobreNosotros() {
  return (
    <div>
      <h2>Sobre Nosotros</h2>
      <p>
        Bienvenidos a "Remind me to do", una aplicación de tareas simple y efectiva para ayudarte a mantener un registro de tus pendientes.
      </p>
      <p>
      Funcionamiento de la Aplicación:
La aplicación "Remind Me To Do" es una herramienta diseñada para ayudarte a organizar tus tareas diarias de manera eficiente. Al acceder a la aplicación, serás recibido por una acogedora pantalla de inicio que te da la bienvenida.

Una vez dentro, encontrarás una interfaz limpia y fácil de usar. En la parte superior, se encuentra el encabezado donde puedes agregar nuevas tareas. Simplemente ingresa el nombre de la tarea y una descripción opcional, y presiona el botón "Crear" para añadirla a tu lista.

Tus tareas se muestran en una lista organizada, donde cada una puede ser marcada como completada o editada si es necesario. Además, si deseas obtener más detalles sobre una tarea en particular, puedes hacer clic en ella para ver su descripción.

El menú de navegación en la parte superior derecha te permite cambiar entre diferentes secciones de la aplicación, como la página de inicio, la lista de tareas y una sección de información sobre nosotros.
      </p>
      <p>
      Construcción de la Aplicación y Tecnologías Utilizadas:
La aplicación "Remind Me To Do" está construida utilizando tecnologías web modernas que permiten una experiencia de usuario fluida y atractiva. Estas son algunas de las principales tecnologías utilizadas:

React: Esta aplicación está desarrollada en React, una biblioteca de JavaScript de código abierto que facilita la creación de interfaces de usuario interactivas y reactivas.

React Router: Para la navegación entre diferentes secciones de la aplicación, se utiliza React Router. Esta biblioteca permite definir rutas y navegar entre páginas sin necesidad de recargar la página completa.

HTML y CSS: Se utilizan HTML y CSS para la estructura y el diseño de la aplicación. CSS Modules se emplea para modularizar y organizar los estilos de cada componente.

JavaScript (ES6+): Se utiliza JavaScript moderno, incluyendo características de ECMAScript 6 y posteriores, para la lógica y funcionalidades de la aplicación.

React Icons: Para la inclusión de iconos visuales, se utiliza la biblioteca React Icons, que proporciona una amplia gama de iconos listos para usar.

localStorage: Para el almacenamiento local de las tareas, se emplea localStorage, una característica de JavaScript que permite almacenar datos en el navegador del usuario.

Vite: Es un entorno de desarrollo ultra-rápido para aplicaciones web modernas. Ayuda en la configuración y el flujo de trabajo de desarrollo.

Esta combinación de tecnologías permite que la aplicación sea rápida, receptiva y fácil de usar, proporcionando una experiencia agradable para el usuario mientras administra sus tareas diarias.
      </p>
    </div>
  );
}

export default SobreNosotros;
