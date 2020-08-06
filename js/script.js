var price , crust_price, topping_price ;
let total = 0;
function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}

$(document).ready(function(){
    $("button.submit").click(function(event){
        let pname = $(".name option:selected").val();
        let psize = $("#size option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let ptopping = [];
        $.each($("input[name='toppings']:checked"), function(){            
            ptopping.push($(this).val());
        });
        console.log(ptopping.join(", "));
    
        switch(psize){
        case "0":
            price =0;
        break;
        case "large":
            price = 1000;
            console.log(price);
        break;
        case "medium":
            price = 650;
            console.log("The price is "+price);
        break;
        case "small":
            price = 400;
            console.log(price);
        default:
            console.log("error"); 
        }
        switch(pcrust){
            case "0":
            crust_price = 0;
            break;
            case "Crispy":
            crust_price = 90;
            break;
            case "Stuffed":
            crust_price = 250;
            break;
            case "Gluten-free":
            crust_price = 70;
            break;
            default:
            console.log("No price"); 
        }
        let topping_value = ptopping.length*35;
        console.log("toppins value" + topping_value);
    
        if((psize == "0") && (pcrust == "0")){
            console.log("nothing selected");
            $("button.submit").show();
            $("#information").show();
            $("div.choice").hide();
            alert("Please select pizza size and crust"); 
        }
        else{
            $("button.submit").hide();
            $("#information").hide();
            $("div.choice").slideDown(1000);
        }
    
        total = price + crust_price + topping_value;
        console.log(total);
        let checkoutTotal =0;
        checkoutTotal = checkoutTotal + total;
    
        $("#pizzaname").html($(".name option:selected").val());
        $("#pizzasize").html( $("#size option:selected").val());
        $("#pizzacrust").html($("#crust option:selected").val());
        $("#pizzatopping").html(ptopping.join(", "));
        $("#totals").html(total);
        $("").click(function(){
            let pname = $(".name option:selected").val();
            let psize = $("#size option:selected").val();
            let pcrust = $("#crust option:selected").val();
            let ptopping = [];
            $.each($("input[name='toppings']:checked"), function(){            
                ptopping.push($(this).val());
            });
            console.log(ptopping.join(", "));
            switch(psize){
            case "0":
                price =0;
            break;
            case "large":
                price = 1000;
                console.log(price);
            break;
            case "medium":
                price = 650;
                console.log("The price is "+price);
            break;
            case "small":
                price = 400;
                console.log(price);
            default:
                console.log("error"); 
            }
            switch(pcrust){
                case "0":
                crust_price = 0;
                break;
                case "Crispy":
                crust_price = 90;
                break;
                case "Stuffed":
                crust_price = 120;
                break;
                case "Gluten-free":
                crust_price = 70;
                break;
                default:
                console.log("No price"); 
            }
            let topping_value = ptopping.length*35;
            console.log("toppins value" + topping_value);
            total = price + crust_price + topping_value;
            console.log(total);

            checkoutTotal = checkoutTotal + total;
            console.log(checkoutTotal);

            var newOrder = new Getpizza(pname, psize, pcrust,ptopping,total);

            $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
            console.log(newOrder);
        });
        

        $("button#checkout").click(function(){ 
            $("button#checkout").hide();
            $("button.deliver").slideDown(1000);
            $("#addedprice").slideDown(1000);
            console.log("Your total bills is sh. "+checkoutTotal);
            $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
        });


        $("button.deliver").click(function(){
            $(".pizzatable").hide();
            $(".choice h2").hide();
            $(".delivery").slideDown(1000);
            $("#addedprice").hide();
            $("button.deliver").hide();
            $("#pizzatotal").hide();
            let deliceryamount= checkoutTotal+120;
            console.log("You will pay sh. "+deliceryamount+" on delivery");
            $("#totalbill").append("Your bill plus delivery fee is: "+deliceryamount);
        });


        $("button#final-order").click(function(event){
            event.preventDefault();

            $("#pizzatotal").hide();
            $(".delivery").hide();
            $("button#final-order").hide();
            let deliceryamount= checkoutTotal+120;
            console.log("Final Bill is: "+deliceryamount);
            let person = $("input#name").val();
            let phone = $("input#phone").val();
            let location = $("input#location").val();

            if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){

            $("#finalmessage").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Prepare sh. "+deliceryamount);
            $("#totalbill").hide();
            $("#finalmessage").slideDown(1000);
            }
            else {
            alert("Please fill in the details for delivery!");
            $(".delivery").show();
            $("button#final-order").show();
            }
        });
        event.preventDefault();
    });
});