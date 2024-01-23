<template>
  <nav v-if="links.length" class="toc" aria-label="Table of contents">
    <header @click="toggleToc" aria-label="Expand the table of contents.">
      <span class="aside-title">Table of Contents</span>
      <IconsChevronDown :class="[isVisible ? '' : 'rotate-180']" width="24" height="24"></IconsChevronDown>
    </header>
    <ul :class="[isVisible ? 'block' : 'hidden']">
      <li v-for="link of flattenLinks(links)" :class="`toc-link_${link.depth}`">
        <a :href="`#${link.id}`">{{ link.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
interface Link {
  id: string,
  depth: number,
  text: string,
  children?: Link[]
}
defineProps({
  links: {
    type: Array<Link>,
    required: true
  }
})

const flattenLinks = (links: Link[]) => {
  let _links = links.map((link: Link) => {
    let _link = [link]
    if(link.children) {
      let flattened = flattenLinks(link.children)
      _link = [link, ...flattened]
    }
    return _link
  }).flat(1)
  
  return _links
}

const isVisible = ref(true)
const toggleToc = () => {
  isVisible.value = !isVisible.value
}
</script>

<style scoped>
.toc {
  background-color: var(--background-colour-2);
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: .4rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid;
  margin-bottom: .5rem;
}
.block {
  display: block;
}

.hidden {
  display: none;
}

.toc-link_3 {
    padding-left: 1rem;
}
.toc-link_3::before {
    padding-right: .5rem;
    content: "-"
}

li {
  color: var(--text-colour-2);

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 3px;
    background-color: var(--accent-colour);
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
  }

  :hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  a {
    position: relative;
  }

  :hover {
    color: var(--text-colour);
  }
}

.aside-title {
  font-size: 1.2rem;
  font-weight: 600;
}

.rotate-180 {
  rotate: 180deg;
}
</style>