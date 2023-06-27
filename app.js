function inp(value) {
    final =  document.getElementById("result").value += value;
 }
 
 // Function to calculate the result
 function calculate() {
     let expression = final;
     try {
         let result = eval(expression);
        document.getElementById("result").value = result 
     } catch (error) {
         document.getElementById("result").value = "Error";
     }
 }
 
 // Function to clear the input 
 function clearResult() {
     document.getElementById("result").value = "" ;
 
 }
 function del(){
    res  = document.getElementById("result").value.toString().slice( 0,-1)
    document.getElementById("result").value  = res;
    console.log(res)
 }
 
 
 