# SPA Comments on Vue

    mkdir -p projects_from_github
    cd projects_from_github
    git clone https://github.com/avtarso/spa_comments_app_vue
    cd spa_comments_app_vue
    npm install
    kill -9 $(lsof -t -i:5173)
    npm run dev