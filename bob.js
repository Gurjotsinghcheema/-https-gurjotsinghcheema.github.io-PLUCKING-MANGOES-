class bob {
    constructor(x,y,r){
        var options={
        density:1.2,
        friction:0,
        restitution:0.3,
        isStatic:false
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push ()
        translate(pos.x,pos.y)
        fill(232,46,255);
        ellipse(0,0,this.r,this.r);
        pop()
    }
}