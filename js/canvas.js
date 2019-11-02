class canvasElt {

constructor(contexte, canvasSelected, couleur)
{
  this.context = contexte;
  this.canvas = canvasSelected;
  this.color = couleur;
  this.lineWidth = 4;

}

initCanvas(){

        this.context.clearRect(0, 0, 250, 250);/*canvas vierge*/
        this.context.lineWidth = this.lineWidth;
        this.context.strokeStyle = this.color;
        this.canvas.style.display = "block";

        }


deplacement(e) {

    if(this.dragging === true){
        this.context.lineTo(e.offsetX, e.offsetY);
			  this.context.strokeStyle = this.color;
			  this.context.stroke();

        }
    }

appuie(e){
        this.dragging = true;
        }

relache(){
        sign++;
        this.dragging = false;
        this.context.beginPath();/*se desengage du chemin precedent*/
        }
        
    initEvent(){

        this.canvas.addEventListener("mousedown", function(e) {
          this.appuie(e);
        }.bind(this));

        this.canvas.addEventListener("mousemove", function(e) {
            this.deplacement(e);
        }.bind(this));

        this.canvas.addEventListener("mouseup", function() {
            this.relache();
        }.bind(this));

        }
}
