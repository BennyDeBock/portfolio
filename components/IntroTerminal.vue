<template>
  <div id="terminal-container">
    <button>Skip Intro</button>
    <code id="terminal" ref="terminal" />
  </div>
</template>

<script setup lang="ts">
let indexBeforeLoading = 0
const textBeforeLoading = [
  'Initializing portfolio...',
  'Loading sections...',
]

let indexAfterLoading = 0
const textAfterLoading = [
  'Loading sections...done ✔',
  'Booting GUI...'
]

let sectionsIndex = 0
const sections = [
  { name: "Introduction", size: 1629 },
  { name: "Skills", size: 3238 },
  { name: "Work Experience", size: 5094 },
  { name: "Education", size: 2367 },
  { name: "Projects", size: 5116 },
  { name: "Contact", size: 791 },
]

function WriteNextLine() {
  if (indexBeforeLoading < textBeforeLoading.length) {
    writeFullLine(textBeforeLoading[indexBeforeLoading++], WriteNextLine)
  }
  else if (sectionsIndex === 0) {
    let completed = 0
    sections.forEach((section, index) => {
      animateSectionProgress(section, index, () => {
        completed++
        if (completed === sections.length) {
          WriteNextLine()
        }
      })
    })
    sectionsIndex = sections.length  // Prevent re-trigger
  }
  else if (indexAfterLoading < textAfterLoading.length) {
    writeFullLine(textAfterLoading[indexAfterLoading++], WriteNextLine)
  }
}

async function InitialisePortfolio(callback: () => void) {
  await new Promise(r => setTimeout(r, 1000));
  const command = './init-portfolio --user=benny'
  let i = 0;

  const interval = setInterval(() => {
    terminal.value.innerHTML += command[i++]

    if (i >= command.length) {
      clearInterval(interval)
      terminal.value.innerHTML += '\n'
      setTimeout(callback, Math.random() * 400 + 300)
    }
  }, 25);
}

function writeFullLine(line: string, callback: () => void) {
  const currentLine = document.createElement('p')
  currentLine.textContent = line
  terminal.value.appendChild(currentLine)

  const delay = Math.random() * 400 + 300  // 300–700ms
  setTimeout(callback, delay)
}

function animateSectionProgress(section: { name: string, size: number }, index: number, onComplete: () => void) {
  const max = 2.
  const min = 1.5
  const line = document.createElement('p')
  terminal.value.appendChild(line)

  const total = 10
  let progress = 0
  const interval = setInterval(() => {
    const bar = '='.repeat(progress).padEnd(total, ' ')
    line.innerHTML = `(${index + 1}/${sections.length}) ${section.name.padEnd(20)} ${section.size.toString().padStart(4)}kB [${bar}] ${Math.floor((progress / total) * 100)}%`

    progress++
    if (progress > total) {
      clearInterval(interval)
      line.innerHTML = `(${index + 1}/${sections.length}) ${section.name.padEnd(20)} ${section.size.toString().padStart(4)}kB [==========>] 100%`
      onComplete()
    }
  }, (Math.random() * (max - min) + min) * (section.size / 40))
}


const terminal = useTemplateRef('terminal')

onMounted(() => {
  terminal.value.innerHTML += '[root@bdebock.dev ~]$ '
  InitialisePortfolio(WriteNextLine)
})

// Animation to GUI
</script>

<style lang="css">
#terminal-container {
  width: 100vw;
  height: 100vh;
  background-color: #212121;
  color: #fff;
}

#terminal {
  display: block;
  font-family: 'Source Code Pro';
  max-width: 800px;
  margin: 0 auto;
}
</style>