<?php
$servername = "localhost";
$username = "root";
$password = "admin123";
$dbname = "precomain";
$port = "3312"; // Porta padrão do MySQL

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Receber dados do formulário
$email = $_POST['email'];
$senha = $_POST['senha'];

// Evitar SQL Injection
$email = $conn->real_escape_string($email);

// Verificar credenciais
$sql = "SELECT nome, senha FROM usuarios WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($senha, $row['senha'])) {
        $nome = $row['nome'];
        
        // Redirecionar com PHP
        header("Location: ../html/index.html");
        exit(); // Certifique-se de encerrar o script após redirecionar
    } else {
        echo "<script>
            alert('Senha incorreta!');
            window.location.href = '../html/login.html';
        </script>";
    }
} else {
    echo "<script>
        alert('Usuário não encontrado!');
        window.location.href = '../html/login.html';
    </script>";
}

$conn->close();
?>
