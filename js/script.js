var weight, height, sex, age, username
var bmi, fat
function calculate(){
    username = document.getElementById("name-input").value;
	sex = document.querySelector('input[name="sex"]:checked').value;
    age = document.getElementById("age-input").value;
    weight = document.getElementById("weight-input").value;
	height = document.getElementById("height-input").value;
    
    if (age == ''|| weight == ''|| height == '') {
        alert("Input nilai harus diisi");
    } else if (age < 18) {
        alert("Kalkukator ini hanya untuk usia 18 tahun keatas")
    } else {
        height /= 100;
        bmi = weight/Math.pow(height,2);
        document.getElementById("result").style.display = "flex";
        document.getElementById("username").innerHTML = username;
        document.getElementById("gender").innerHTML = sex;
        document.getElementById("age").innerHTML = age;
        document.getElementById("weight").innerHTML = weight;
        document.getElementById("height").innerHTML = height;
        document.getElementById("result-bmi").innerHTML = bmi.toFixed(1).toString();
        if (bmi < 18.5) {
            document.getElementById("quality-result").innerHTML = "Berat Badan Kurang. Anda kekurangan berat badan.  Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan. <br>Hasil BMI < 18.5";
        } else if (bmi < 24.9) {
            document.getElementById("quality-result").innerHTML = "Normal. Anda memiliki berat badan ideal. Good job!. Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda. <br>Hasil BMI diantara 18.5 dan 24.9";
        } else if (bmi < 29.9) {
            document.getElementById("quality-result").innerHTML = "Berat Badan Lebih. Anda memiliki berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal. <br>Hasil BMI diantara 25 dan 29.9 ";
        } else {
            document.getElementById("quality-result").innerHTML = "Obesita.Anda berada dalam kategori obesita. Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda. <br>Hasil BMI lebih dari 30";
        }
    }
}


function clearbmi() {
    document.getElementById("result").style.display = "none";
    document.getElementById("quality-result").innerHTML = "";
    document.getElementById("result-bmi").innerHTML = "";
    document.getElementById("username").innerHTML = "" ;
    document.getElementById("gender").innerHTML = "" ;
    document.getElementById("age").innerHTML = "" ;
    document.getElementById("weight").innerHTML = "" ;
    document.getElementById("height").innerHTML = "" ;
}