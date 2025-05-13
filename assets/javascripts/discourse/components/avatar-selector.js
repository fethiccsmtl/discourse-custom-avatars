import Component from "@glimmer/component";
import { ajax } from "discourse/lib/ajax";
import { inject as service } from "@ember/service";

export default class AvatarSelectorComponent extends Component {
  @service currentUser;

  avatars = [
    "/images/avatars/avatar1.png",
    "/images/avatars/avatar2.png",
    "/images/avatars/avatar3.png"
  ];

  selectAvatar(url) {
    ajax(`/u/${this.currentUser.username}/preferences/avatar/pick`, {
      type: "PUT",
      data: { url },
    }).then(() => location.reload());
  }
}