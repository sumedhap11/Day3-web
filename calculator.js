//DOM:Document object ManipulTION
//there are three type of dom
//DOCUMENT.GETeLELEMNETbY iD IS A DOM METHOSD METHOD A-
//alert()<--Used to display some msg-->

//confirm()<--Asks for Confirmation from user
//prompt()<--Asks for some input from user
function calculate() {
  //  alert = ("Successfully Calculated!");
  //confirm("Delete.......?");
  //prompt("Enter your name");
  console.log(document);
  console.log(document.getElementById("x1"));
  console.log(document.getElementById("x1").value);
  let amount = Document.getElementById("x1").value;
  let roi = document.getElementById("x2").value;
  let duration = document.getElementById("x3").value;
  if (amount == "" || roi == "" || duration == "") {
    document.getElementById("msg").innerText = "All Values are required";

    document.getElementById("msg").style.color = "red";
  } else {
    console.log(isNaN(amount));
    //Number returns true if input is other than number
    if (isNaN(amount) || isNaN(roi) || isNaN(duration)) {
      document.getElementById("msg").innerText = "All values must be a number";
      document.getElementById("msg").style.color = "red";
    } else if (amount <= 0 || roi < 0 || duration <= 0) {
      document.getElementById("msg").innerText = "All values must be a number";
      document.getElementById("msg").style.color = "red";
      }
    else {
        console.log(typeof amount);
        amount = parseInt(amount);
        roi = parseFloat(roi);
        duration = Number(duration);
        let interest = (amount * roi * duration) / 100;
        let final = amount + interest;
        ocument.getElementById("msg").innerHTML= `<b>Interest</b>=${interest}<br/>
        <b>Final Amount</b>=${final}<br/>`;

        document.getElementById("msg").style.color = "green";
      }
      //innerText is used to present only text
      //innerHTML is used to present text and HTML tags
  }
}
