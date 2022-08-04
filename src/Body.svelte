<script lang="ts">
    import Education from "./Education";
    import EducationList from "./EducationList.svelte";

    import Experience from "./Experience";

    import ExperienceList from "./ExperienceList.svelte";
    import type LanguageSkill from "./Interfaces";
    import Project from "./Project";
    import ProjectList from "./ProjectList.svelte";
    import SkillList from "./SkillList.svelte";
    import TimeSpan from "./TimeSpan";

    let advancedSkills = ["C", "C#", "Git", "Java", "Unix", "Python"];
    let intermediateSkills = ["Rust", "OpenMP", "C++", "Spring", "Vue", "SQL"];
    let basicSkills = ["Ocaml", "Docker", "Svelte", "React"];

    let languages: LanguageSkill[] = [
        { lang: "English", level: "C1" },
        { lang: "French", level: "C2" },
        { lang: "German", level: "A2" },
    ];

    let projects: Project[] = [
        new Project(
            "Perlin noise and procedural generation",
            "Proceduraly generated terrain",
            ["Javascript", "Three.js"]
        ),
        new Project("Image Gallery", "Single Web Page application", [
            "Java",
            "MySQL",
            "Javascript",
            "Vue",
            "Spring",
            "Docker",
            "Html",
            "Css",
        ]),
        new Project("Abelian Sandpile", "Simulation of abelian sandpile", [
            "C",
            "OpenMP",
        ]),
    ];

    let experiences = [
        new Experience(
            new TimeSpan("August 2021", "present"),
            "Software Developer",
            "Tentamus Group - Germany, Berlin",
            "My role is to implement new features and improve existing workflows.\nI mainly use Java, SQL and Python.",
        ),
    ];

    let educations = [
        new Education(
            new TimeSpan("August 2021", "present"),
            "Master of Software Engineering",
            "University of Bordeaux - France"
        ),
        new Education(
            new TimeSpan("September 2018", "2021"),
            "Bachelor of Computer Science",
            "University of Bordeaux - France"
        ),
    ];
</script>

<div id="resume-body" class="px-14">
    <ExperienceList {experiences} />
    <EducationList {educations} />
    <SkillList
        {advancedSkills}
        {intermediateSkills}
        {basicSkills}
        {languages}
    />
    <ProjectList {projects} />
</div>
