(() =>{
  const form = document.querySelector('.dados-do-livro')
  const title= document.querySelector('.titulo-do-livro')
  const pages = document.querySelector('.pagina-do-livro')
  const author = document.querySelector('.autor-do-livro');
  const reader = document.querySelector('.leitura')
  const myBook =[];

  form.addEventListener('submit', (e) =>{
    e.preventDefault()
    
    if(title.value === '' && pages.value === '' &&  author.value === ''){
      alert ('Preencha todos os campos obrigatórios!')
    }
    
  })

  

  

})()