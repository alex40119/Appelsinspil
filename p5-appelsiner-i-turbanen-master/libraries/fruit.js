/*
 * Dette script definerer klassen Kurv
*/

class fruit {
    /* Den første del er en "konstruktør".
     * Den tager parametrene og konstruerer et nyt objekt 
     * ud fra dem. Værdierne huskes som hørende til netop 
     * dette objekt ved hjælp af nøgleordet this
     */
    constructor(fx, fy, fcol, fimg) {
        this.fx = fx;
        this.fy = fy;
        this.fcol = [255,140,0];
        this.fimg = fimg;
    }   
    
    /* Tegner frugten. Her kan evt. sættes et billede ind i stedet
     */
    tegn = function() {
        fill(this.fcol);
        ellipse(fx, fy, rad*2, rad*2);
        



} 
}