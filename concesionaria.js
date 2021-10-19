let autos = require("./autos")/* requerir módulo autos */

const personas =
{
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
}

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
             return (detalle.vendido===false && detalle.km<=100 )
      
        })

            console.log(aVender)
    },
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
        if(this.listaDeVentas()>0)
        {
            
            let totalvendidos=this.listaDeVentas().reduce((acumulador,elemento) =>
        {
          return acumulador+elemento
           
        }
        )
        return totalvendidos    } 
       else 
       {          
           return 0
       }
    },
    puedeComprar: function(persona, auto)
    {
        
    } 

};



//concesionaria.venderAuto("APL123")
concesionaria.venderAuto("JJK116")
console.log(concesionaria.listaDeVentas())
console.log(concesionaria.totalDeVentas())



       