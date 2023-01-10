document.addEventListener('DOMContentLoaded',()=>{
    let tablaVendedor = new Chart(document.getElementById('grafVentas'),{
        type:'line',
        options:{
            scales:{
                x:{
                    grid:{
                        display: false,
                    },
                },
                y:{
                    max:2,
                    min:0,
                    grid:{
                        display: false,
                    },
                },
            },
        },
        data:{
            labels:[],
            datasets:[{
                label:'Datos del vehiculo',
                backgroundColor:'#0275d8',
                data:[],
            }]
        }
    })

    setInterval(()=>{
        fetch('http://localhost:8000/iotVehiculos/enviarDatos?cantidad=5')
        .then(response=>response.json())
        .then(data => {
            console.log(data)
            tablaVendedor.data.labels = data.registroTiempos
            tablaVendedor.data.datasets[0].data = data.informacionVehiculo
            tablaVendedor.update()
        })
    },1000)
})