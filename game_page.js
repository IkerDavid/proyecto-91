function send(){
    player1_name = document.getElementById("player1_name").value;
    player2_name = document.getElementById("player2_name").value;
    actual_answer = parseInt(player1_name) * parseInt(player2_name);
    question_number = "h4" + player1_name + " X "+ player2_name +"</h4>";
    input_box = "<br>Answer = <input type='text' id='input_check_box> ";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
     row = question_number + input_box + check_button ; 
     document.getElementById("output").innerHTML = row;
      document.getElementById("player1_name").value = "";
      document.getElementById("player2_name").value = "";
}

