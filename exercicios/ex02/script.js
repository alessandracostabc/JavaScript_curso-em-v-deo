function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = 14
    var hora = data.getHours()
    var minute = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minute} minutos.`
    
    if (hora >= 0 && hora < 12){
        //BOM DIA!        
        foto.src='manha.png';       
        document.body.style.background = "#f2c09d";
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE
        foto.src = 'tarde.png';
        document.body.style.background = '#edf4fa'
    } else {
        //BOA NOITE!
        foto.src = 'noite.png';
        document.body.style.background = '#01154a'
    }
}
console.log("Passou por aqui")

