export interface Tramite {
    id: number;
    nombre: string;
    descripcion: string;
    enlace_ayuda: string | null;
    etiqueta_btn_accion_1: string | null;
    etiqueta_btn_accion_2: string | null;
    url_prod_1: string | null;
    url_qa_1: string | null;
    url_prod_2: string | null;
    url_qa_2: string | null;
    fecha_creacion: string;
    fecha_inicio_vigencia: string;
    fecha_fin_vigencia: string | null;
    ind_vigencia: string | null;
    metadata: any | null;
    institucion: number; // ID de la institución
    formulario: number; // ID del formulario
    subcategoria: number; // ID de la subcategoría
  }