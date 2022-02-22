export class DentistModel{
    _id?: string
    cedula : string 
    nombre : string
    apellido : string 
    genero : string
    especialidad : string
    
    constructor(cedula:string, nombre: string, apellido: string, genero : string, especialdad: string){
        this.cedula = cedula
        this.nombre = nombre
        this.apellido = apellido
        this.genero = genero
        this.especialidad = especialdad
    }
}