class Project {
    name: string;
    description: string;
    techStack: string[];

    constructor(name: string, description: string, techStack: string[]){
        this.name = name;
        this.description = description;
        this.techStack = techStack;
    }
}

export default Project;
