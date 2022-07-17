<script lang="ts">
    import Experience from "./Experience";

    import ExperienceList from "./ExperienceList.svelte";
    import type LanguageSkill from "./Interfaces";
    import Project from "./Project";
    import ProjectList from "./ProjectList.svelte";
    import SkillList from "./SkillList.svelte";
    import TimeSpan from "./TimeSpan";

    let advancedSkills = ["C", "Git", "Java", "Unix", "Python"];
    let intermediateSkills = [
        "Rust",
        "OpenMP",
        "C++",
        "C#",
        "Spring",
        "Vue",
        "SQL",
    ];
    let basicSkills = ["Ocaml", "Docker", "Svelte", "React"];

    let languages: LanguageSkill[] = [
        { lang: "English", level: "C1" },
        { lang: "Spanish", level: "B2" },
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
        new Project(
            "Abelian Sandpile",
            "Simulation of abelian sandpile using OpenMP and OpenCL",
            ["C, Python"]
        ),
        new Project("Game of life", "Simulation of abelian sandpile", [
            "C, Python",
        ]),
        new Project("Game", "Tic tac toe", ["Go"]),
    ];

    let experiences = [
        new Experience(
            new TimeSpan("September 2021", "present"),
            "Degree or work experience",
            "Location"
        ),
        new Experience(
            new TimeSpan("September 2018", "2021"),
            "Degree or work experience",
            "Location"
        ),

        new Experience(
            new TimeSpan("September 2017", "2018"),
            "Degree or work experience",
            "Location"
        ),
    ];
</script>

<div id="resume-body" class="px-14 py-1">
    <ExperienceList {experiences} />
    <SkillList
        {advancedSkills}
        {intermediateSkills}
        {basicSkills}
        {languages}
    />
    <ProjectList {projects} />
</div>
