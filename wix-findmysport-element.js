
/** SURPASSPORT / findmysport SignUpIn Router
 *
 *  Copyright (c) 2020 Adrian Geissel. All Rights Reserved.
 *  Unauthorised use prohibited without written Licence Agreement
 */


class FindMySportElement extends HTMLElement {
  constructor() {
    super();

    // parameters .. from data-* attributes
  }

  connectedCallback() {

    const channelId = this.dataset.channelId;

    if(!channelId) {
      this.html = '<i style="color:red;">Missing channelID - set using data-channel-id="..." attribute</i>';
      return;
    }

    if(!document.getElementById('findmysport-plugin')) {

      const container = document.createElement('div');
      container.setAttribute('id', 'findmysport-plugin');
      container.innerText = "Loading ...";

      this.appendChild(container);
    }

    const plugin = document.createElement("script");
    plugin.onload = function() {

        document.getElementById('findmysport-plugin').innerText = "";

        FindMySportPlugin({
          channelId: channelId,
          router: 'hash'
        }).render('#findmysport-plugin')
      }
    plugin.src = "https://fms.surpassport.com/findmysport.plugin.js";
    document.head.appendChild(plugin);
  }
}

customElements.define('findmysport', FindMySportElement);
