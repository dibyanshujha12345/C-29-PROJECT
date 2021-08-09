class Base {
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;

        var options ={
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        fill("brown"); 
        rect(this.x,this.y,this.width,this.height); 
    }
}