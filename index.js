(() =>{
  const form = document.querySelector('.dados-do-livro')
  const title= document.querySelector('.titulo')
  const pages = document.querySelector('.pagina')
  const author = document.querySelector('.autor');
  const reader = document.querySelector('.leitura')
  const myLibrary =[];

  form.addEventListener('submit', (e) =>{
    e.preventDefault()
    
    const myBook = (msg)=>{
        const objeto = document.querySelector('.library');
        const div = document.createElement('div');
        div.classList.add('meu-livro')
        div.textContent = msg
        objeto.appendChild(div)
      }
    
    if(title.value === '' && pages.value === '' &&  author.value === ''){
      alert ('Preencha todos os campos obrigatórios!');
      return
    }

  
     function Books(title, author, pages, reader){
            this.titulo = title
            this.autor = author
            this.paginas = pages
            this.leitor = reader
     }

    const addBook = new Books (title.value, author.value, pages.value, reader.value);
      myLibrary.push(addBook)

      for( book of myLibrary){
          myBook(book.leitor, book.paginas)
        }
      }
     

      
    
    
  )
})()