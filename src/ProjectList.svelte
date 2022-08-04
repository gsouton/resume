<script lang="ts">
    import type Project from "./Project";
    export let projects: Project[];
</script>

<div class="w-full my-3 ">
    <h1 class="text-lg py-2 font-bold col-span-full">Projects</h1>
    <ul class="pl-4 grid grid-cols-12 gap-2">
        {#each projects as project, i}
            <li class="font-bold text-slate col-span-4">{project.name}</li>
            <li class="col-span-8">
                <h2 class="">{project.description}</h2>

                {#each project.techStack as tech, i}
                    {#if i < project.techStack.length - 1}
                        <span class="text-light-blue">{tech}, </span>
                    {:else}
                        <span class="text-light-blue">{tech}</span>
                    {/if}
                {/each}
            </li>
            {#if i < projects.length - 1}
                <hr class="col-span-full  bg-blue-gray" />
            {/if}
        {/each}
    </ul>
</div>
