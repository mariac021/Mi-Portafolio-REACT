import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <ul className="nav nav-tabs navbarS" id="myTab" role="tablist">
  <li className="nav-item">
    <a className="textnav nav-link active" id="home-tab" data-toggle="tab" href="#" role="tab" aria-controls="home" aria-selected="true">Maria Clara |
    <img src="./images/icon1.png" width="25" alt="..."/></a>
  </li>
  <li className="nav-item">
    <a className="textnav nav-link" id="profile-tab" data-toggle="tab" href="#Acerca" role="tab" aria-controls="profile" aria-selected="true">Perfil</a>
  </li>
  <li className="nav-item">
    <a className="textnav nav-link" id="contact-tab" data-toggle="tab" href="#Contacto" role="tab" aria-controls="contact" aria-selected="true">Contacto</a>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>

<div>
  <h1 className="textnav">Maria Clara Restrepo Areiza</h1>
  <h3 className="textheader">Desarrolladora Junior Front-End</h3>
  <h4 className="textheader">"Si dejas salir tus miedos, tendras mas espacio para vivir tus sueños"</h4>
  <h5 className="textheader">-Marilyn Monroe-</h5>
</div>

    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./images/carrusel1.gif" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="textcarrusel">|Soy una desarrolladora pre-junior Front-end con enfasis en React|</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./images/carrusel2.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="textcarrusel">¡BIENVENIDOS! espero disfruten este pequeño recorido por mi vida</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./images/carrusel3.jpeg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="textcarrusel">mi vida enfocada a la programacion y el diseño, esa pequeña parte de mi que denominan como el Front-End...</h5>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

        

      <div className="card CARD mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="./images/html5.png" width="160"  alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">HTML</h5>
        <p id="Acerca"className="textnav card-text">es un lenguaje de marcado que se utiliza para el desarrollo de páginas de Internet. Se trata de la sigla que corresponde a HyperText Markup Language, es decir, Lenguaje de Marcas de Hipertexto, que podría ser traducido como Lenguaje de Formato de Documentos para Hipertexto.</p>
        <p className="textcard2">Manejo un 80/100</p>
      </div>
    </div></div>
    </div>
    <div className="card CARD mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="./images/css.png" width="160"  alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">CSS</h5>
        <p className="textnav card-text">CSS son las siglas de Cascading Style Sheets - Hojas de Estilo en Cascada - que es un lenguaje que describe la presentación de los documentos estructurados en hojas de estilo para diferentes métodos de interpretación, es decir, describe como se va a mostrar un documento en pantalla, por impresora, por voz o en dispositivos táctiles basados en Braille.</p>
        <p className="textcard2">Manejo un 80/100</p>
      </div>
    </div></div>
    </div>
    <div className="card CARD mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="./images/javascript.png" width="160"  alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">JavaScript</h5>
        <p className="textnav card-text">Javascript es una especie de lenguaje de programación ligera, interpretado por la mayoría de los navegadores y que les proporciona a las páginas web, efectos y funciones complementarias a las consideradas como estándar HTML Este tipo de lenguaje de programación, con frecuencia son empleados en los sitios web, para realizar acciones en el lado del cliente, estando centrado en el código fuente de la página web.</p>
        <p className="textcard2">Manejo un 50/100</p>
      </div>
     </div>
    </div></div>
    <div className="card CARD mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="./images/react.png" width="160"  alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">ReactJS</h5>
        <p className="textnav card-text">es una biblioteca escrita en JavaScript, desarrollada en Facebook para facilitar la creación de componentes interactivos, reutilizables, para interfaces de usuario. Se utiliza en Facebook para la producción de componentes, e Instagram está escrito enteramente en React. Uno de sus puntos más destacados, es que no sólo se utiliza en el lado del cliente, sino que también se puede representar en el servidor, y trabajar juntos.</p>
        <p className="textcard2">Manejo un 40/100</p>
      </div>
    </div></div>
    
 
    <div className="container1">
      <img src="./images/Ciudad.jpg" width="1350" height="400"/>
    </div>
    </div>

    <div className="portafolio_card card-deck">
  <div className="portafolio_card card">
    <img src="./images/imagen1.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 className="textheader card-title">The Universe</h5>
      <p className="textnav card-text">Una pagina para que te informes acerca del universo, la ciencia y la astrologia.</p>
      <a href='https://mariac021.github.io/tributepage/theuniverse.html'><button >Ver proyecto</button></a>

    </div>
  </div>
  <div className="portafolio_card card">
    <img src="./images/imagen2.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 className="textheader card-title">Formulario para Rappi</h5>
      <p className="textnav card-text">Este es un formulario de satisfacción para los usuarios de Rappi.</p>
                  <a href='https://mariac021.github.io/Formulario/'><button >Ver proyecto</button>
                  </a>
    </div>
  </div>
  <div className="portafolio_card card">
    <img src="./images/imagen3.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 className="textheader card-title">Make up Colombia</h5>
      <p className="textnav card-text">Mi pagina de maquillaje en la que muestro mis trabajos,vendo productos y doy consejos.</p>
      <a href='https://mariac021.github.io/Producto/'> <button >Ver proyecto</button>
      </a>
    </div>
  </div>
</div>


       <footer className="footer">
  <div className="container">
      <div className="footer_section">
       <h2 className="icons title">-Maria Clara-</h2>
       <section>
        <div className="container1">

        <img className="imgx" src="./images/imgcara.jpg" width="470" alt=""/>
        </div>
        </section>
        <div className="footer_icons icons title">

            <a href="https://www.facebook.com/mariaclara.restrepoareiza"> <i class="fab fa-facebook-f fa-2x"></i> </a>
            <a href="https://www.instagram.com/mclararar/"><i class="fab fa-instagram fa-2x"></i></a>
            <a href="https://github.com/mariac021"> <i class="fab fa-github fa-2x"></i></a>
            <a href="https://www.linkedin.com/in/mar%C3%ADa-clara-restrepo-areiza-1b28081a2/"> <i class="fab fa-linkedin fa-2x"></i> </a>
        
        </div>
      
      
       <section  className="formulario">
        <form>
          <div className="form-row">
            <div className="form-group col-md-6" >
              <label id="Contacto" for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4"/>
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">Name</label>
              <input type="password" className="form-control" id="inputPassword4"/>
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress">Github Acocount</label>
            <input type="text" className="form-control" id="inputAddress" placeholder=""/>
          </div>
          <div className="form-group">
            <label for="inputAddress2">Linkedin Acocount</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder=""/>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity"/>
            </div>
          </div>
          <button type="submit" className="btn buttoncolor">Sent</button>
        </form>
       </section>
      </div>
  </div>
</footer>
<div className="copyright">
  <p className="title">Todos los derechos reservados | Maria Clara Restrepo Areiza 2020</p>
</div>
    </div>
  );
}

export default App;

