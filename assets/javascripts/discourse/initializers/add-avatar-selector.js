import { withPluginApi } from "discourse/lib/plugin-api";
import { hbs } from "discourse/widgets/hbs-compiler";

export default {
  name: "add-avatar-selector",

  initialize(container) {
    withPluginApi("0.11.3", (api) => {
      api.decorateWidget("user-preferences:after-avatar-uploader", (helper) => {
        return helper.attach("avatar-selector");
      });
    });
  },
};