<?php
    include('/Applications/MAMP/htdocs/api/Requests/library/Requests.php');
    $request_method = $_SERVER['REQUEST_METHOD'];

    if ( $request_method == 'POST' ){
            if(isset($_POST['phone_num'])){
               echo $_POST['phone_num'];
            }else{
              echo json_encode('No phone number found');
            }
    }else {
        echo json_encode('No defined function for this method. Please use POST only');
    }
?>