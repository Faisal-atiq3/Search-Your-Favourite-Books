const searchBook = () => {

    const searchField = document.getElementById('sharch-btn');

    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `http://openlibrary.org/search.json?q=${searchText}`

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchBooks(data.docs));

}


const displaySearchBooks = books => {

    const sharchResult = document.getElementById('search-result');
    sharchResult.textContent = ''
    books.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        
        <div class="card h-100 shadow-lg rounded ">
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top p-4" alt="...">
                  <div class="card-body ">
                <h2 class="card-title text-center">${book.title}</h2>
                <h4 class="card-title text-center" > Author Name: ${book.author_name}</h4>
                <br> 
                <h4 class="card-title text-center"> Publisher : ${book.publisher} </h4>
                <h5  class="card-title text-center" > 1st Publisher Year: ${book.first_publish_year}</h5>

         </div>
    </div>`
        sharchResult.appendChild(div);
    });



}