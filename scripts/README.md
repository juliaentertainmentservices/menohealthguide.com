# Article automation

This folder is reserved for the daily article generator.

The production version will:
1. Read the next unused topic from `data/topics.json`.
2. Generate a structured article.
3. Validate required fields and safety rules.
4. Write `articles/<slug>.html`.
5. Update the article index and sitemap.
6. Commit the changes so GitHub Pages publishes them.

Do not add AI API keys to repository files. Secrets belong in GitHub repository Actions secrets.
