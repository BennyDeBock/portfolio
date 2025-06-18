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
    { name: "Introduction", size: 1629},
    { name: "Skills", size: 3238},
    { name: "Work Experience", size: 5094},
    { name: "Education", size: 2367},
    { name: "Projects", size: 5116},
    { name: "Contact", size: 791},
  ]

  function WriteNextLine(){
    if(indexBeforeLoading < textBeforeLoading.length){
      typeLine(textBeforeLoading[indexBeforeLoading++], WriteNextLine)
    } 
    else if (sectionsIndex < sections.length)
    {
      const section = sections[sectionsIndex++]
      const line = `(${sectionsIndex}/${sections.length}) ${section.name.padEnd(20)} ${section.size.toString().padStart(4)}kB [==========>] 100%`
      typeLine(line, WriteNextLine)
    }
    else if(indexAfterLoading < textAfterLoading.length){
      typeLine(textAfterLoading[indexAfterLoading++], WriteNextLine)
    }
  }

  function InitialisePortfolio(callback: () => void) {
    const command = './init-portfolio --user=benny'
    let i = 0;
    const interval = setInterval(() => {
      terminal.value.innerHTML += command[i++]

      if(i >= command.length) {
        clearInterval(interval)
        terminal.value.innerHTML += '\n'
        setTimeout(callback, Math.random() * 400 + 300)
      }
    }, 25);
  }

  function typeLine(line: string, callback: () => void) {
    let i = 0;

    const currentLine = document.createElement('p')
    terminal.value.appendChild(currentLine)
    const interval = setInterval(() => {
      terminal.value.innerHTML += line[i++]

      if(i >= line.length) {
        clearInterval(interval)
        setTimeout(callback, Math.random() * 400 + 300)
      }
    }, 25);
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