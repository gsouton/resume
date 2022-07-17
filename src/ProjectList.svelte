<script lang="ts">
    import type Project from "./Project";
    export let projects: Project[];
</script>

<div class="w-full my-3 mb-16">
    <h1 class="text-lg py-2 font-bold col-span-full">Projects</h1>
    <ul class="pl-4 grid grid-cols-12 gap-2">
        {#each projects as project}
            <li class="font-bold text-slate col-span-4">{project.name}</li>
            <li class="col-span-8">
                <h2 class="">{project.description}</h2>
                <h3 class="text-light-blue">{project.techStack}</h3>
            </li>
        {/each}
    </ul>
</div>
