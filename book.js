const form = document.getElementById('add-book-form');
const bookList = document.getElementById('book-list');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    const newBookHtml = `
        <li>
            <div class="book-card">
                <h3>${title}</h3>
                <p>${description}</p>
            </div>
        </li>
    `;

    bookList.insertAdjacentHTML('beforeend', newBookHtml);

    form.reset();
})