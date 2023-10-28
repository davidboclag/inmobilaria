export interface Imagen {
    PkImagen: number;
    FkPropiedad: string;
    Orden: string;
    Uri: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toImagen(json: string): Imagen {
        return JSON.parse(json);
    }

    public static imagenToJson(value: Imagen): string {
        return JSON.stringify(value);
    }
}
