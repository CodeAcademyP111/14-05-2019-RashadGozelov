var Car = function (marka, model, year, bak, consumption) {
    this.marka = marka,
        this.model - model,
        this.year = year,
        this.bak = bak,
        this.consumption = consumption,
        this.initialFullLevel = 0;
    this.endFullLevel = function (km) {

        var endfull = this.initialFullLevel - this.initialFullLevel * km / 100
        if (endfull >= 0) {
            return endfull
        } else {
            return "kifayet qeder benzin yoxdur"
        }
    },
     this.petrol=function(litr){
         if(litr<this.bak-this.initialFullLevel){
             return "tam dolmayib"
         }else if(litr==this.bak-this.initialFullLevel){
             return "tam doludur"
         }else{
             return "dasdi"
         }
     }
}




var mercedes= new Car("Mercedes","E-class","black",75,20);
mercedes.initialFullLevel=40;
console.log(mercedes.petrol(45))
