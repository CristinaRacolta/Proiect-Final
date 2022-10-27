import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">Ciocolaterie</h1>
                <p className="footer-text">
                  Descopera minunatul univers al ciocolatei!
        
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Meniu</p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={1000}
                         to="headerbg"
                  > Acasa </Link>
                  </li>
                  <li>
                  <Link to="services" spy={true} smooth={true} duration={1000} > Servicii </Link>
                  </li>
                  <li>
                  <Link to="about-scroll" spy={true} smooth={true} duration={1000}>Despre noi  </Link>
                  </li>
                  <li>
                  <Link to="contact" spy={true} smooth={true} duration={1000}> Contact  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#" >ciocolaterie@gmail.com</Link>
                  </li>
                  <li>
                    <Link to="#" > Program: L-V: 12:00-21:00/  S-D: 11:00-22:00
                  </Link>
                  </li>
                  <li>
                    <Link to="#" >TEL: 0720203055</Link>
                  </li>
                  <li>
                    <Link to="#" >Strada George Enescu, nr. 16, Sector 1, Bucuresti</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Chocolate/" > Facebook</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/chocolate/" > Instagram</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/AdvVpm7cYMT3Pg2h9"> Locatia noastra</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
