import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
  header: document.querySelector('header'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

class footerElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer>
      <div class="footer-content">
          <p>Copyright © 2023 - MUHAMMAD DIMAS PRASETYA</p>`;
  }
}

customElements.define('footer-element', footerElement);
