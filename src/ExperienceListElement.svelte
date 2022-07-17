<script lang="ts">
    import type ExperienceDescription from "./ExperienceDescription";

    import type TimeSpan from "./TimeSpan";
    export let timeSpan: TimeSpan;
    export let experienceDescription: ExperienceDescription;
</script>

<div class="grid gap-1 grid-cols-12">
    <svg
        class="col-span-1 justify-center justify-self-left"
        id="circle"
        width="32"
        height="32"
    >
        <circle
            cx="16"
            cy="16"
            r="8"
            stroke="black"
            stroke-width="2"
            fill="white"
        />
    </svg>
    <h2 class="col-span-4 text-slate">{timeSpan.begin} - {timeSpan.end}</h2>
    <div class="col-span-7">
        <h2 class="font-bold">{experienceDescription.description}</h2>
        <h3 class="text-light-blue">{experienceDescription.location}</h3>
    </div>
</div>
