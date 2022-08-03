<script lang="ts">
    import type Education from "./Education";
    export let educations: Education[];
</script>

<div class="w-full ">
    <h1 class="text-lg font-bold col-span-full">
        Education
    </h1>

    <div class="w-full p-2 ">
        <ul class="grid grid-cols-12 gap-1">
            {#each educations as exp}
                <li class="text-slate col-span-4">{exp.timeSpan.toString()}</li>
                <div class="col-span-6">
                    <li class="font-bold col-span-4">{exp.position}</li>
                    <li class="text-light-blue col-span-4">{exp.location}</li>
                </div>
            {/each}
        </ul>
    </div>
</div>
