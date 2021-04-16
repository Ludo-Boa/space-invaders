
class Sprite {
   constructor(filename, id, left, top) {
      this._node = document.createElement("img");
      this._node.setAttribute("id", id); 
      this._node.src = filename;
      this._node.style.position = "absolute";
      // this._node.style.left = left+"px";
      // this._node.style.top = top+"px";
      document.body.appendChild(this._node);

      Object.defineProperty(this, "left", {
         get: function(){
            return this._left;
         },
         set: function(value){
            this._left = value;
            this._node.style.left = value + "px";
         }
      });
   }
   
}
