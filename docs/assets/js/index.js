$(document).ready(function () {

    AOS.init();

    // var count = 0;
    // to get and display the JSON data from data.json
    // function getData() {
    //     $.getJSON("assets/js/data.json", function (response) {
    //         $.each(response.data, function (index, formData) {
    //             var desc = $('<div>');
    //             desc.addClass('col serviceDiv');
    //             desc.attr('id', "serviceDiv" + count);
    //             count++;
    //             var vector = $('<div>');
    //             vector.addClass('services');
    //             var serviceContent = $('<div>');
    //             serviceContent.addClass('service-content');
    //             var img = $('<img>');
    //             img.attr('src', formData.image);
    //             var h5 = $('<h5>').html(formData.title);
    //             var p = $('<p>').html(formData.description);
    //             var bg = $('<div>');
    //             bg.addClass('btn-bg');
    //             var img2 = $('<img id="arrow">');
    //             img2.attr('src', 'assets/images/Icon feather-arrow-right@1X.png');
    //             desc.append(vector);
    //             vector.append(serviceContent);
    //             serviceContent.append(img);
    //             serviceContent.append(h5);
    //             serviceContent.append(p);
    //             vector.append(bg);
    //             bg.append(img2);
    //             $('#major').append(desc);
    //         })
    //     });
    // }

    // getData();

    // modal show

    $("#add-serv").click(function () {
        $('#formModal').modal("show");
    });

    // #Form Submit

    // $('#form-submit').click(function (event) {
    //     event.preventDefault();
    //     var form = $('#imageForm')[0];
    //     if (form.checkValidity() === false) {
    //         $('form').addClass('was-validated');
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }
    //     else {
    //         save();
    //     }
    //     return false;
    // });

    // #AJAX call


    // function save() {
    //     var head = $('#title').val();
    //     var detail = $('#description').val();
    //     var image = $('#imageUp').val().replace(/C:\\fakepath\\/i, '');
    //     var services = "./images/" + image;
    //     var file_data = $('#imageUp').prop('files')[0];
    //     var form_data = new FormData();
    //     form_data.append('file', file_data);
    //     form_data.append('title', head);
    //     form_data.append('description', detail);
    //     form_data.append('image', services);
    //     $.ajax({
    //         url: 'test.php',
    //         type: "POST",
    //         dataType: 'text',
    //         cache: false,
    //         contentType: false,
    //         processData: false,
    //         data: form_data,
    //         success: function (result) {
    //             $('#formModal').modal("hide");
    //             alert(result);
    //             $('.serviceDiv').remove();
    //             getData();
    //         },
    //         error: function (xhr, resp, text) {
    //             alert(xhr, resp, text);
    //         }
    //     });
    // }
});


