import React, {Fragment, useState} from 'react';


const Form  = () =>{

    const [datos, setDatos] = useState({
        age: '',
        job: '',
        marital: '',
        education: '',
        default: '',
        housing: '',
        loan: '',
        campaign: '',
        contact: '',
        month: '',
        dayofweek: '',
        pdays: '',
        previous: '',
        poutcome: '',
        empvarrate: '',
        conspriceidx: '',
        consconfidx: '',
        Euribor3m: '',
        Nremployed: ''



    })
    
    const handleInputChange = (event) => {
            //console.log(event.target.value)
            setDatos({
                ...datos,
                [event.target.name] : event.target.value 
            })
    }

    const send = (event) =>{
        event.preventDefault();
        console.log(datos.age + ' ' + datos.job + ' ' + datos.marital + ' ' + datos.education + ' ' + datos.default + ' ' + datos.housing + ' ' + datos.loan + ' ' + datos.campaign + ' ' + datos.contact + ' ' + datos.month + ' ' + datos.dayofweek)
    }   

    return(
        <Fragment>
            <h1>Ingresar datos del cliente</h1>
            <p></p>
            <h3>Datos Basicos</h3>
            <p></p>
            <form className="row" onSubmit={send}>
                <div className="col-md-3">
                <input name='age' type='number' placeholder= "Ingresar Edad" className="form-control" onChange={handleInputChange}/>
                </div>
                <div className="col-md-3">
                    <select name='job' type='text' placeholder= "Tipo de trabajo" className="form-control" onChange={handleInputChange} >
                        <option  value="unknown">Tipo de trabajo</option>
                        <option  value="admin">Administrador</option>
                        <option  value="blue-collar">Obrero</option>
                        <option  value="entrepreneur">emprendedor</option>
                        <option  value="housemaid">Empleada domestica</option>
                        <option  value="management">gerencia</option>
                        <option  value="retired">jubilado</option>
                        <option  value="self-employed">Independiente</option>
                        <option  value="services">Prestador de servicios</option>
                        <option  value="student">Estudiante</option>
                        <option  value="technician">Tecnico</option>
                        <option  value="unemployed">Desempleado</option>
                        <option  value="unknown">Otro</option>
                    </select>
                </div> 
                <div className="col-md-3">
                <select name='marital' type='text' className="form-control" onChange={handleInputChange} >
                        <option  value="unknown">Estado Marital</option>
                        <option  value="divorced">Divorciado / Viudo</option>
                        <option  value="married">Casado / Casada </option>
                        <option  value="single">Soltero / Soltera</option>
                        <option  value="unknown">Otro</option>
                    </select>
                </div>
                <div className="col-md-3">
                <select name='education' type='text' className="form-control" onChange={handleInputChange} >
                        <option  value="unknown">Educación</option>
                        <option  value="basic.4y">Basico 4 años</option>
                        <option  value="basic.6y">Basico 6 años </option>
                        <option  value="basic.9y">Basico 9 años</option>
                        <option  value="high.school">Secundaria</option>
                        <option  value="billiterate">Analfabeto</option>
                        <option  value="professional.course">Professional curso</option>
                        <option  value="university.degree">Titulo universitario</option>
                        <option  value="unknown">Otro</option>
                    </select>
                </div>
                <div className="col-md-3">
                <select name='default' type='boolean' className="form-control" onChange={handleInputChange} >
                        <option  value="unknown">Credito en Mora</option>
                        <option  value="yes">Si</option>
                        <option  value="no">No </option>
                        <option  value="unknown">desconocido</option>
                    </select>
                </div>
                <div className="col-md-3">
                <select name='housing' type='boolean' className="form-control" onChange={handleInputChange} >
                        <option  value="unknown">Prestamo vivienda</option>
                        <option  value="yes">Si</option>
                        <option  value="no">No </option>
                        <option  value="unknown">desconocido</option>
                    </select>
                </div>
                <div className="col-md-3">
                <select name='loan' type='boolean' className="form-control" onChange={handleInputChange} >
                        <option  value="unknown">prestamo personal</option>
                        <option  value="yes">Si</option>
                        <option  value="no">No </option>
                        <option  value="unknown">desconocido</option>
                    </select>
                </div>       
            </form>
            <p></p>
            <h3>Datos ultimo contacto</h3>
            <p></p>
            <p></p>
            <form className="row" onSubmit={send}>
                <div className="col-md-3">
                    <select name='contact' type='text' placeholder= "Tipo de trabajo" className="form-control" onChange={handleInputChange} >
                        <option  value="unknown">Tipo de contacto</option>
                        <option  value="cellular">Celular</option>
                        <option  value="telephone">Telefono</option>
                        <option  value="unknown">Otro</option>
                    </select>
                </div> 
                <div className="col-md-3">
                <select name='month' type='text' className="form-control" onChange={handleInputChange} >
                        <option  value="unknown"> Mes de contacto</option>
                        <option  value="jan">Enero</option>
                        <option  value="feb">Febrero </option>
                        <option  value="mar">Marzo</option>
                        <option  value="abr">Abril</option>
                        <option  value="may">Mayo</option>
                        <option  value="jun">Junio</option>
                        <option  value="july">Julio</option>
                        <option  value="aug">Agosto</option>
                        <option  value="sep">Septiembre</option>
                        <option  value="oct">Octubre</option>
                        <option  value="nov">Noviembre</option>
                        <option  value="dec">Diciembre</option>
                    </select>
                </div>
                <div className="col-md-3">
                <select name='dayofweek' type='text' className="form-control" onChange={handleInputChange} >
                        <option  value="unknown">Dia de la semana</option>
                        <option  value="mon">Lunes</option>
                        <option  value="tue">Martes</option>
                        <option  value="wed">Miercoles</option>
                        <option  value="thu">Jueves</option>
                        <option  value="fri">Viernes</option>
                    </select>
                </div>
                <div className="col-md-3">
                <select name='duration' type='boolean' className="form-control" onChange={handleInputChange} >
                        <option  value="unknown">Tiempo de contacto</option>
                        <option  value="yes">mas de 1 segundos</option>
                        <option  value="no">menos de 1 segundo </option>
                        <option  value="unknown">desconocido</option>
                    </select>
                </div>
            </form>
            <p></p>
            <h3> Datos Adicionales</h3>
            <p></p>
            <p></p>
            <form className="row" onSubmit={send}>
                <div className="col-md-3">
                    <input name='campaign' type='number' placeholder= "Ingresar numero de contactos" className="form-control" onChange={handleInputChange}/> 
                </div> 
                <div className="col-md-3">
                    <input name='pdays' type='number' placeholder= "Numero de días luego de contacto" className="form-control" onChange={handleInputChange}/> 
                </div>
                <div className="col-md-3">
                    <input name='previous' type='number' placeholder= "Contactos realizados en esta campaña" className="form-control" onChange={handleInputChange}/> 
                </div>
                <div className="col-md-3">
                <select name='poutcome' type='text' className="form-control" onChange={handleInputChange} >
                        <option  value="unknown">Resultado de campaña</option>
                        <option  value="failure">Fracaso</option>
                        <option  value="nonexistent">Inexistente</option>
                        <option  value="success">Exito</option>
                    </select>
                </div>   
            </form>
            <p></p>
            <h3> Datos Sociales y economicos</h3>
            <p></p>
            <p></p>
            <form className="row" onSubmit={send}>
                <div className="col-md-3">
                    <input name='empvarratee' type='number' placeholder= "Emp.var.rate" className="form-control" onChange={handleInputChange}/> 
                </div> 
                <div className="col-md-3">
                    <input name='conspriceidx' type='number' placeholder= "cons.price.idx" className="form-control" onChange={handleInputChange}/> 
                </div>
                <div className="col-md-3">
                    <input name='consconfidx' type='number' placeholder= "cons.conf.idx" className="form-control" onChange={handleInputChange}/> 
                </div>
                <div className="col-md-3">
                <input name='Euribor3m' type='number' placeholder= "Euribor3m" className="form-control" onChange={handleInputChange}/> 
                </div>
                <div className="col-md-3">
                <input name='Nremployed' type='number' placeholder= "Nr.employed" className="form-control" onChange={handleInputChange}/> 
                </div>
                <div className="ButSend">
                <button className="btn btn-primary" type="submit">Send</button>
                </div>    
            </form>
        </Fragment>

        
    );
}

export default Form;