<?php
$servername = "localhost:3312";
$username = "root";
$password = "admin123";
$dbname = "precomain"; // Porta padrão do MySQL

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Receber dados do formulário
$email = $_POST['email'] ?? '';
$senha = $_POST['senha'] ?? '';


// Evitar SQL Injection
$email = $conn->real_escape_string($email);

// Verificar credenciais
$sql = "SELECT nome, senha FROM usuarios WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($senha, $row['senha'])) {
        $nome = $row['nome'];

        // Incluir dados no localStorage via JavaScript
        echo "
        <script>
            // Armazenar informações no localStorage
            localStorage.setItem('nome', '$nome');
            localStorage.setItem('email', '$email');
            localStorage.setItem('senha', '$senha');
        </script>";

        // Redirecionar para a página inicial com PHP
        header("Location: ../HTML/index.html");
        exit(); // Encerrar o script após o redirecionamento
    } else {
        // Senha incorreta
        echo "
        <script>
            alert('Senha incorreta!');
            window.location.href = '../HTML/login.html';
        </script>";
    }
} else {
    // Usuário não encontrado
    echo "
    <script>
        alert('Usuário não encontrado!');
        window.location.href = '../HTML/login.html';
    </script>";
}

// Fechar conexão com o banco de dados
$conn->close();
?>