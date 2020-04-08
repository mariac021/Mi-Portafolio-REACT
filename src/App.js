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

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./images/carrusel1.gif" className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./images/carrusel2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./images/carrusel3.jpeg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

        <div  className="confgtext">
          <div className="alert portafolio aligntext container1" role="alert">
      <p id="Acerca">¡BIENVENIDOS! espero disfruten este pequeño recorido por mi vida</p>
      <p>especificamente mi vida enfocada a la programacion y el diseño</p>
      <p>esa pequeña parte de mi que denominan como el Front-End...</p>
          </div>
          <div className="alert aligntext container1" role="alert">
        
      <p>WELCOME! I hope you enjoy this little tour of my life</p>
      <p>specifically my life focused on programming and design</p>
      <p>that little part of me that they call the Front-End ...</p> 
    </div> 
    </div>
    <div className="container1">
      <img src="./images/Ciudad.jpg" width="1350"/>
    </div>
    <div >
          <section className="portafolio"/>
           <article className="portafolio_box">
               <div className=" portafolio_card">
                 <p>
                   <img src="./images/nube.png" width="40" alt=""/>
                   <img  src="./images/sistema-solar.png" width="40"  alt=""/>
                   <img src="./images/alien.png" width="40"  alt=""/>
                   <img src="./images/secuestro.png" width="40"  alt=""/></p>
                   <h3 className="confgtext">Un tributo al universo</h3>
                   <p className="textnav">Una pagina para que te informes acerca del universo, la ciencia y la astrologia.</p>
                   <a href='https://mariac021.github.io/tributepage/theuniverse.html'><button >Ver proyecto</button></a>


               </div>

           </article>
           <article className="portafolio_box">
              <div className=" portafolio_card">
              <p>
                   <img src="./images/seta.png" width="40" alt=""/>
                   <img  src="./images/magdalena.png" width="40"  alt=""/>
                   <img src="./images/casa.png" width="40"  alt=""/>
                   <img src="./images/estrella.png" width="40"  alt=""/></p>
                  <h3 className="confgtext">Formulario para la app rappi</h3>
                  <p className="textnav">Este es un formulario de satisfacción para los usuarios de Rappi.</p>
                  <a href='https://mariac021.github.io/Formulario/'><button >Ver proyecto</button>
                  </a>

              </div>

          </article>
           
            <article className="portafolio_box">
               <div className=" portafolio_card">
               <p>
                   <img src="./images/cabello.png" width="40" alt=""/>
                   <img  src="./images/boca.png" width="40"  alt=""/>
                   <img src="./images/pastel.png" width="40"  alt=""/>
                   <img src="./images/sombra.png" width="40"  alt=""/></p>
                   <h3 className="confgtext">Mi pagina de Maquillaje</h3>
                   <p className="textnav">Mi pagina de maquillaje en la que muestro mis trabajos,vendo productos y doy consejos.</p>
                   <a href='https://mariac021.github.io/Producto/'> <button >Ver proyecto</button>
                   </a>
 
               </div>

          </article>
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

