function toggleMode() {
  const html = document.documentElement

 /* Maneira de executar a função de "liga e desligar" os modos "Dark" e "Light" (IF, ELSE) 

  if (html.classList.contains('light')) {
  html.classList.remove('light')
  } else {
  html.classList.add('light')
  }  
  
  */

 // De uma forma simplificada... 

 html.classList.toggle("light")
} 



