import { blogPosts } from './blog_posts.js';

const blogPostsContainer = document.getElementById('blogPostGrid');
const viewMoreButton = document.getElementById('viewMore');
let displayedPosts = 3;

function createBlogPostElement(post) {
    const article = document.createElement('article');
    article.className = 'blog-post';

    article.innerHTML = `
        <img src="images/${post.image}" alt="${post.title}">
        <div class="blog-post-content">
            <p class="date">${post.publication_date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <h3>${post.title}</h3>
            <p>${post.article}</p>
        </div>
    `;

    return article;
}

function displayBlogPosts() {
    blogPostsContainer.innerHTML = '';
    for (let i = 0; i < displayedPosts && i < blogPosts.length; i++) {
        const postElement = createBlogPostElement(blogPosts[i]);
        blogPostsContainer.appendChild(postElement);
    }

    if (displayedPosts >= blogPosts.length) {
        viewMoreButton.style.display = 'none';
    }
}

viewMoreButton.addEventListener('click', () => {
    displayedPosts += 3;
    displayBlogPosts();
});

displayBlogPosts();