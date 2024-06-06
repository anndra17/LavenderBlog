document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts');
    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;

        const textElement = document.createElement('p');
        textElement.textContent = post.text;

        const imageElement = document.createElement('img');
        imageElement.src = post.photo;
        imageElement.classList.add('post-image');

        const usernameElement = document.createElement('p');
        usernameElement.textContent = `Username: ${post.username}`;
        usernameElement.classList.add('username');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function() {
            deletePost(index);
        });

        postElement.appendChild(titleElement);
        postElement.appendChild(textElement);
        postElement.appendChild(imageElement);
        postElement.appendChild(usernameElement);
        postElement.appendChild(deleteButton);

        postsContainer.appendChild(postElement);
    });
});

function deletePost(index) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts));
    location.reload(); 
}
