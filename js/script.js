function selectButton(){
    let botao = document.getElementById("themeButton");

    botao.onclick = changeTheme() {
        let theme = document.querySelectorAll('body');
        theme.classList.remove("bg-primary");
        theme.classList.add("bg-secondary");
        console.log("oi");
    }
}
