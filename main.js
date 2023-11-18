// The following 54 lines of code was adapted from https://www.youtube.com/watch?v=j5Sl6vx_l1s&t=3s Accsessed: 2023-11-12

// HEADER
class MinHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
            <nav>
                <div class="nav1">
                    <p>Fast and flexible delivery worldwide</p>
                </div>
                <div class="nav2">
                  <div class="pages">
                    <ul>
                        <a href="posters.html">POSTERS</<>
                        <a href="about.html">ABOUT</a>
                    </ul>
                  </div>
                  <div class="logo">
                    <ul>
                        <a href="index.html">LOGO</a>
                    </ul>
                  </div>
                  <div class="icons">
                    <ul>
                        <a href="index.html"><img src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-3akpq6z9.png"></a>
                        <a href="index.html"><img src="https://cdn.icon-icons.com/icons2/3065/PNG/512/profile_user_account_icon_190938.png"></a>
                        <a href="index.html"><img src="https://cdn3.iconfinder.com/data/icons/feather-5/24/heart-512.png"></a>
                        <a href="index.html"><img src="https://static-00.iconduck.com/assets.00/shopping-bag-icon-450x512-4w8uknzm.png"></a>
                    </ul>
                  </div>
                </div>
            <nav>
      
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
          <p>Contact Us</p>
        </div>
        <div class="discover">
          <h3>DISCOVER</h3>
          <p>About Us</p>
          <p>Membership</p>
          <p>Newsletter</p>
        </div>
        <div class="categories">
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
      
    </footer>    
            `;
  }
}
customElements.define("my-footer", MinFooter);
