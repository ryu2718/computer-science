class GeneralizedHarmonic{
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    calculate(){
        let sum = 0;
        for(let i = 1; i <= this.num1; i++){
            sum += 1 / (Math.pow(i, this.num2))
        };
        console.log(sum);
    }
}

class BandMatrix{
    constructor(flame, dis){
        this.flame = flame;
        this.dis = dis;
    }

    bandmatrix(){
        for(let i = 0; i < this.flame; i++){
            let line = "";
            for(let j = 0; j < this.flame; j++){
                if( i - this.dis <= j && j <= i + this.dis){
                    line += "* "
                } else {
                    line += "0 "
                }
            };
            console.log(line.slice(0, -1));
        }
    }
}

class RandomWalker{
    constructor(dis){
        this.dis = dis;
    }

    walk(){
        let count = 0;
        let x = 0;
        let y = 0;
        while(Math.abs(x) + Math.abs(y) != this.dis){
            console.log(`(${x}, ${y})`)
            count += 1
            let rand = Math.random()
            if(rand < 0.25){
                x += 1;
            } else if(rand < 0.5){
                y += 1;
            } else if(rand < 0.75){
                x -= 1;
            } else {
                y -= 1;
            }
        };
        console.log(`(${x}, ${y})`);
        console.log(`steps = ${count}`);
    }
}

class RandomWalkers{
    constructor(dis, trial){
        this.dis = dis;
        this.trial = trial;
    }

    try(){
        let sum = 0;
        for(let i = 0; i < this.trial; i++){
            let x = 0;
            let y = 0;
            let count = 0;
            while(Math.abs(x) + Math.abs(y) != this.dis){
                count += 1
                let rand = Math.random()
                if(rand < 0.25){
                    x += 1;
                } else if(rand < 0.5){
                    y += 1;
                } else if(rand < 0.75){
                    x -= 1;
                } else {
                    y -= 1;
                };
            };
            sum += count;
        };
        const ans = sum / this.trial;
        console.log(`average number of steps = ${ans}`);
    }
}
