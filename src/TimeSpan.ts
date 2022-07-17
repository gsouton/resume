class TimeSpan {
    begin: string;
    end: string;
    constructor(begin: string, end: string){
        this.begin = begin;
        this.end = end;
    }

    toString(){
        return this.begin + " - " + this.end;
    }
}

export default TimeSpan;
