function calculate() {
    const name=document.getElementById("name");
    const weightVal=document.getElementById("weight");
    const heightVal=document.getElementById("height");
    const result=document.getElementById("result");


    const weight=parseFloat(weightVal.value);
    const height=parseFloat(heightVal.value);
    let BMI = weight/(height*height);
    result.textContent=(name.value + "ning BMI yi " + BMI);

    if (BMI>=25) {
        result2.textContent=("Domboqsan");
    } else if (BMI<25 && BMI>=19) {
        result2.textContent=("normalniysan bosib ye");
    } else if (BMI<19) {
        result2.textContent=("Koproq yee shvbavra");
        }
}