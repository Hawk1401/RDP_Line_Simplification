class RDP{
    RDP(KomplexLine, n, ){
        this.n = n;
        this.KomplexLine = KomplexLine;
        this.simpleLineIndex = [];
    }
    Simplifia(startIndex, endIndex){
        let MaxDis = 0;
        for(let i = 0; i < startIndex - endIndex;i++){
            let r =getFarAwayPoint(KomplexLine[startIndex], KomplexLine[endIndex], KomplexLine[i]);
            if(r > MaxDis){
                MaxDis = r;
            }
        }
        let SimplePointIndex;
        Simplifia(startIndex, SimplePoint)
        Simplifia(SimplePoint ,endIndex);
        return 
    }
    getFarAwayPoint(startLine, endLine, Point) {
        let point1 = startLine;  
        let point2 = endLine;
        let Point3 = Point;
        //lotgerade
        let lotPoint = createVector(point.y , -1 * point.x);

        //point1.x + t * point2.x = point3.x + r * lotPoint.x; 
        //point1.y + t * point2.y = point3.y + r * lotPoint.y;
        //
        //x1 + t * x2 = x3 + r * x4
        //t = (y3 + (r * y4) - y1) / y2
        //
        //x1 + ((y1 - y3 + (y4*r)) / y2) * x2 = x3 + r * x4
        //
        let r = nerdamer.solve(point1.x + ("point1.y - point3.y + (lotPoint.y*r)) / point2.y) * point2.x = point3.x + r * lotPoint.x" , "r"));
        r = r.toString();
        let x = point3.x + r * lotPoint.x;
        let y =  point3.y + r * lotPoint.y;
        let intersectionPoint = createVector(x, y);
        intersectionPoint.sub(lotPoint);
        intersectionPoint.length();
        console.log(r);
    }
    clalc(){

    }

}