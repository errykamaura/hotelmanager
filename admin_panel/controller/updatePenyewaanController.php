<?php
    include_once "../config/dbconnect.php";

    $ID=$_POST['record'];
    //echo $order_id;
    $sql = "SELECT * from penyewaan where id_penyewaan='$ID'"; 
    $result=$conn-> query($sql);
  //  echo $result;

    $row=$result-> fetch_assoc();
    
   // echo $row["pay_status"];
    

    $id_penyewaan=$_POST['id_penyewaan'];
    $tanggal= $_POST['tanggal'];
    $tarif= $_POST['tarif'];
    $tamu_id_tamu= $_POST['tamu_id_tamu'];
   
    $updateItem = mysqli_query($conn, "UPDATE penyewaan SET 
    tanggal='$tanggal', 
    tarif='$tarif' 
    WHERE id_penyewaan='$id_penyewaan' AND tamu_id_tamu='$tamu_id_tamu'");


if($updateItem) {
    echo "true";
} else {
    echo "false";
}
?>