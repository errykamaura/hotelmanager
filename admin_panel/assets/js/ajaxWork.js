

function showTamu(){  
    $.ajax({
        url:"./adminView/viewTamu.php",
        method:"post",
        data:{record:1},
        success:function(data){
            $('.allContent-section').html(data);
        }
    });
}
function showKamar(){  
    $.ajax({
        url:"./adminView/viewKamar.php",
        method:"post",
        data:{record:1},
        success:function(data){
            $('.allContent-section').html(data);
        }
    });
}

function showPenyewaan(){  
    $.ajax({
        url:"./adminView/viewPenyewaan.php",
        method:"post",
        data:{record:1},
        success:function(data){
            $('.allContent-section').html(data);
        }
    });
}

function showDetailPenyewaan(){
    $.ajax({
        url:"./adminView/viewDetailPenyewan.php",
        method:"post",
        data:{record:1},
        success:function(data){
            $('.allContent-section').html(data);
        }
    });
}

//add tamu data
function addTamu(){
    var nama=$('#nama').val();
    var alamat=$('#alamat').val();
    var nomor_kontak=$('#nomor_kontak').val();

    var fd = new FormData();
    fd.append('nama', nama);
    fd.append('alamat', alamat);
    fd.append('nomor_kontak', nomor_kontak);
    $.ajax({
        url:"./controller/addTamuController.php",
        method:"post",
        data:fd,
        processData: false,
        contentType: false,
        success: function(data){
            alert('Product Added successfully.');
            $('form').trigger('reset');
            showTamu();
        }
    });
}

//edit product data
function tamuEditForm(id){
    $.ajax({
        url:"./adminView/editTamuForm.php",
        method:"post",
        data:{record:id},
        success:function(data){
            $('.allContent-section').html(data);
        }
    });
}

// update tamu after submit
function updateTamu() {
    var id_tamu = $('#id_tamu').val();
    var nama = $('#nama').val();
    var alamat = $('#alamat').val();
    var nomor_kontak = $('#nomor_kontak').val();

    $.ajax({
        url: './controller/updateTamuController.php',
        method: 'post',
        data: {
            id_tamu: id_tamu,
            nama: nama,
            alamat: alamat,
            nomor_kontak: nomor_kontak
        },
        success: function(data) {
            alert('Data Update Success.');
            $('form').trigger('reset');
            showProductItems();
        },
        error: function(xhr, status, error) {
            console.error('AJAX error: ' + status + ' ' + error);
            alert('Error updating data. Check the console for details.');
        }
    });
}

//delete tamu data
function tamuDelete(id){
    $.ajax({
        url:"./controller/deleteTamuController.php",
        method:"post",
        data:{record:id},
        success:function(data){
            alert('Items Successfully deleted');
            $('form').trigger('reset');
            showTamu();
        }
    });
}

//delete kamar data
function kamarDelete(id){
    $.ajax({
        url:"./controller/kamarDeleteController.php",
        method:"post",
        data:{record:id},
        success:function(data){
            alert('Category Successfully deleted');
            $('form').trigger('reset');
            showKamar();
        }
    });
}

//delete penyewaan data
function penyewaanDelete(id){
    $.ajax({
        url:"./controller/deletePenyewaanController.php",
        method:"post",
        data:{record:id},
        success:function(data){
            alert('Successfully deleted');
            $('form').trigger('reset');
            showPenyewaan();
        }
    });
}

//edit penyewaan data
function penyewaanEditForm(id){
    $.ajax({
        url:"./adminView/editPenyewaanForm.php",
        method:"post",
        data:{record:id},
        success:function(data){
            $('.allContent-section').html(data);
        }
    });
}


//update penyewaan after submit
function updatePenyewaan(){
    var id_penyewaan = $('#id_penyewaan').val();
    var tanggal = $('#tanggal').val();
    var tarif = $('#tarif').val();
    var tamu_id_tamu = $('#tamu_id_tamu').val();
    var fd = new FormData();
    fd.append('id_penyewaan', id_penyewaan);
    fd.append('tanggal', tanggal);
    fd.append('tarif', tarif);
    fd.append('tamu_id_tamu', tamu_id_tamu);
   
    $.ajax({
      url:'./controller/updatePenyewaanControllerr.php',
      method:'post',
      data:fd,
      processData: false,
      contentType: false,
      success: function(data){
        alert('Update Success.');
        $('form').trigger('reset');
        showPenyewaan();
      }
    });
}