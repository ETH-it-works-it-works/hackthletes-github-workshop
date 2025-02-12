class ProfileCard extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute("name") || "John Doe";
    const role = this.getAttribute("role") || "Web Developer";
    const image = this.getAttribute("image") || "images/boy-profile.png";

    this.innerHTML = `
        <div class="profile-card">
          <img src="${image}" alt="Profile Picture">
          <h2>${name}</h2>
          <p>${role}</p>
        </div>
      `;
  }
}
customElements.define("profile-card", ProfileCard);
