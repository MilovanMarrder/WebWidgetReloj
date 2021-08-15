(function(){
var EstablecerHora = function () {
  var fecha = new Date();
  var diaSemanaSistema = fecha.getDay(),
    fechaDigitoSistema = fecha.getDate(),
    mesSistema = fecha.getMonth(),
    añoSistema = fecha.getFullYear(),
    horaSistema = fecha.getHours(),
    minutosSistema = fecha.getMinutes(),
    segundosSistema = fecha.getSeconds();


    var efechaDigito = document.getElementById('fechaDigito'),
    eDiaSemana = document.getElementById('diaSemana');
    eMes = document.getElementById('mes'),
    eAño = document.getElementById('año'),
    eHora = document.getElementById('hora'),
    eMinutos = document.getElementById('minutos'),
    eSegundos = document.getElementById('segundos');

  var semana = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'viernes',
    'Sábado',
  ];
  eDiaSemana.textContent = semana[diaSemanaSistema];



  var mes = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  efechaDigito.textContent = fechaDigitoSistema;
  eMes.textContent = mes[mesSistema];
  eAño.textContent = añoSistema;
  eHora.textContent = horaSistema;
  eMinutos.textContent = minutosSistema;
  eSegundos.textContent = segundosSistema;



};

EstablecerHora();
var intervalo = setInterval(EstablecerHora, 1000);
}())