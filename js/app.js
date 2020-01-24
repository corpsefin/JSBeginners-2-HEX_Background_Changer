(function(){
    const colorChangeButton = document.getElementById('colorChangeButton');
    const background = document.getElementById('background');
    let hexValue = document.getElementById('hexValue');

    colorChangeButton.addEventListener('click', makeRandomColorCode);

    function makeRandomColorCode(){
        const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let finalColorCode = "#";

        for(let i=0; i<6; i++){
            finalColorCode += hexValues[Math.floor(Math.random()*hexValues.length)];
        }
        background.style.backgroundColor = hexValue.textContent = finalColorCode;
        background.style.transitionDuration = '1s';
    }
})();