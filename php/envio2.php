.<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/Exception.php';
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';


    if (isset($_POST['casamodelo_hidden'])) {
        $casamodelo = $_POST['casamodelo_hidden'];
    } else {
        $casamodelo = ""; // Valor predeterminado si no se selecciona ningún radio button
    }
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombres = $_POST["nombres"];
        $email = $_POST["email"];
        $numero = $_POST["numero"];
        $fechah = $_POST["fechah"];




        //Create an instance; passing `true` enables exceptions
        $mail = new PHPMailer(true);

        try {


            //Server settings
            $mail->SMTPDebug = 0;                      //Enable verbose debug output
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'pamela2000.mont@gmail.com';                     //SMTP username
            $mail->Password   = 'xsmmalooxhrdxahi';                               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
            $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

            //Recipients
            $mail->setFrom('pamela2000.mont@gmail.com', 'Pamela');
            $mail->addAddress($email, $nombres);     //Add a recipient
            //Name is optional

            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = 'Gracias Por Solicitar Una Visita A  Tu Futuro Hogar';
            $mail->Body    = 'Gracias por leer nuestro correo. 
	 ":</b> <br> "Con mucho gusto te atenderemos.  ' . $nombres . ' En el siguiente horario: ' . $fechah . '
	 Te contaremos de los mejores planes de financiamiento para <b>¡Tu Casa Nueva! </b>  <b>Modelo </b> ' . $casamodelo . '  De acuerdo a que hemos validado tu información personal  nos pondremos en contacto contigo a través de tu número celular (+593)</b>' . $numero . '.
		<br>
		<br>
		<b>Atentamente : Asesor Comercial HOME TOKEN</b>';



            $mail->send();
            echo "El formulario se ha enviado correctamente.";
        } catch (Exception $e) {
            echo "Mensaje de error: {$mail->ErrorInfo}";
        }
    }
    ?>