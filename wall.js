class Wall
{
    constructor(posX)
    {
        this.sptx = posX;
        this.spty = height - random([300, 500]);
        this.spt = createSprite(this.sptx, this.spty);
        this.spt.shapeColor = "green";   
        this.spt.addAnimation("wall", wallAnimation);
        this.spt.scale = 0.08;
    }
}

