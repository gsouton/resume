<script lang="ts">
    import type LanguageSkill from "./Interfaces";

    export let advancedSkills: string[];
    export let intermediateSkills: string[];
    export let basicSkills: string[];
    export let languages: LanguageSkill[];
</script>

<div class="my-3 w-full">
    <h1 class="text-lg font-bold col-span-full">Skills</h1>
    <div class="pl-4">
        <h2 class="py-1 text-md font-bold">Computer Science:</h2>

        <div class="w-full grid py-1 gap-1 grid-cols-12">
            <ul id="AdvancedSkills" class="pl-4 col-span-4">
                <h2 class="text-md font-bold">Advanced</h2>
                {#each advancedSkills as skill}
                    <li class="p-[0.1rem]">{skill}</li>
                {/each}
            </ul>

            <ul id="IntermediateSkills" class="col-span-5">
                <h2 class="text-md font-bold">Intermediate</h2>
                {#each intermediateSkills as skill}
                    <li class="p-[0.1rem]">{skill}</li>
                {/each}
            </ul>

            <ul id="BasicSkills">
                <h2 class="text-md font-bold">Basic</h2>
                {#each basicSkills as skill}
                    <li class="p-[0.1rem]">{skill}</li>
                {/each}
            </ul>
        </div>

        <div class="py-1 grid gap-1 grid-cols-3">
            <h2 class="text-md font-bold ">Languages:</h2>
            <ul id="languages" class="flex gap-4 col-span-2">
                {#each languages as { lang, level }}
                    <li>{lang} ({level})</li>
                {/each}
            </ul>
        </div>
    </div>
</div>
