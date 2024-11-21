let titleInput = document.getElementById("title");
let contentInput = document.getElementById("content");
let createButton = document.getElementById("createArticle");
let articlesContainer = document.getElementById("articles");

function createArticle() {
    let title = titleInput.value.trim();
    let content = contentInput.value.trim();

    if (!title || !content) {
        alert("Errore: il titolo o il paragrafo non possono essere vuoti.");
        return;
    }

    let article = document.createElement("div");
    article.className = "articleWrap";

    let articleTitle = document.createElement("h2");
    articleTitle.textContent = title;

    let articleContent = document.createElement("p");
    articleContent.textContent = content;

    let date = new Date();
    let formattedDate = date.toLocaleDateString() + " " + date.toLocaleTimeString();
    let articleDate = document.createElement("div");
    articleDate.className = "date";
    articleDate.textContent = `Pubblicato il: ${formattedDate}`;
    articleDate.style.fontSize = "9px";

    article.appendChild(articleTitle);
    article.appendChild(articleContent);
    article.appendChild(articleDate);

    articlesContainer.appendChild(article);

    titleInput.value = "";
    contentInput.value = "";
}

    createButton.addEventListener("click", createArticle);