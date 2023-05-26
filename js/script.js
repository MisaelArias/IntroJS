let cuentaUsuarios = [
    { usuario: "aldo.misael", name: "Aldo", saldo: 500, password: 123456},
    { usuario: "misael.pacheo", name: "Misael", saldo: 690, password: 123456},
    { usuario: "carlos.david", name: " Carlos David", saldo: 100, password: 123456 },
];
const btnIniciarSesion = document.querySelector("#btnIngresar");
const muestraMensaje = document.getElementById("muestraMensaje");
const muestraMensajeConsulta = document.getElementById("muestraMensajeConsulta");
const divLogin = document.getElementById("div-login");
const divCuenta = document.getElementById("div-cuenta-iniciada");
const pbienvenida = document.getElementById("bienvenida");
const btnConsultar = document.getElementById("btnCOnsultar");
const btnRetirar = document.getElementById("btnRetirar");
const divRetirar = document.getElementById("retiraDinero");
const btnDepositar = document.getElementById("btnDepositar");
const divdepositarCuenta = document.getElementById("depositarCuenta");
const btnConfirmaRetiro = document.getElementById("btnConfirmaRetiro");
const btnConfirmadeposito = document.getElementById("btnConfirmadeposito");
const btnSalir = document.getElementById("btnSalir");
let inputRetirar = document.getElementById("inputRetirar");
let inputDepositar = document.getElementById("inputDepositar");
let user = document.getElementById("txtUsuario");
let password = document.getElementById("Password");
let nombreUsuario ="";
let saldoUsuario=0;




btnIniciarSesion.addEventListener('click', function () {
    let ingresoValido = false;
    if(user.value == "" && password.value == ""){
        mensagesAlerta("El usuario y/o contraseña no pueden ir vacios");
       
    }else {
        for( i=0; i<cuentaUsuarios.length;i++){
            if(cuentaUsuarios[i].usuario ==user.value && cuentaUsuarios[i].password==password.value){
                ingresoValido = true;
                divLogin.setAttribute("hidden","true");
                divCuenta.removeAttribute("hidden");
                nombreUsuario = cuentaUsuarios[i].name;
                saldoUsuario = cuentaUsuarios[i].saldo;
                pbienvenida.innerHTML = "Bienvenid@ "+ nombreUsuario +"  a su  cuenta de banco, por favor indiquenos que acción quiere realizar" ;
                muestraMensaje.setAttribute("hidden","true");
                

                break;

            }
        }
        if(ingresoValido == false){
            mensagesAlerta("El usuario y/o contraseña no son correctos favor de validar");
        }
    }
    
    

});
btnConsultar.addEventListener('click', function () {
    ocultarComponentes();
    muestraMensajeConsulta.innerHTML = "Su saldo actual es de <b>$" + saldoUsuario+"</b>";
    muestraMensajeConsulta.removeAttribute("hidden");
    muestraMensajeConsulta.classList="alert alert-success alert-dismissible fade show";
});

btnDepositar.addEventListener('click', function () {
ocultarComponentes();
divdepositarCuenta.removeAttribute("hidden");
});

btnRetirar.addEventListener('click', function () {
    ocultarComponentes();
    divRetirar.removeAttribute("hidden");  

});

btnConfirmaRetiro.addEventListener('click', function () {
    muestraMensaje.setAttribute("hidden","true");
    let retiro= Number( inputRetirar.value); 
    if(retiro>0){
        let validaRetiro = saldoUsuario-retiro;
        if(validaRetiro <10){
            mensagesAlerta("La cantidad minima que puede tener en su cuenta debe de ser mayor o igual a $10");
        }else {
            muestraMensajeConsulta.innerHTML="<br/><p>Trasanccion realizada con exito</p><p>Saldo anterior : <b>$"+saldoUsuario+ "</b></p><p>Saldo actual: <b>$"+ validaRetiro+"</b></p><p>Retiro en efectivo: <b>$"+ retiro+"</b></p> <br/> <p>Seleccione otra opción dentro del menú</p>" ;
            muestraMensajeConsulta.classList="alert alert-success alert-dismissible fade show";
            muestraMensajeConsulta.removeAttribute("hidden");
            saldoUsuario= saldoUsuario-retiro;
            divRetirar.setAttribute("hidden","true");
            inputRetirar.value="";

        }
    }else{
        mensagesAlerta("Favor de ingresar un numero valido");
    }
    

    
});

btnConfirmadeposito.addEventListener('click', function () {
    muestraMensaje.setAttribute("hidden","true");
    let deposito = Number(inputDepositar.value);
    if(deposito>0){
        let validaDeposito = deposito + saldoUsuario;

        if(validaDeposito>990){
            mensagesAlerta("La cantidad maxima que puede tener en su cuenta debe de ser menor o igual a $990");
        }else{

            muestraMensajeConsulta.innerHTML="<br/><p>Trasanccion realizada con exito</p><p>Saldo anterior : <b>$"+saldoUsuario+ "</b></p><p>Saldo actual: <b>$"+ validaDeposito+"</b></p><p>Deposito en efectivo: $<b>"+ deposito+"</b></p> <br/> <p>Seleccione otra opción dentro del menú</p>" ;
            muestraMensajeConsulta.classList="alert alert-success alert-dismissible fade show";
            muestraMensajeConsulta.removeAttribute("hidden");
            saldoUsuario = saldoUsuario +deposito;
            divdepositarCuenta.setAttribute("hidden","true");
            inputDepositar.value="";
        }
    }else{
        mensagesAlerta("Favor de ingresar un numero valido");
    }
    

});
btnSalir.addEventListener('click', function () {
    ocultarComponentes();
    divCuenta.setAttribute("hidden","true");
    divLogin.removeAttribute("hidden");
    user.value="";
    password.value="";
});

function ocultarComponentes(){
    muestraMensajeConsulta.setAttribute("hidden","true");
    muestraMensaje.setAttribute("hidden","true");
    divRetirar.setAttribute("hidden","true");
    divdepositarCuenta.setAttribute("hidden","true");
    inputDepositar.value="";
    inputRetirar.value="";
}





function mensagesAlerta(texto) {
    muestraMensaje.innerHTML = texto;
    muestraMensaje.removeAttribute("hidden");
    muestraMensaje.classList = "alert alert-warning alert-dismissible fade show";

}




