console.log("Olá, viemos em paz!");

const http = require('http');

const server = http.createServer((req, res) => {

    // Principal
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Olá, página principal!');
    }

    // Status
    else if (req.url === '/status') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');

        const Principal = `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Status</title>
        </head>
        <body>
            <h1>Bem-vindo à página principal!</h1>
            <p>
                Aqui você pode fazer:
                <br>1. Nada
                <br>2. Nada
                <br>3. Nada
                <br>4. Nada
                <br>5. Nada
            </p>
        </body>
        </html>
        `;

        res.end(Principal);
    }

    // Erro 404
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');

        const errorPage = `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>Erro 404</title>
        </head>
        <body>
            <h1>Erro 404 - Página não encontrada</h1>
            <p>A página que tentou acessar não foi encontrada.</p>
            <a href="/status">Voltar para a página principal</a>
        </body>
        </html>
        `;

        res.end(errorPage);
    }
});

server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
