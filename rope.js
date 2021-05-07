class rope{
    constructor(point1,point2,body1,body2){
        this.point1=point1
        this.point2=point2
     var options={
        bodyA:body1,bodyB:body2,
        pointB:{x:this.point1,y:this.point2}
     }
     this.rope=Constraint.create(options)
     World.add(world,this.rope)
    }
    
    display(){
        var pointA=this.rope.bodyA.position
        var pointB=this.rope.bodyB.position
        strokeWeight(2)

        var Anchor1X=pointA.x
        var Anchor1Y=pointA.y

        var Anchor2X=pointB.x+this.point1
        var Anchor2Y=pointB.y+this.point2
  
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}