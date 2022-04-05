$('#button1').click(function() {
    $.ajax({
        url: "libs/php/geoNames.php",
        type: 'POST',
        dataType: 'json',
        data: {
            currency: $('#currency').val(),
        },
        success: function(result) {
            console.log(JSON.stringify(result));

            $('.resultData').html("");

            if (result.status.name == "ok") {
                $('#currencyRes').html(result['data'][0]['currencyCode']);
                console.log(result['data'][0]['currencyCode']);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("There was an unexpected error. Please try again.");
            $('#currencyRes').html("There was an unexpected error. Please try again.");
        }
    }); 
});

$('#button2').click(function() {
    $.ajax({
        url: "libs/php/geoNamesTime.php",
        type: 'POST',
        dataType: 'json',
        data: {
            timezoneLati: $('#timezoneLati').val(),
            timezoneLong: $('#timezoneLong').val()
        },
        success: function(result) {
            console.log(JSON.stringify(result));
            $('.resultData').html("");
            if (result.status.name == "ok") {

                if (result['data']['timezoneId'] == null) {
                    $('#TimezoneRes').html("You've landed in the sea! :)");
                    $('#TzCountryRes').html("Please try again");
                    
                } else {
                $('#TimezoneRes').html(result['data']['timezoneId']);
                $('#TzCountryRes').html(result['data']['countryName']);
                $('#TzTimeRes').html(result['data']['time']);
                }
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Please try a differnet longitude and latitude - thank you!");
            $('#TimezoneRes').html("Please try a differnet longitude and latitude - thank you!");
        }
    }); 
});

$('#button3').click(function() {
    $.ajax({
        url: "libs/php/geoNamesOcean.php",
        type: 'POST',
        dataType: 'json',
        data: {
            oceanLati: $('#oceanLati').val(),
            oceanLong: $('#oceanLong').val()
        },
        success: function(result) {
            console.log(JSON.stringify(result));
            console.log(JSON.stringify(result.data));
            $('.resultData').html("");
            if (result.status.name == "ok") {


                console.log(result['data']['name']);
                $('#OceanRes').html(result['data']['name']);
             
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("No Ocean at this location - sorry!");
            $('#OceanRes').html("No Ocean at this location - sorry!");
        }
    }); 
});