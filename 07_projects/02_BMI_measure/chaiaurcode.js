const form = document.querySelector("form")

form.addEventListener("submit",function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const results = document.querySelector("#results")

  if(height == " " || height <0 || isNaN(height)){
    results.innerHTML = `Please evter the proper height ${height}`
  }
  else if(weight == " " || weight <0 || isNaN(weight)){
    results.innerHTML = `Please evter the proper weight ${weight}`
  }else{
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);

// ***************if else**************
if (BMI <18.6){
  results.innerHTML = `You are UnderWeight ,Your BMI is = ${BMI}`
}
else if (BMI >18.6 && BMI <24.9){
  results.innerHTML = `You are Normal ,Your BMI is = ${BMI}`
}
else if (BMI> 24.9){
  results.innerHTML = `You are OverWeight ,Your BMI is = ${BMI}`
}
    // switch (BMI){
    //   case <18.6:
    //   results.innerHTML = `You are UnderWeight ,Your BMI is = ${BMI}`
    //   break
    //   case  >18.6 $$ <24.9:
    //   results.innerHTML = `You are UnderWeight ,Your BMI is = ${BMI}`
    //   case >24.9:
    //   results.innerHTML = `You are UnderWeight ,Your BMI is = ${BMI}`
    //   default:
    //   results.innerHTML = `You are UnderWeight ,Your BMI is = ${BMI}`
    // }
  }

})