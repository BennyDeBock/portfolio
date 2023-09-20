<template>
    <div>
        <nav>
            <NuxtLink class="link" to="/">Home</NuxtLink>
            <NuxtLink class="link" to="/blog">Blog</NuxtLink>
            <NuxtLink class="link" to="/release-notes">Release notes</NuxtLink>
        </nav>
        <div class="container">
            <slot />
        </div>
    </div>
    <FooterComponent></FooterComponent>
</template>

<style>
.link {
    margin-right: 1rem;
}
</style>