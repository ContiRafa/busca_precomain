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
$email = $_POST['email'];
$senha = $_POST['senha'];

// Verificar credenciais
$sql = "SELECT nome, senha FROM usuarios WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($senha, $row['senha'])) {
        $nome = $row['nome'];
        echo "<script>
            localStorage.setItem('nome', '$nome');
            localStorage.setItem('email', '$email');
            localStorage.setItem('senha', '$senha');
            document.body.innerHTML += 
            <div id='modal-success' style='
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: #4CAF50;
                color: white;
                padding: 20px;
                border-radius: 10px;
                text-align: center;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            '>
                Login efetuado com sucesso!
            </div>;
            setTimeout(() => {
                window.location.href = 'conta.html';
            }, 2000);
        </script>";
    } else {
        echo "<script>
            alert('Senha incorreta!');
            window.location.href = 'login.html';
        </script>";
    }
} else {
    echo "<script>
        alert('Usuário não encontrado!');
        window.location.href = 'login.html';
    </script>";
}

$conn->close();
?>