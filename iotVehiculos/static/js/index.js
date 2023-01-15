document.addEventListener('DOMContentLoaded',()=>{
    let tablaVendedor = new Chart(document.getElementById('grafEncendido'),{
        type:'line',
        options:{
            scales:{
                x:{
                    grid:{
                        display: false,
                    },
                },
                y:{
                    max:1,
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
                label:'Encendido del vehiculo',
                backgroundColor:'#0275d8',
                data:[],
            }]
        }
    })

    setInterval(()=>{
        fetch('http://localhost:8000/iotVehiculos/enviarDatos?cantidad=20')
        .then(response=>response.json())
        .then(data => {
            console.log(data)
            tablaVendedor.data.labels = data.registroTiempos
            tablaVendedor.data.datasets[0].data = data.informacionVehiculo
            tablaVendedor.update()
        })
    },1000)
})