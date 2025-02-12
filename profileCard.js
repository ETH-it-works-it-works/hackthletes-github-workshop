class ProfileCard extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute("name") || "John Doe";
    const role = this.getAttribute("role") || "Web Developer";
    const image = this.getAttribute("image") || "images/boy-profile.png";
    const hobby = this.getAttribute("hobby") || "Playing Valorant";

    this.innerHTML = `
        <div class="profile-card">
          <img src="${image}" alt="Profile Picture">
          <h2 class="poppins-bold">${name}</h2>
          <p class="poppins-regular">${role}</p>
          <p class="poppins-regular">${hobby}</p>
        </div>
      `;
  }
}
customElements.define("profile-card", ProfileCard);
