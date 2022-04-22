(() =>{
  const form = document.querySelector('.dados-do-livro')
  const title= document.querySelector('.titulo')
  const pages = document.querySelector('.pagina')
  const author = document.querySelector('.autor');
  const reader = document.querySelector('.leitura')
  const myLibrary =[];

  form.addEventListener('submit', (e) =>{
    e.preventDefault()
    
    if(title.value === '' && pages.value === '' &&  author.value === ''){
      alert ('Preencha todos os campos obrigatórios!');
      return
    }

  
     function Book(title, author, pages, reader){
            this.title = title
            this.autor = author
            this.page = pages
            this.leitotr = reader
     }

    const addBook = (title.value, author.value, pages.value, reader.value);
      myLibrary.push(addBook)
      console.log(myLibrary)
    
    
  })

  

  

})()