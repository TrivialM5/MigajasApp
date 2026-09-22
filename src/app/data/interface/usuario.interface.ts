export interface usuario {
    id: number,
    nombre: string,
    correo: string,
    numero: string,
    contrasena: string,
    direccion: string,
    conjunto?: string, 
    torre_apto?: string
}