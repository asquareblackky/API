$(document).ready(function () {
    
    // $.ajax({
    //     type: "get",
    //     url: "https://api.chucknorris.io/jokes/random",
    //     dataType: "json",
    //     success: function (response) {
    //         $("img").attr("src", response.icon_url)
    //         $("h1").text(response.value)
            
            
    //     },
    //     error: function(error){
    //         console.log(error);
            
    //     }
    // });

    $("#btn").click(function(){
        let email = $("#email").val()
        let amount = $("#amt").val()

        if(email == "" || amount == ""){
            alert("field cannot be empty")
        }else{

            let paystack = PaystackPop.setup({
                key: 'pk_test_3fd32b0e2689f77156d2429ba350ae3d574c16b5',
                email: email,
                amount: amount * 100,
                callback: function(response){
                    console.log(response);
                    alert("Payment successful!")
                    
                },
                onclose: function(){

                }
              });
              
              paystack.openIframe();
        }
    })

    $("#btn").css("backgroundColor", "green")
    $("#btn").css("fontSize", "1rem")
    $("#btn").css("marginTop", "1rem")
    $("#btn").css("justifyContent", "center")


   

});