import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Container from './Container';
import Jumbotron from './Jumbotron';
import Row from './Row';
import Card from './Card';
import Footer from './Footer';

import 'jquery';
import 'popper.js';
import 'bootstrap';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Container> 
      <Jumbotron
        title="4GeeksAcademy"
        description="Aprende desde cero hasta tener tu primer trabajo como programador. Recibe mentoría ilimitada, soporte de por vida y consigue un trabajo como programador en 9+ o 16+ semanas despues de empezar."
        buttonLabel="4GeeksAcademy"
        buttonURL="https://4geeksacademy.co/es/inicio"
      />
      <Row>
        <Card 
         title="HTML5"
         description="HTML 5 es la quinta revisión importante del lenguaje básico de la World Wide Web, HTML. HTML5 especifica dos variantes de sintaxis para HTML: una «clásica», HTML, conocida como HTML5, y una variante XHTML conocida como sintaxis XHTML 5 que deberá servirse con sintaxis XML."
         buttonLabel="HTML5"
         buttonURL="https://developer.mozilla.org/es/docs/HTML/HTML5"
         img=""
        />
        <Card 
        title="CSS"
        description="CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.​"
        buttonLabel="CSS"
        buttonURL="https://developer.mozilla.org/es/docs/Web/CSS"
        img=""
        />
        <Card 
          title="JavaScript"
          description="JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico."
          buttonLabel="JavaScript"
          buttonURL="https://developer.mozilla.org/es/docs/Web/JavaScript"
          img=""
        />
        <Card 
        title="React"
        description="React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página."
        buttonLabel="React"
        buttonURL="https://es.reactjs.org/"
        img=""
        />
      </Row>
    </Container>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

