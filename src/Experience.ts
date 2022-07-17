import TimeSpan from "./TimeSpan";

class Experience {
    timeSpan: TimeSpan;
    position: string;
    location: string;

    constructor(timeSpan: TimeSpan, position: string, location: string){
        this.timeSpan = timeSpan;
        this.position = position;
        this.location = location;
    }

}

export default Experience;
