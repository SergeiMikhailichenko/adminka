(function () {
    'use script';

    // with search
    new gridjs.Grid({
        pagination: true,
        search: true,
        columns: [{
            name: "ID",
            width: "150px",
        }, {
            name: "Name",
            width: "150px",
        }, {
            name: "Date",
            width: "150px",
        }, {
            name: "Email",
            width: "200px",
        }, {
            name: "Country",
            width: "100px",
        }, {
            name: "Balance",
            width: "100px",
        }, {
            name: "Actions",
            width: "100px",
        }],
        data: [
            ["86437", "mahdi eghtsadi", "2024-08-26 14:37:37\nhttps://www.google.com/", "aghtsadi@gmail.com", "Iran", "0 IRR", "Details"],
            ["86438", "mai eghtsadi", "2024-08-26 14:37:37\nhttps://www.google.com/", "aghtsadi@gmail.com", "Iran", "10 IRR", "Details"],
            ["86439", "mdi eghtsadi", "2024-08-26 14:37:37\nhttps://www.google.com/", "aghtsadi@gmail.com", "Iran", "100 IRR", "Details"],
            ["86440", "mahdi egsadi", "2024-08-26 14:37:37\nhttps://www.google.com/", "aghtsadi@gmail.com", "Iran", "200 IRR", "Details"],
            ["86237", "mahdi egadi", "2024-08-26 14:37:37\nhttps://www.google.com/", "aghtsadi@gmail.com", "Iran", "80 IRR", "Details"],
            ["86137", "mahdi eghtsdi", "2024-08-26 14:37:37\nhttps://www.google.com/", "aghtsadi@gmail.com", "Iran", "990 IRR", "Details"],
            ["86737", "madi eghtadi", "2024-08-26 14:37:37\nhttps://www.google.com/", "aghtsadi@gmail.com", "Iran", "890 IRR", "Details"],
            ["86537", "mhdi ehtsdi", "2024-08-26 14:37:37\nhttps://www.google.com/", "aghtsadi@gmail.com", "Iran", "30 IRR", "Details"],
        ],
    }).render(document.getElementById("grid-search"));;
    // with search

})();