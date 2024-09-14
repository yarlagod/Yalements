class btn extends HTMLElement {
  static observedAttributes = ["width","height","color","hover-color","text-color","font","radius"];

  constructor() {
    super();
  }
  connectedCallback() {
    if (this.hasAttribute("height")){
      var height = this.getAttribute("height");
    }
    else{
      var height = "fit-content";
    }
    if (this.hasAttribute("width")){
      var width = this.getAttribute("width");
    }
    else{
      var width = "fit-content";
    }
    if (this.hasAttribute("color")){
      var color = this.getAttribute("color");
    }
    else{
      var color = "#eee";
    }
    if (this.hasAttribute("hover-color")){
      var hcolor = this.getAttribute("hover-color");
    }
    else{
      var hcolor = "#ccc";
    }
    if (this.hasAttribute("click-color")){
      var ccolor = this.getAttribute("click-color");
    }
    else{
      var ccolor = "#999";
    }
    if (this.hasAttribute("text-color")){
      var tcolor = this.getAttribute("text-color");
    }
    else{
      var tcolor = "#000";
    }
    if (this.hasAttribute("font")){
      var font = this.getAttribute("font");
    }
    else{
      var font = "Arial";
    }
    if (this.hasAttribute("radius")){
      var rad = this.getAttribute("radius");
    }
    else{
      var rad = "100px";
    }
    this.setAttribute("style","display: block;user-select: none;cursor: pointer;padding: 10px;text-align: center;border-radius: "+rad+";width: "+width+";height: "+height+";line-height:"+height+";background-color: "+color+";color: "+tcolor+";font-family: "+font+";")
    this.setAttribute("onmouseover","this.style.backgroundColor = '"+hcolor+"';")
    this.setAttribute("onmouseout","this.style.backgroundColor = '"+color+"';")
    this.setAttribute("onmousedown","this.style.backgroundColor = '"+ccolor+"';")
    this.setAttribute("onmouseup","this.style.backgroundColor = '"+hcolor+"';")
  }
}
customElements.define("styled-button", btn);
class icon extends HTMLElement {
  static observedAttributes = ["name","width","height","size"];

  constructor() {
    super();
  }
  connectedCallback() {
    if (this.hasAttribute("name")){
      var name = this.getAttribute("name");
    }
    else{
      var name = "default";
    }
    var img = document.createElement("img")
    img.src = "https://cdn.jsdelivr.net/gh/yarlagod/github-icons@main/"+name+".svg"
    if (this.hasAttribute("size")){
      img.style.width = this.getAttribute("size");
      img.style.height = this.getAttribute("size");
    }
    else{
      if (this.hasAttribute("width")){
        img.style.width = this.getAttribute("width");
      }
      if (this.hasAttribute("height")){
        img.style.height = this.getAttribute("height");
      }
    }
    this.appendChild(img)
  }
}
customElements.define("github-icon", icon);
