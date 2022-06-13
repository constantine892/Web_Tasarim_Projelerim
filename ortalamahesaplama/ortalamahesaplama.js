function hesap () {
    var sayı1,sayı2,ortalama;
    sayı1=Number(document.getElementById("sınav1").value);
    sayı2=Number(document.getElementById("sınav2").value);
    ortalama=(sayı1+sayı2)/2    ;
    document.getElementById("ortalama").value =ortalama;
}