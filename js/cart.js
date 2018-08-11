/* 
   Author:   Baptist Chen
   Date:     30 Jul 2018
   Simple shopping card created for WCD
   
 */
$(document).ready(function() {

    //Master db for shopping cart
    var cookiesdbname = "shoppingcart_db";
    var cookiesdb = Cookies.get(cookiesdbname);
    if (cookiesdb == undefined) cookiesdb = {};
    else cookiesdb = JSON.parse(cookiesdb);

    $("#dialog-add-to-cart, #dialog-remove-from-cart").dialog({
        autoOpen: false,
        modal: true,
        resizable: false,
        width: '500px',
        buttons: {
            Ok: function() {
                $(this).dialog("close");
            }
        },
    });
    $("#dialog-show-cart").dialog({
        autoOpen: false,
        modal: true,
        resizable: false,
        width: '800px',
        buttons: {
            Ok: function() {
                $(this).dialog("close");
            }
        },
    });

    $(".add-to-cart").click(function() {
        let productname = $(this).attr("name");
        let productprice = $(this).attr("value");
        addToCart(productname, productprice, 1);
    });

    $(".show-cart").click(function() {
        $("#dialog-add-to-cart").dialog("close");
        showCart();

    });

    $(".checkout-cart").click(function() {
        $("#dialog-add-to-cart").dialog("close");
        $("#dialog-show-cart").dialog("close");
        alert("Please reserve an appointment for further payment!");
        window.location.href = "contact us.html";
    });

    function addToCart(product, unit_price, qtty) {
        let cookiesname = product;
        let totalprice = unit_price * qtty;
        let productdata = Cookies.get(cookiesname);

        if (productdata == undefined) {
            productdata = '{"product":"' + product + '", "unit_price":' + unit_price + ', "qtty":' + qtty + ', "totalprice":' + totalprice + '}';
        } else {
            var p = JSON.parse(productdata);
            p.qtty = p.qtty + qtty;
            p.totalprice = p.unit_price * p.qtty;
            productdata = JSON.stringify(p);
        }

        Cookies.set(cookiesname, productdata);
        cookiesdb[product] = JSON.parse(productdata);
        Cookies.set(cookiesdbname, JSON.stringify(cookiesdb));

        $("#dialog-add-to-cart div.message").html("<span class='ui-icon ui-icon-circle-check'></span> Item added!");
        $("#dialog-add-to-cart").dialog("open");
    }

    removeFromCart = function(product) {
        let cookiesname = product;
        let productdata = Cookies.get(cookiesname);

        if (productdata == undefined) {
            return;
        } else {
            Cookies.remove(cookiesname);
            cookiesdb[product] = null;
            Cookies.set(cookiesdbname, JSON.stringify(cookiesdb));
        }
        $("#dialog-show-cart").dialog("close");
        showCart();
    }

    function showCart() {
        let item_counter = 0;
        let data = "<tr><th>Product Description</th><th>Unit Price</th><th>Quantity</th><th>SubTotal</th><th></th></tr>";
        for (let prop in cookiesdb) {
            if (cookiesdb[prop] == null) continue;
            let productname = cookiesdb[prop].product;
            data += "<tr>";
            data += "<td>" + productname + "</td>";
            data += "<td>" + getPriceFormat(cookiesdb[prop].unit_price) + "</td>";
            data += "<td>" + (cookiesdb[prop].qtty) + "</td>";
            data += "<td>" + getPriceFormat(cookiesdb[prop].totalprice) + "</td>";
            data += "<td><a href='#' class='remove-cart-item' onclick=\"removeFromCart('" + productname + "')\"> <span class='ui-icon ui-icon-closethick'></span> </a></td>";
            data += "</tr>";
            item_counter++;
        }
        data = "<table>" + data + "</table>";
        if (item_counter > 0) {
            $("#dialog-show-cart div.message").html(data);

            $("#dialog-show-cart .checkout-cart").show();
        } else {
            getGrandTotal();
            $("#dialog-show-cart div.message").html("The cart is empty");
            $("#dialog-show-cart .checkout-cart").hide();
        }

        let gt = getPriceFormat(getGrandTotal());
        $("#dialog-show-cart div.total").html(`<h3>Total: ${gt}</h3>`);
        $("#dialog-show-cart").dialog("open");
    }

    function getGrandTotal() {
        let grandtotal = 0;
        for (let prop in cookiesdb) {
            if (cookiesdb[prop] == null) continue;
            grandtotal += cookiesdb[prop].totalprice;
        }
        return grandtotal;
    }

    function getPriceFormat(num) {
        if (isNaN(num)) return 0;
        return "$" + (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); // 12,345.67
    }
    if (window.matchMedia('(max-width: 800px)').matches) {
        $("#dialog-add-to-cart").dialog({
            autoOpen: false,
            modal: true,
            resizable: false,
            width: '60%',
            buttons: {
                Ok: function() {
                    $(this).dialog("close");
                }
            },
        });
        $("#dialog-show-cart").dialog({
            autoOpen: false,
            modal: true,
            resizable: false,
            width: '90%',
            buttons: {
                Ok: function() {
                    $(this).dialog("close");
                }
            },
        });
    }

});