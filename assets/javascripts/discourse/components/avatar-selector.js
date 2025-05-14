import Component from "@ember/component";
import hbs from "discourse/widgets/hbs-compiler";

export default Component.extend({
  layout: hbs`
    <div class="custom-avatar-selector">
      <label for="custom-avatar-select">Choisir un avatar :</label>
      <select id="custom-avatar-select">
        {{#each avatars as |avatar|}}
          <option value="{{avatar.url}}">{{avatar.name}}</option>
        {{/each}}
      </select>
    </div>
  `,

  avatars: null,

  didInsertElement() {
    this._super(...arguments);

    // Liste d'avatars (tu peux les générer dynamiquement plus tard)
    this.set("avatars", [
      { name: "Avatar 1", url: "/images/avatars/avatar1.png" },
      { name: "Avatar2", url: "/images/avatars/avatar2.png" },
      { name: "Avatar3", url: "/images/avatars/avatar3.png" }
    ]);

    // Ajout du listener de sélection
    const select = this.element.querySelector("#custom-avatar-select");
    if (select) {
      select.addEventListener("change", (event) => {
        const selectedUrl = event.target.value;
        console.log("[custom-avatars] Avatar sélectionné :", selectedUrl);

        // Requête vers le backend pour changer l’avatar
        fetch("/u/avatar-picker", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": document.querySelector("meta[name=csrf-token]").content
          },
          body: JSON.stringify({
            upload_id: null,
            url: selectedUrl
          })
        }).then(() => {
          window.location.reload();
        });
      });
    }
  }
});