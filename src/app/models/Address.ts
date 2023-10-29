export interface Address {
    FkPropiedad: number;
    FkCiudad: number;
    Ciudad: string;
    FkProvincia: number;
    StreetName: string;
    StreetNumber: string;
    Cercanias: string;
    PostalCode: string;
    Autobus: string;
    Carretera: string;
    TipoVia: string;
    Bloque: string;
    Escalera: string;
    Piso: string;
    Planta: string;
    Puerta: string;
    Latitude: number;
    Longitude: number;
    gStaticMapImage: string;
}