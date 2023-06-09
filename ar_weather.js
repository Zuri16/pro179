//ESTE ARCHIVO SE LLENA IGUAL AL DE LA CLASE
var coordenadas = {}
$(document).ready(function(){
    obtenerUrl()
})
function obtenerUrl(){
    var parametrosUrl = new URLSearchParams(window.location.search)

    if(parametrosUrl.has("source") && parametrosUrl.has("destination")){
        var source = parametrosUrl.get("source")
        var destination = parametrosUrl.get("destination")

        coordenadas.source_lat = source.split(";")[0]
        coordenadas.source_long = source.split(";")[1]

        coordenadas.destination_lat = destination.split(";")[0]
        coordenadas.destination_long = destination.split(";")[1]

        console.log(coordenadas.destination_lat)
    }
    else{
        alert("Elige coordenadas")
        window.history.back()
    }
}