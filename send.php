<?php
    if(isset($_POST['submit'])){
        $to  = 'olek.kalashnyk@gmail.com';
        $subject = 'Заказ обратной связи с сайта';
        $message = $_POST['name'] . '<br />' . $_POST['tel'] . '<br />' . $_POST['request'];
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 
        mail($to, $subject, $message, $headers);
        print "<script>alert(\"Ваше письмо успешно отправлено!\");window.history.go(-1);</script>";
    }
?>
