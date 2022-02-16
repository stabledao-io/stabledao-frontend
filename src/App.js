import './App.css';
import BackgroundVideo from './assets/background.mp4'
import Logo from './assets/logo.svg'

function App() {
  return (
    <section className="mainSection">
      <video className="bg-video" autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>

      <a href="/">
        <img src={Logo} alt="StableDAO logo" className='mainlogo' />
      </a>

      <div className="center-text z-99">
        <h2 className="comming-soon">Developing World's <br />
          Truely Decentralized Stablecoin</h2>

        <div className="gradient-text">
          <div className="text-wrapp"> <pre></pre>
            <span></span>
            <h1 className="text">COMING SOON</h1>
            <span></span>
          </div>
        </div>
      </div>

      <div className="social-links z-99">
        <a href="https://www.facebook.com/stabledao" target="_blank" rel="noreferrer" className="social-wrap">
          <div className="social-icon">
            <i className="fa-brands fa-facebook-f"></i>
          </div>
        </a>

        <a href="https://www.instagram.com/stabledao/" target="_blank" rel="noreferrer" className="social-wrap">
          <div className="social-icon">
            <i className="fa-brands fa-instagram"></i>
          </div>
        </a>

        <a href="https://twitter.com/stabledao_io" target="_blank" rel="noreferrer" className="social-wrap">
          <div className="social-icon">
            <i className="fa-brands fa-twitter"></i>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/stabledao/" target="_blank" rel="noreferrer" className="social-wrap">
          <div className="social-icon">
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
        </a>
      </div>

    </section >
  );
}

export default App;
