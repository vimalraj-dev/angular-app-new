<?php 
$filetxt = 'assets/js/data.json';
$formdata = array(
    'title'=> $_POST['title'],
    'image'=> $_POST['image'],
    'description'=> $_POST['description']);

$arr_data = array();  
$jsondata = file_get_contents($filetxt);
$arr_data = json_decode($jsondata, true);
$arr_data['data'][] = $formdata;
$jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);
file_put_contents('assets/js/data.json', $jsondata);

$form_state['redirect'] = false;

$name = $_FILES['file']['name'];

$tmpname = $_FILES['file']['tmp_name'];

if(isset($name) and !empty($name)){
    $location = 'assets/images/';      
            if(move_uploaded_file($temp_name, $location.$name)){
                echo 'File uploaded successfully';
            }
            else {
            echo 'You should select a file to upload !!';
        }
    }

// if ( 0 < $_FILES['file']['error'] ) {
//     echo 'Error: ' . $_FILES['file']['error'] . '<br>';
// }
// else {
//     move_uploaded_file($_FILES['file']['tmp_name'], 'images/' . $_FILES['file']['name']);
//     echo 'File updated successfully';
// }
?>