class Ninja {
    constructor (nombre){
        this.nombre = nombre;
        this.vida = 100;
        this.velocidad = 3;   //debe ser privada
        this.fuerza = 3;      //debe ser privada
    }
    sayName(){
        console.log("el nombre de mi ninja es " + this.nombre);
    }    
    showStats(){
        console.log("Nombre: " + this.nombre + ", vida: " + this.vida + ", Velocidad: " + this.velocidad + ", Fuerza: " + this.fuerza);
       
    }
    drinkSake(){
        this.vida = this.vida + 10;
        console.log("El ninja " + this.nombre + " ha bebido sake, ahora posee " + this.vida + " de vida");
    }
}
let ninja1 = new Ninja ("NinjaGaiden");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.drinkSake();
