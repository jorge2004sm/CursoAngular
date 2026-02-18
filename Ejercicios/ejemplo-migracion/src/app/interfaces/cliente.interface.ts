export interface ClienteLegacy{
    cod_usr: string
    nom_completo: string
    is_active: number
    last_login_unix: number
}

export interface Cliente{
    id: number
    nombre: string
    activo: boolean
    ultimaConexion: Date
}