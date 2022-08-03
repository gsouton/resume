import TimeSpan from "./TimeSpan";

class Experience {
    timeSpan: TimeSpan;
    position: string;
    location: string;
    description: string;

    constructor(timeSpan: TimeSpan, position: string, location: string, description: string){
        this.timeSpan = timeSpan;
        this.position = position;
        this.location = location;
        this.description = description;
    }

}

export default Experience;
