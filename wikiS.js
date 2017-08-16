 $(document).ready(function () {
    $('#recherche').click(function () {
       var recherche = $('#user').val();
       var url = 'https://fr.wikipedia.org/w/api.php?action=opensearch&search=' + recherche + '&format=json&callback=?';
       $.ajax({
          url: url,
          type: "GET",
          async: false,
          dataType: "json",
          success: function (data) {
             for (var i = 0; i < data[1].length; i++) {
                $('#contenu').prepend("<div><div class='well'><a href=" + data[3][i] + "><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
                console.log(data); // debug
             }
          }
       });
    });
    //click sur Enter lance la recherche
    $('#user').keypress(function (e) {
       if (e.which == 13) {
          $('#recherche').click();
       }
    });
    $('.wrapper').hide();
    $('#loupe').on('click', function () {
       $('.wrapper').animate({
          width: 'toggle'
       });
       $('#text').fadeOut('fast');
    });
    $('#text').on('click', function () {
       $(this).fadeOut('fast');
    });
 });
