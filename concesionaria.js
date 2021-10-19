let autos = require("./autos")/* requerir módulo autos */



const concesionaria = 

{ 
    autos: autos,
    buscarAuto:  function (patentes)
    {  

        for (let i=0;i<this.autos.length;i++)
        {
            if(autos[i].patente===patentes)
            {
                return autos[i]
            }
        }
        return null       
    }
         
,
    venderAuto: function (venderPatente)
    {
       
            if(venderPatente===this.buscarAuto(venderPatente).patente)
            {
                this.buscarAuto(venderPatente).vendido=true
            }
            else
            {
                return null
            }
                           
    },
    autosParaLaVenta: function()
    {
        let aVender = this.autos.filter(function(detalle)
        {
             return (detalle.vendido===false)
      
        })

            return aVender
    },
    autosNuevos:    function()
    {
       let nuevos=this.autosParaLaVenta().filter(function(recorrido)
        {
             return (recorrido.km<=100)
      
        })
        return nuevos  
    } ,
    listaDeVentas: function()
    {   
        let preciosVendidos=[]
        for (let i=0;i<this.autos.length;i++)
        {
            if(this.autos[i].vendido===true)
            {
                preciosVendidos.push(this.autos[i].precio)
            }     
        }
        
        return preciosVendidos
        
                  
    },
   totalDeVentas: function()
    { 
        if(this.listaDeVentas()!=[])
        {
            
            let totalvendidos=this.listaDeVentas().reduce((acumulador,elemento) => acumulador+elemento)
            return totalvendidos    
        } 
        else 
        {          
           return 0
        }
    },
    puedeComprar: function(auto, persona)
    {
         return(persona.capacidadDePagoTotal >= auto.precio && persona.capacidadDePagoEnCuotas > (auto.precio / auto.cuotas));
    }, 
    autosQuePuedeComprar: function(persona1)
    {   
        let listaDeautos=[]
        let autosparacomprar=this.autosParaLaVenta().forEach(element => {
            if(this.puedeComprar(element,persona1)===true)
        {   
            listaDeautos.push(element)
        }} )
        return listaDeautos                
    }


};
/*    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000*/
console.log(concesionaria.autosQuePuedeComprar({nombre: "Juan",
    capacidadDePagoTotal: 100000,
    capacidadDePagoEnCuotas: 20000}))

/*concesionaria.venderAuto("APL123")
concesionaria.venderAuto("JJK116")
console.log(concesionaria.listaDeVentas())
console.log(concesionaria.totalDeVentas())
//console.log(concesionaria.autos)*/
