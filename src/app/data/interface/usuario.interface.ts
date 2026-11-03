export interface usuario {
    id: number,
    nombre: string,
    correo: string,
    numero: string,
    contrasena: string,
    direccion: string,
    localidad?: string,
    barrio?: string,
    conjunto?: string, 
    torre_apto?: string,
    vivienda?: string,
    infoAdicional?: string
}