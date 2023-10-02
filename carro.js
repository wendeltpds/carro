function anuncios(){
    let nome = document.getElementById('seach-input').value;
    let audi = document.getElementById('audi-tt');
    let tesla = document.getElementById('tesla');
    if(nome === "audi"){
        audi.scrollIntoView({behavior: "smooth"})
    }
    else if(nome === "tesla"){
        tesla.scrollIntoView({behavior:"smooth"})
    }

}


function login(){
    let botao = document.getElementById('button');
    let login = document.getElementById('login');
    login.scrollIntoView({behavior:"smooth"});
    
    setTimeout(() => {
        alert('realize o login')
    }, 800)
}

const menu = () => {
    let logar = document.getElementById('logar')
    if(logar.classList.contains('menuaberto')) {
        logar.classList.remove('menuaberto')
    }
    else {
        logar.classList.add('menuaberto')
    }
}

