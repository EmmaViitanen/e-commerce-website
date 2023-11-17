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
                    <ul>
                        <a href="posters.html">POSTERS</<>
                        <a href="about.html">ABOUT</a>
                        <a href="index.html">LOGO</a>
                        <a href="index.html"><img src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-3akpq6z9.png"></a>
                        <a href="index.html"><img src="https://cdn.icon-icons.com/icons2/3065/PNG/512/profile_user_account_icon_190938.png"></a>
                        <a href="index.html"><img src="https://cdn3.iconfinder.com/data/icons/feather-5/24/heart-512.png"></a>
                        <a href="index.html"><img src="https://static-00.iconduck.com/assets.00/shopping-bag-icon-450x512-4w8uknzm.png"></a>
                    </ul>
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
    </footer>    
            `;
  }
}
customElements.define("my-footer", MinFooter);
