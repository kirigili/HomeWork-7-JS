let Time = function(name){
    this.get = function(){
        this.name = name;
        this.V = +prompt('Введите объём воды');
        this.P = +prompt('Введите мощность' + ' ' + this.name + 'а');
        this.c = 4.19;
        if(confirm('Включить'+ ' ' + this.name + '?')){
            this.workTime = 1;
        } else {
            this.workTime = 0;
        }
        
        this.operation();
    };

    this.operation = function(){
        this.result = (this.V * this.c) / this.P;

        this.show();
    };

    this.show = function(){
        if(this.workTime == 0){
            console.log(this.name + ' не включен')
        } else{
            console.log(this.name + ' закипает за ' + this.result + ' мин')
        }
    };
};

let time1 = new Time('Чайник');
time1.get();

let time2 = new Time('Самовар');
time2.get();

let time3 = new Time('Кипятильник');
time3.get();

let totalTime = time1.result + time2.result + time3.result;
console.log('Общее время закипания воды состовляет ' + totalTime + ' мин');
