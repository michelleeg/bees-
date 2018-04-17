function flower(width, height, left, top, backgroundColor, borderRadius,id) {
    this.width = width;
    this.height = height;
    this.left = left;
    this.top = top;
    this.backgroundColor = backgroundColor;
    this.borderRadius = borderRadius;
    this.id = id;
    var elem = document.getElementById(this.id);
    this.render = function () {
        elem.style.top = this.height + 'px';
        elem.style.left = this.width + 'px';
    }
    var flower1= new flower (50, 50, 125, 200, "deeppink", 50%, "flower1");
    var flower2= new flower (50, 50, 175, 350, "deeppink", 50%, "flower2");
    var flower3= new flower (50, 50, 500, 150, "deeppink", 50%, "flower3");
    var flower4= new flower (50, 50, 400, 275, "deeppink", 50%, "flower4");
    var flower5= new flower (50, 50, 800, 300, "deeppink", 50%, "flower5");
    var flower6= new flower (50, 50, 650, 400, "deeppink", 50%, "flower6");
