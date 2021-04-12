
function Sprite(filename, left, top) {
   this._node = document.createElement("img");
   this._node = filename;
   this._node.style.position = "absolute";
   document.body.appenChild(this._node);
}

