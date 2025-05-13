# name: discourse-custom-avatars
# about: Replace default avatar upload with predefined choices
# version: 0.1
# authors: Fethi Bey Abi Ayad
# url: https://github.com/fethiccsmtl/discourse-custom-avatars

enabled_site_setting :custom_avatars_enabled

register_asset "stylesheets/custom-avatars.scss"

register_asset "images/avatars/avatar1.png"
register_asset "images/avatars/avatar2.png"
register_asset "images/avatars/avatar3.png"

register_asset "javascripts/discourse/custom-avatars/components/avatar-selector.js", :client_side
