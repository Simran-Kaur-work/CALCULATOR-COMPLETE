let calculation = localStorage.getItem('calculation')||"";

        display();

        function UpdateCalculation(value){
        calculation += value;
        
        display();
        
localStorage.setItem('calculation',calculation);

        }
        
            
function display(){
    document.querySelector('.js-display-calculation')
    .innerHTML= calculation;
}