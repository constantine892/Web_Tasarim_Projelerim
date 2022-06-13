var _sayilar = document.getElementsByTagName("button"),
_sayiUzunluk = _sayilar.length,
i = 0,
_sonuc = document.getElementById("sonuc");

for (i = 0; i < _sayiUzunluk; i++) { _sayilar[i].onclick = hesapla;}
function hesapla () {
    var _deger = this.innerHTML;
    if(_deger == "C"){
        _sonuc.value = "";
        return;
    }
    else if (_deger == "=") {
        try {
            _sonuc.value = eval(_sonuc.value);
        } catch (e) {
            _sonuc.value = "0";
        }
        return;
    }
    _sonuc.value += _deger;
}
