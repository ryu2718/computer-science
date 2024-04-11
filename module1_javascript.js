class HelloWorld{
    hello(){
        console.log("Hello, World")
    }
}

class HelloGoodbye{
    constructor(name1, name2){
        this.name1 = name1;
        this.name2 = name2;
    }

    hellogoodbye(){
        console.log(`Hello ${this.name1} and ${this.name2}.`)
        console.log(`Goodbye ${this.name2} and ${this.name1}.`)
    }
}

class RightTriangle{
    constructor(num1, num2, num3){
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
    }

    righttriangle(){
        const cond1 = this.num1 > 0 && this.num2 > 0 && this.num3 > 0;
        const pow1 = Math.pow(this.num1, 2);
        const pow2 = Math.pow(this.num2, 2);
        const pow3 = Math.pow(this.num3, 2);
        const cond2 = pow1 == pow2 + pow3 || pow2 == pow1 + pow3 || pow3 == pow1 + pow2;
        console.log(cond1 && cond2);
    }
}

class GreatCircle{
    constructor(x1, y1, x2, y2){
        this.x1 = this.convert(x1);
        this.y1 = this.convert(y1);
        this.x2 = this.convert(x2);
        this.y2 = this.convert(y2);
    }

    convert(num1){
        return num1 * (Math.PI / 180);
    }

    greatcircle(){
        const term1 = Math.pow(Math.sin((this.x2 - this.x1)/ 2), 2)
        const term2 = Math.cos(this.x1) * Math.cos(this.x2)
        const term3 = Math.pow(Math.sin((this.y2 - this.y1)/ 2), 2)
        const ans = 2 * 6371 * Math.asin(Math.sqrt(term1 + term2 * term3, 2))
        console.log(`${ans} kilometers`)
    }
}

class CMYKtoRGB{
    constructor(C, M, Y, K){
        this.C = C;
        this.M = M;
        this.Y = Y;
        this.K = K;
    }

    convert(){
        const white = 1 - this.K;
        const red = Math.round(255 * white * (1 - this.C));
        const green = Math.round(255 * white * (1 - this.M));
        const blue = Math.round(255 * white * (1 - this.Y));
        console.log(`red   = ${red}\ngreen = ${green}\nblue  = ${blue}`)
    }
}
