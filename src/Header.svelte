<script lang="ts">
    export let name: string;
    export let description: string;
</script>

<header class="w-full flex bg-header-blue">
    <div class="title p-14 basis-11/12">
        <h1 class="text-3xl tracking-widest font-bold text-white">
            {name.toUpperCase()}
        </h1>
        <h2 class="text-md font-bold text-dark-aqua">
            {description}
        </h2>
    </div>

    <img
        class="mr-12 mt-6 w-40 h-auto rounded-full z-10 mx-auto border-4 border-light-blue"
        src="picture.svg"
        alt="Resume picture"
    />

    <hr class="absolute w-full p-[2px] top-32 my-2 bg-white -z-1" />
    <hr
        class="absolute w-full p-[2px] h-[2.5rem] top-[8.6rem] my-2 bg-white -z-1"
    />
</header>
