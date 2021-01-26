function Sum(){
   

    var first_number = parseInt(document.getElementById("add1").value);
            var second_number = parseInt(document.getElementById("add2").value);
            var result = first_number + second_number;

            document.getElementById("txtresult").value = result;
}