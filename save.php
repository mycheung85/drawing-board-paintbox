<?php

$data = $_POST['img'];
$data = str_replace('data:image/png;base64,', '', $data);
$data = str_replace(' ', '+', $data);
$img = base64_decode($data);
$path = './images'.unqid().'png';
if(file_put_contents($path, $img)) {
  print $path;
} else {
  header('HTTP/1.1 500 Internal Server Error');
}

?>