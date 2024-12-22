<?php
session_start(); // Iniciar a sessão

// Remover as variáveis de sessão
session_unset();
session_destroy();

// Retornar uma resposta JSON de sucesso
echo json_encode(["message" => "Logout realizado com sucesso"]);
?>
