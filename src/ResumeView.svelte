<script lang="ts">
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    import Body from "./Body.svelte";

    let name = "Gilles Souton";
    let description = "Computer Science student";
</script>

<div
    id="resume-view"
    class="col-span-full m-auto relative font-roboto w-[21cm] h-[29.7cm] border"
>
    <Header {name} {description} />
    <Body />
    <Footer />
</div>
