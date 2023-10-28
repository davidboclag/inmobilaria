import { Imagen } from "./Imagen";

export interface Property {
    rowNumber: string;
    is_promo: string;
    id: string;
    FkTipo: number;
    SuperficieTotal: number;
    FkSubtipo: number;
    situacionEspecial: string;
    SupParcela: number;
    PorcObraEjecutada: number;
    ConstructedArea: number;
    UsableArea: number;
    NroPlantas: number;
    FachadaML: number;
    SupSobreRasante: number;
    SuperficieTerciario: number;
    TipologiaActividad: string;
    SuperficieAlmacen: number;
    SuperficieParcelaTerciario: number;
    CategoriaHotel: string;
    Bathrooms: number;
    Bedrooms: number;
    Precio: string;
    PrecioAnterior: string;
    Uso: string;
    Edificabilidad: string;
    StreetName: string;
    Ciudad: string;
    TipoVia: string;
    FkProvincia: number;
    FkCiudad: number;
    ciudadUrl: string;
    nombreProvincia: string;
    VentaOnline: number;
    CitaVirtual: number;
    VisitaFisica: number;
    FechaPublicacion: Date;
    IdExternoGestor: number;
    Garage: number;
    NumGarages: number;
    Latitude: number;
    Longitude: number;
    CampanaEspecial: number;
    DescuentoPrecio: number;
    provinciaUrl: string;
    Rebajado: number;
    EstadoObra: string;
    Description: string;
    Metadescription: string;
    relevancy: number;
    bookingBlocked: number;
    visitBlocked: number;
    originalId: string;
    servicer: string;
    FkCampana: string;
    imagenes: Imagen[];
}

// Converts JSON strings to/from your types
export class Convert {
    public static toProperty(json: string): Property {
        return JSON.parse(json);
    }

    public static propertyToJson(value: Property): string {
        return JSON.stringify(value);
    }
}
