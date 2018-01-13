var testHS = (function() {
    "use strict";

    var cards, getCards, getInfos, displayCards, displayFilters, removeLoader, showTools, url;

    url = "https://omgvamp-hearthstone-v1.p.mashape.com";

    window.onload = function() {
        getInfos();

        document.getElementById("sets").onchange = function() {
            getCards("cards/sets", "sets");
        };
        document.getElementById("races").onchange = function() {
            getCards("cards/races", "races");
        };
        document.getElementById("classes").onchange = function() {
            getCards("cards/classes", "classes");
        };
        document.getElementById("qualities").onchange = function() {
            getCards("cards/qualities", "qualities");
        };
        document.getElementById("types").onchange = function() {
            getCards("cards/types", "types");
        };
    };

    displayFilters = function(infos) {

        var create = function(array, id) {

            var select = document.getElementById(id);

            array.forEach(function(c) {

                if (c !== "Missions" && c !== "Credits" && c !== "System" && c !== "Debug") {
                    var option = document.createElement("option");
                    option.textContent = c;
                    select.appendChild(option);
                    // console.log(c);
                }
            });
        };

        create(infos.sets, "sets");
        create(infos.qualities, "qualities");
        create(infos.races, "races");
        create(infos.classes, "classes");
        create(infos.types, "types");

        removeLoader();
    };

    displayCards = function() {

        var list = document.getElementById("cards");
        list.innerHTML = "";

        cards.forEach(function(card) {
            console.log(card);
            if (card.img) {
                var li = document.createElement("li");
                li.innerHTML = `<p>${card.name}</p><img src="${card.img}">`;
                li.classList.add("card");
                list.appendChild(li);
            }
        });

    };

    getInfos = function() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url + "/info/");

        xhr.setRequestHeader("X-Mashape-Key", "xaLiPZxBdamshofqZD5fkHEUVH9lp1XVTSejsnqfjKu1UvsH3P");

        xhr.onload = function() {
            var infos = JSON.parse(this.response);

            displayFilters(infos);

            console.log(infos);
        };

        xhr.send();
    };

    getCards = function(route, id) {
        var xhr, chunk;
        xhr = new XMLHttpRequest();

        chunk = document.getElementById(id).value;

        xhr.open("GET", url + "/" + route + "/" + chunk);

        xhr.setRequestHeader("X-Mashape-Key", "xaLiPZxBdamshofqZD5fkHEUVH9lp1XVTSejsnqfjKu1UvsH3P");

        xhr.onload = function(data) {
            cards = JSON.parse(this.response);
            displayCards(   );
        };

        xhr.send();
    };

    showTools = function() {
        var tools = document.getElementById("tools_wrapper");
        tools.classList.remove("is-hidden");
    };

    removeLoader = function() {
        var loader = document.getElementById("loader");
        loader.classList.add("is-hidden");

        window.setTimeout(function() {
            loader.classList.add("is-removed");
            showTools();
        }, 800);

    };



}());
