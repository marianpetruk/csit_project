var marker;
var last_marker;
var panorama;
var guess1;
var marker1;
var marker2;
var mark;
var xy_i;
var score = 0;
var round = 1;
var score_sum = 0;
var j = 0;
var myLatlng1 = new google.maps.LatLng(49.77, 24.026512);
var xcords = [49.843579, 49.82643, 49.840872, 49.848175, 49.846452, 49.846991, 49.84043, 49.839445, 49.841054, 49.842238, 49.842526, 49.84317, 49.840964, 49.84165, 49.813786, 49.83624, 49.843457, 49.845304, 49.846, 49.8455, 49.843748, 49.806045, 49.839553, 49.841275, 49.822121, 49.822935, 49.824748, 49.836438, 49.838637, 49.837689, 49.838147, 49.831727, 49.835655, 49.849499, 49.846839, 49.846375, 49.842702, 49.841331, 49.84085, 49.839342, 49.839447, 49.841136, 49.840046, 49.839878, 49.836221, 49.836803, 49.838823, 49.837605, 49.843823, 49.84484, 49.847177, 49.847837, 49.849363, 49.847864, 49.843095, 49.853661, 49.855747, 49.859688, 49.868352, 49.880349, 49.872341, 49.86897, 49.857741, 49.858226, 49.851911, 49.850349, 49.844547, 49.842157, 49.842444, 49.840878, 49.840014, 49.83366, 49.829688, 49.839407, 49.833234, 49.819572, 49.823963, 49.814914, 49.794174, 49.826073, 49.838605, 49.837228, 49.834857, 49.835879, 49.837059, 49.836037, 49.822025, 49.773979, 49.770448, 49.794439, 49.794502, 49.806831, 49.800007, 49.81922, 49.827443, 49.829321, 49.830249, 49.828534, 49.832155, 49.83006, 49.839298, 49.840736, 49.84093, 49.841081, 49.841858, 49.841892, 49.842194, 49.842786, 49.84459, 49.843938, 49.846099, 49.850408, 49.844523, 49.834666];
var ycords = [24.026491999999962, 24.030232999999953, 24.046637000000032, 24.03913399999999, 24.035847999999987, 24.044483000000014, 24.026250000000005, 24.034551999999962, 24.036111000000005, 24.034815999999978, 24.034811999999988, 24.03159000000005, 24.03452900000002, 24.029394000000025, 23.959974999999986, 24.066055000000006, 24.06243100000006, 24.064458999999943, 24.064835000000016, 24.06472400000007, 24.065890999999965, 23.998378000000002, 23.995090000000005, 24.02727500000003, 24.031631999999945, 24.037298999999962, 24.002651000000014, 24.026346999999987, 24.013472999999976, 24.024088000000006, 24.026436999999987, 24.03022199999998, 24.032302000000072, 24.028329999999983, 24.030189000000064, 24.030557999999928, 24.032370000000014, 24.03198599999996, 24.03227000000004, 24.03429099999994, 24.032366000000025, 24.021367000000055, 24.021914000000038, 24.021633000000065, 24.02261699999997, 24.019723999999997, 24.020432000000028, 24.015090999999984, 24.027413000000024, 24.02916300000004, 24.028549999999996, 24.025770999999963, 24.033064999999965, 24.03802399999995, 24.035526000000004, 24.033503999999994, 24.049176999999986, 24.06308100000001, 24.056110999999987, 24.034230999999977, 24.042159999999967, 24.03392299999996, 24.042542000000026, 24.026765999999952, 24.014824999999973, 24.020699000000036, 24.03131600000006, 24.03442300000006, 24.03206499999999, 24.031003000000055, 24.02679999999998, 24.026291000000015, 24.03249900000003, 23.996338000000037, 24.055499999999938, 24.022500000000036, 23.998692000000005, 23.986092999999983, 24.058066000000053, 24.02900599999998, 24.012959000000023, 24.01215000000002, 24.014433999999937, 24.012792999999988, 24.004445000000032, 24.00572999999997, 24.026922000000013, 24.01203399999997, 24.045342000000005, 24.063459999999964, 24.06892300000004, 24.061195999999995, 24.05478800000003, 24.04596700000002, 24.03387699999996, 24.03194600000006, 24.031664999999975, 24.02537499999994, 24.01857300000006, 24.007710999999972, 24.030404999999973, 24.028021999999964, 24.027855000000045, 24.03046100000006, 24.031423000000018, 24.03131600000006, 24.032636000000025, 24.033446000000026, 24.025837000000024, 24.026235000000042, 24.02534400000002, 24.026792, 24.02642400000002, 24.012280000000032];
var random_in = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var guessx = [];
var guessy = [];
var marker1s = [];
var marker2s = [];
var initPolylines = [];

function xy_random() {
    for (var j = 0; j < random_in.length; j++) {
        random_in[j] = Math.floor(Math.random() * ((xcords.length - 1) - 0) + 0);
        for (var i = 0; i < j; i++) {
            if (random_in[i] == random_in[j]) {
                random_in[j] = Math.floor(Math.random() * ((xcords.length - 1) - 0) + 0);
            }
        }
    }
}

function initialize() {
    xy_i = random_in[j];
    var myLatlng = new google.maps.LatLng(49.84, 24.02);
    var myOptions = {
        zoom: 12,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        draggableCursor: 'crosshair',
        zoomControl: true,

    }
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    var fenway = new google.maps.LatLng(xcords[xy_i], ycords[xy_i]);
    var panoramaOptions = {
        position: fenway,
        disableDefaultUI: true,
        zoom: -3,
        zoomControl: true,
        overviewMapControl: true,
        panControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        panControl: true,
        pov: {
            heading: (Math.random() * 18) * 20,
            pitch: 0
        }
    };
    var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);
    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);

    });

    function placeMarker(location) {
        mark = 1;
        if (last_marker) {
            last_marker.setMap(null);
        }
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP
        });
        console.log(marker.position);
        console.log(location[Object.keys(location)[0]])
        guessj = location[Object.keys(location)[0]];
        guessC = location[Object.keys(location)[1]];
        marker.setMap(map);
        last_marker = marker;
        document.getElementById("makeGuess").className = "hvr-bubble-float-top";
        document.getElementById("makeGuess").style.cursor = "pointer";
        document.getElementById("makeGuess").style.opacity = "1";
    }
    google.maps.event.addListener(marker, 'click', toggleBounce);

    function toggleBounce() {
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
}
xy_random();
google.maps.event.addDomListener(window, 'load', initialize);
window.onload = function() {
    var makeGuessb = document.getElementById("makeGuess");
    makeGuessb.onclick = function() {
        if (mark) {
            document.getElementById("starts").style.display = "none";
            document.getElementById("guesss").style.display = "block";
            if (round == 10) {
                document.getElementById("nextr").innerHTML = "Показати підсумки";
            }
            document.getElementById("score").className = "magictime animin";
            initialize2();
        }
    }
    var nextr_b = document.getElementById("nextr");
    nextr_b.onclick = function() {
        if (round < 10) {
            next_b();
        } else if (round == 11) {
            restart();
        } else {
            result_b();
        }
    }
}

function initialize2() {
    guessx[j] = guessj;
    guessy[j] = guessC;
    var myOptions2 = {
        zoom: 11,
        center: myLatlng1,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        zoomControl: true
    }
    var map2 = new google.maps.Map(document.getElementById("guessm"), myOptions2);
    marker1 = new google.maps.Marker({
        map: map2,
        icon: {
            path: 'M0-165c-27.618 0-50 21.966-50 49.054C-50-88.849 0 0 0 0s50-88.849 50-115.946C50-143.034 27.605-165 0-165z',
            fillColor: '#3333CC',
            fillOpacity: 0.8,
            scale: .25,
            strokeColor: 'gold',
            strokeWeight: 2
        },
        position: new google.maps.LatLng(xcords[xy_i], ycords[xy_i])
    });
    marker1.setMap(map2);
    marker2 = new google.maps.Marker({
        map: map2,
        position: new google.maps.LatLng(guessj, guessC)
    });
    marker2.setMap(map2);
    var initPolyline = function() {
        new google.maps.Polyline({
            path: [new google.maps.LatLng(xcords[xy_i], ycords[xy_i]), new google.maps.LatLng(guessj, guessC)],
            geodesic: true,
            strokeColor: '#6666FF',
            strokeOpacity: 0.8,
            map: map2
        });
    };
    initPolyline();

    function calcDistance(p1, p2) {
        return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
    }
    var dist = Math.round(calcDistance(marker1.position, marker2.position) * 1000);
    var scoredist = document.getElementById("score_dist");
    scoredist.innerHTML = "<p style='-webkit-user-select: none;'>Ваше припущення було <b>" + dist + " м</b> (" + dist / 1000 + " км) від поточного місцезнаходженння.<br></p>";
    var l_max = 3000;
    var p_max = 100;
    var score_l = Math.round(100 - (dist * p_max) / l_max);
    var progress_bar = document.getElementById("p_bar");
    if (score_l > 0) {
        progress_bar.style.width = score_l + "%";
    } else {
        progress_bar.style.width = 0 + "%";
    }
    var score_s = document.getElementById("score_s");
    score = Math.round(4000 * (score_l / 100));
    if (score > 0) {
        score_s.innerHTML = "<span style='-webkit-user-select: none;'>Ви отримали " + "<span style='color:orange;'>" + score + "</span>" + " балів</span>";
    } else {
        score = 0;
        score_s.innerHTML = "<span style='-webkit-user-select: none;'>Ви отримали " + "<span style='color:orange;'>" + score + "</span>" + " балів</span>";
    }
}

function result_b() {
    document.getElementById("mailto").style.display = "block";
    round = 11;
    var myOptions2 = {
        zoom: 11,
        center: myLatlng1,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        zoomControl: true
    }
    var map2 = new google.maps.Map(document.getElementById("guessm"), myOptions2);
    document.getElementById("marker2").style.top = "57%";
    var score_s = document.getElementById("score_s");
    score_s.innerHTML = "Ваш загальний рахунок " + "<span style='color:orange;'>" + score_sum + "</span>" + " з <span style='color:orange;'>40000</span> (" + score_sum * 100 / 40000 + "%) можливих балів";
    var scoredist = document.getElementById("score_dist");
    scoredist.innerHTML = "<h1>Гра закінчена, молодець!</h1>";
    document.getElementById("nextr").innerHTML = "Грати знову";
    for (var k = 0; k < 10; k++) {
        initPolylines[k] = function() {
            new google.maps.Polyline({
                path: [new google.maps.LatLng(xcords[random_in[k]], ycords[random_in[k]]), new google.maps.LatLng(guessx[k], guessy[k])],
                geodesic: true,
                strokeColor: '#6666FF',
                strokeOpacity: 0.8,
                map: map2
            });
        };
        initPolylines[k]();
        marker1s[k] = new google.maps.Marker({
            map: map2,
            icon: {
                path: 'M0-165c-27.618 0-50 21.966-50 49.054C-50-88.849 0 0 0 0s50-88.849 50-115.946C50-143.034 27.605-165 0-165z',
                fillColor: '#3333CC',
                fillOpacity: 0.8,
                scale: .25,
                strokeColor: 'gold',
                strokeWeight: 2
            },
            position: new google.maps.LatLng(xcords[random_in[k]], ycords[random_in[k]])
        });
        marker1s[k].setMap(map2);
        marker2s[k] = new google.maps.Marker({
            map: map2,
            position: new google.maps.LatLng(guessx[k], guessy[k])
        });
        marker2s[k].setMap(map2);
    }
}

function next_b() {
    mark = 0;
    j++;
    score_sum += score;
    round++;
    document.getElementById("makeGuess").style.opacity = "0.3";
    document.getElementById("guesss").style.display = "none";
    document.getElementById("starts").style.display = "block";
    var score_value = document.getElementById("score_value");
    score_value.innerHTML = score_sum;
    var game_round = document.getElementById("game_round");
    game_round.innerHTML = round + " / 10";
    document.getElementById("makeGuess").style.cursor = "no-drop";
    document.getElementById("makeGuess").className = "";
    initialize();
}

function restart() {
    for (var i = 0; i < random_in.length; i++) {
        xcords.splice(random_in[i], 1);
        ycords.splice(random_in[i], 1);
    }
    if (xcords.length < 10) {
        location.reload();
    }
    guessx.length = 0;
    guessy.length = 0;
    j = 0;
    random_in = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    xy_random();
    score = 0;
    score_sum = 0;
    round = 1;
    var score_value = document.getElementById("score_value");
    score_value.innerHTML = score_sum;
    var game_round = document.getElementById("game_round");
    game_round.innerHTML = round + " / 10";
    document.getElementById("guesss").style.display = "none";
    document.getElementById("starts").style.display = "block";
    document.getElementById("nextr").innerHTML = "Наступний Раунд";
    document.getElementById("marker2").style.top = "49%";
    initialize();
}