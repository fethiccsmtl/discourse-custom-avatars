import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "add-avatar-selector",

  initialize() {
    console.log("[custom-avatars] Initializer loaded");

    withPluginApi("1.8.0", (api) => {
      console.log("[custom-avatars] Plugin API available");

      api.modifyClass("component:avatar-uploader", {
        didInsertElement() {
          this._super(...arguments);
          console.log("[custom-avatars] avatar-uploader remplacé");
          console.log(this.element);
          
          console.log("Args", this.currentUser);
          const userId  = this.currentUser.id;

          // this.element.innerHTML = "";

          // const wrapper = document.createElement("div");
          // wrapper.id = "custom-avatar-selector-outlet";
          // this.element.appendChild(wrapper);

          // const avatars = [
          //   { name: "Avatar 1", url: "/images/avatars/avatar1.png" },
          //   { name: "Avatar 2", url: "/images/avatars/avatar2.png" },
          //   { name: "Avatar 3", url: "/images/avatars/avatar3.png" }
          // ];

          // const selectorHtml = `
          //   <div class="custom-avatar-selector">
          //     <label for="custom-avatar-select">Choisir un avatar :</label>
          //     <select id="custom-avatar-select">
          //       ${avatars
          //         .map(
          //           (avatar) =>
          //             `<option value="${avatar.url}">${avatar.name}</option>`
          //         )
          //         .join("")}
          //     </select>
          //   </div>
          // `;

          // wrapper.innerHTML = selectorHtml;

          // const select = wrapper.querySelector("#custom-avatar-select");
          // if (select) {
          //   select.addEventListener("change", (event) => {
          //     const selectedUrl = event.target.value;
          //     console.log("[custom-avatars] Avatar sélectionné :", selectedUrl);

          //     fetch(`/u/${userId}/avatar-picker`, {
          //       method: "PUT",
          //       headers: {
          //         "Content-Type": "application/json",
          //         "X-CSRF-Token": document.querySelector("meta[name=csrf-token]").content
          //       },
          //       body: JSON.stringify({
          //         upload_id: null,
          //         url: selectedUrl
          //       })
          //     }).then(() => {
          //       //window.location.reload();
          //     });
          //   });
          // }
        }
      });
    });
  },
};
