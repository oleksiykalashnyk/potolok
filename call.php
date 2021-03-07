<?php
    if(isset($_POST['submit'])){
        $to  = 'olek.kalashnyk@gmail.com';
        $subject = 'На сайте заказан звонок';
        $message = $_POST['name'] . '<br />' . $_POST['tel'];
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 
        mail($to, $subject, $message, $headers);
        
        echo'
            <script>
                window.onload = function() {
                    alert("Спасибо! Мы скоро с вами свяжемся!");
                    location.href = "index.html";  
                }   
            </script>';
    }
?>
