<script lang="ts">
    export let name: string;
    export let description: string;
</script>

<header class="w-full flex bg-header-blue">
    <div class="title p-10 basis-11/12">
        <h1 class="text-3xl tracking-widest font-bold text-white">
            {name.toUpperCase()}
        </h1>
        <h2 class="text-md font-bold text-dark-aqua">
            {description}
        </h2>

        <div class="flex align-middle gap-1 pt-2 text-sm">
            <!-- <img src="icons/mail.svg" alt="mail icon" /> -->

            <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M20 20H4C2.89543 20 2 19.1046 2 18V5.913C2.04661 4.84255 2.92853 3.99899 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20ZM4 7.868V18H20V7.868L12 13.2L4 7.868ZM4.8 6L12 10.8L19.2 6H4.8Z"
                    fill="#ffffff"
                />
            </svg>
            
            <a class="text-white" href="mailto:email@gmail.com">gilles.souton.work@gmail.com</a>
        </div>
    </div>

    <img
        class="mr-12 mt-6 w-40 h-auto rounded-full z-10 mx-auto border-4 border-light-blue"
        src="picture.jpg"
        alt="Resume picture"
    />

    <!-- <hr class="absolute w-full p-[1px] top-32 my-2 bg-white -z-1" /> -->
    <hr
        class="absolute w-full p-[2px] h-[2.5rem] top-[8.6rem] my-2 bg-white -z-1"
    />
</header>
