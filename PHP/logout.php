<?php
// Inicia a sessão
session_start();

// Verifica se há uma sessão ativa e destrói todas as variáveis de sessão
if (isset($_SESSION)) {
    ("aqui ainda tem sessao");
    session_unset(); // Remove todas as variáveis de sessão
    session_destroy(); // Destroi a sessão
}

// Fecha a conexão com o banco de dados, se necessário
// (este código é útil caso você precise fechar a conexão manualmente)
if (isset($conn)) {
    mysqli_close($conn); // Fecha a conexão com o banco de dados
}

// Redireciona o usuário para a página de login ou página inicial
header('Location: ../Html/login.html');
exit();
?>
