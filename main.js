// The following 54 lines of code was adapted from https://www.youtube.com/watch?v=j5Sl6vx_l1s&t=3s Accsessed: 2023-11-12

// HEADER
class MinHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
            <nav>
            <div class="desktop">
                <div class="nav1">
                    <p>Fast and flexible delivery worldwide</p>
                </div>
                <div class="nav2">
                  <div class="pages">
                    <ul>
                        <a href="posters.html">POSTERS</<>
                        <a href="artists.html">ARTISTS</a>
                    </ul>
                  </div>
                  <div class="logo">
                    <ul>
                        <a href="index.html"><img src="img/logo-code.svg"></a>
                    </ul>
                  </div>
                  <div class="icons">
                    <ul>
                        <a id="search" href="index.html"><img src="img/searchicon.png"></a>
                        <a href="index.html"><img src="img/account.png"></a>
                        <a href="index.html"><img src="img/heart.png"></a>
                        <a href="shoppingcart.html"><img src="img/shoppingbag.png"></a>
                    </ul>
                  </div>
                </div>
              </div>  
            <div class="mobile">
              <div class="nav1">
                <p>Fast and flexible delivery worldwide</p>
              </div>
              <div class="nav2">
                <div class="left">
                  <button onclick="menuFunction()" type="button"><i class="ri-menu-line"></i></button>
                    <a href="index.html"><img src="img/searchicon.png"></a>
                </div>
                <div class="logo">
                    <ul>
                        <a href="index.html"><img src="img/logo-code.svg"></a>
                    </ul>
                  </div>
                <div class="right">
                  <ul>
                      <a href="index.html"><img src="img/heart.png"></a>
                      <a href="shoppingcart.html"><img src="img/shoppingbag.png"></a>
                  </ul>
                </div>
                </div>
                <div id="hamburger-menu">
                  <div class="filter1">
                    <ul>
                      <a href="posters.html">ALL POSTERS</a>
                      <a href="posters.html">CATEGORIES</a>
                      <a href="artists.html">ARTISTS</a>
                    </ul> 
                  </div>
                  <div class="filter2">
                    <p>New Arrivals</p>
                    <p>Most Popular</p>
                    <p>Log In</p>
                  </div>
                  <form>
                    <label for="email">SUBSCRIBE TO NEWSLETTER</label>
                    <input type="email" id="email" placeholder="Enter your email adress"/>
                    <input type="submit" id="submit" value="SUBSCRIBE"/>
                  </form>
                </div>
              </nav>
        </header>    
            `;
  }
}
customElements.define("my-header", MinHeader);

// FOOTER
class MinFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
      <div class="footer-links">
        <div class="customer-care">
          <h3>CUSTOMER CARE</h3>
          <p>Help</p>
          <p>Shipping</p>
          <p>Return & Exchanges</p>
          <p>Order Tracking</p>
          <a href="contact.html"><p>Contact Us</p></a>
        </div>
        <div class="discover">
          <h3>DISCOVER</h3>
          <a href="about.html"><p>About Us</p></a>
          <p>Membership</p>
          <p>Newsletter</p>
        </div>
        <div class="categories-footer">
          <h3>CATEGORIES</h3>
          <p>Black & White</p>  
          <p>Nature</p>  
          <p>Abstract</p>  
          <p>Photographs</p>  
          <p>Media</p>  
          <p>Claude Monet</p>  
          <p>Vanellimelli</p>  
          <p>Mareike Böhmer</p>  
        </div>
      </div>
      <div class="footer-icons">
        <div class="icon-column">
          <img src="img/Insta.png" alt="Instagram">
          <img src="https://1000logos.net/wp-content/uploads/2017/03/Mastercard-logo.png" alt="Mastercard">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Maestro_2016.svg/616px-Maestro_2016.svg.png" alt="Maestro">
        </div>
        <div class="icon-column">
          <img src="img/Facebook.png" alt="Facebook">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1024px-Visa_Inc._logo.svg.png" alt="Visa card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Klarna_Payment_Badge.svg/1280px-Klarna_Payment_Badge.svg.png" alt="Klarna">
        </div>
        <div class="icon-column">
          <img src="img/tiktok.png" alt="Tiktok">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1026px-American_Express_logo_%282018%29.svg.png" alt="American Express">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="Paypal">
        </div>
      </div>
      <div class="footer-icons2">
        <div class="icon-row">
          <img src="img/Insta.png" alt="Instagram">
          <img src="img/Facebook.png" alt="Facebook">
          <img src="img/tiktok.png" alt="Tiktok">
        </div>
        <div class="icon-row">
          <img src="https://1000logos.net/wp-content/uploads/2017/03/Mastercard-logo.png" alt="Mastercard">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Maestro_2016.svg/616px-Maestro_2016.svg.png" alt="Maestro">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1024px-Visa_Inc._logo.svg.png" alt="Visa card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1026px-American_Express_logo_%282018%29.svg.png" alt="American Express">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Klarna_Payment_Badge.svg/1280px-Klarna_Payment_Badge.svg.png" alt="Klarna">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="Paypal">
        </div>
      </div>
    </footer>    
            `;
  }
}
customElements.define("my-footer", MinFooter);
