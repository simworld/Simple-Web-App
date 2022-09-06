

var i = 0;

// next() function to display the item in the position i in the collection
// everytime the user click, it increases the value of the i
// using ajax, it saves the products fetched in the variable products and then it displays in the index.ejs 
function next(){
    i++;
    var value = $.ajax({
        type: "get",
        url: "http://localhost:3000/api/products",
        dataTyepe: 'json'
    }).done(function (products) {
        console.log(products[i]);
        $('.id').text(products[i]._id)
        $('.id').attr('id', products[i]._id)
        $('.sku').text(products[i].sku)
        $('.name').text(products[i].name)
        $('.price').text(products[i].price)
        $('.shipping').text(products[i].shipping)
        $('.type').text(products[i].type)
        $('.image').html("<img src='"+products[i].image+"'/>")

        // edit to get the current _id of the product and pass it to the url /update@id=
        $("#edit a").attr("href", "/update?id=" + products[i]._id)

        //delete function that using ajax perform the delete of the current product 
        $("#delete").click(function(){
                $.ajax({
                url:'http://localhost:3000/api/products/' + products[i]._id,
                type: 'DELETE'
            })
        });
    });
    return value.responseJSON;
}

// function prev() it is the same as function next, but it decrease the value of i to go back
function prev(){
    if (i == -1){     
        i = 0;    
    }  
    i--;
    var value = $.ajax({
        type: "get",
        url: "http://localhost:3000/api/products",
        dataTyepe: 'json'
    }).done(function (products) {
        console.log(products[i]);
        $('.id').text(products[i]._id)
        $('.id').attr('id', products[i]._id)
        $('.sku').text(products[i].sku)
        $('.name').text(products[i].name)
        $('.price').text(products[i].price)
        $('.shipping').text(products[i].shipping)
        $('.type').text(products[i].type)
        $('.image').html("<img src='"+products[i].image+"'/>")
        $("#edit a").attr("href", "/update?id=" + products[i]._id)
        $("#delete").click(function(){
                $.ajax({
                url:'http://localhost:3000/api/products/' + products[i]._id,
                type: 'DELETE'
            })
        });

    });
    return value.responseJSON;
}

// this function display the products of the collection on the current position of value of i, so when the user access the web application and goes to the home page
function displayHome(){
    var value = $.ajax({
        type: "get",
        url: "http://localhost:3000/api/products",
        dataTyepe: 'json'
    }).done(function (products) {
        $('.id').text(products[i]._id)
        $('.id').attr('id', products[i]._id)
        $('.sku').text(products[i].sku)
        $('.name').text(products[i].name)
        $('.price').text(products[i].price)
        $('.shipping').text(products[i].shipping)
        $('.type').text(products[i].type)
        $('.image').html("<img src='"+products[i].image+"'/>")
        $("#edit a").attr("href", "/update?id=" + products[i]._id)
        $("#delete").click(function(){
                $.ajax({
                url:'http://localhost:3000/api/products/' + products[i]._id,
                type: 'DELETE'
            })
        })
})
}

//alert when the user add a new product
$('#add_prod').submit(function(event){
    alert("Product Inserted!");
})

//perform a function to update the current product displayed and alert the user that the product has been updated
$('#update_prod').submit(function(event){
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data = {}
    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value']
    })

    var request = {
        "url":`http://localhost:3000/api/products/${data.id}`,
        "method": "PUT",
        "data": data
    }

    console.log(unindexed_array)

    $.ajax(request).done(function(response){
        alert("Product Updated!")
    })
})

//alert the user that the product has been deleted and reload the page 
function delProd() {
    alert("Product Removed!");
    window.location.reload();
}

