class Food {

constructor(){
   this.foodStock;
    this.lastFed;
    this.image = loadImage("Milk.png");
}

getFoodStock(){
    var foodStockRef = database.ref('foodStock');
    foodStockRef.on("value",(data)=>{
      foodStock = data.val();
    })
} 

updateFoodStock(count){
  database.ref('/').update({
    foodStock: count
  });

} 

deductFood(){

if(foodStock!==0){

foodStock=foodStock-1;


}
    
}

display(){

var x=80,y=100;

imageMode(CENTER);
image(this.image,720,220,70,70);

if(this.foodStock!==0){

for(var i=0;i<this.foodStock;i++){

if(i%10==0){

x=80;
y=y+50;

}

image(this.image,x,y,50,50);
x=x+30;


}



}


}


}