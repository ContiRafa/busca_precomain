<?php
$servername = "localhost";
$username = "root";
$password = "159159";
$dbname = "precomain";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Receber dados do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = password_hash($_POST['senha'], PASSWORD_DEFAULT); // Criptografar a senha

// Inserir dados no banco de dados
$sql = "INSERT INTO usuarios (nome, email, senha) VALUES ('$nome', '$email', '$senha')";

if ($conn->query($sql) === TRUE) {
    echo "<script>
        localStorage.setItem('nome', '$nome');
        localStorage.setItem('email', '$email');
        localStorage.setItem('senha', '$senha');
        alert('Registro efetuado com sucesso!');
        window.location.href = 'login.html';
    </script>";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>