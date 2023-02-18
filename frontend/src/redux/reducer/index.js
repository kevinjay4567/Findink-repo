import {
    ALL_TATUADORES,
    FILTER_BY_CITY,
    FILTER_BY_COUNTRY,
    GET_TATUADORES,
    FILTER_BY_STYLE
} from "../actions";
import AregiPerfil from '../../assets/AregiPerfil.jpg'
import AregiTattoo from '../../assets/AregiTattoo.jpg'
import MoncadaPerfil from '../../assets/MoncadaPerfil.JPG'
import MoncadaTattoo from '../../assets/MoncadaTattoo.jpg'
import ValeriaPerfil from '../../assets/ValeriaPerfil.jpg'
import ValeriaTattoo from '../../assets/ValeriaTattoo.jpg'
import BokyPerfil from '../../assets/BokyPerfil.jpg'
import BokyTattoo from '../../assets/BokyTattoo.jpg'
import NikPerfil from '../../assets/NikPerfil.jpg'
import NikTattoo from '../../assets/NikTattoo.jpg'
import NanaPerfil from '../../assets/NanaPerfil.jpg'
import NanaTattoo from '../../assets/NanaTattoo.jpg'


const initialState = {
    tatuadores: [
        {
            nombre_real: "Andres Arenas",
            nombre: "Aregui",
            id: 1,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Anime",
            foto_de_perfil: AregiPerfil,
            foto_tattoo: AregiTattoo,
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 2568542
        },
        {
            nombre_real: "Sebastian Moncada",
            nombre: "Moncada ink",
            id: 2,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Blackwork",
            foto_de_perfil: MoncadaPerfil,
            foto_tattoo: MoncadaTattoo,
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 6
        }, {
            nombre_real: "Valeria Sanchez",
            nombre: "Valeria S. ink",
            id: 3,
            pais: "Colombia",
            ciudad: "Bogota",
            estilos: "Full color",
            foto_de_perfil: ValeriaPerfil,
            foto_tattoo: ValeriaTattoo,
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 35
        }, {
            nombre_real: "Cristian Castañeda",
            nombre: "Boky",
            id: 4,
            pais: "Mexico",
            ciudad: "Leon",
            estilos: "Full color",
            foto_de_perfil: BokyPerfil,
            foto_tattoo: BokyTattoo,
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 12
        },  {
            nombre_real: "Nikoll Lopez",
            nombre: "Nik ink",
            id: 7,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Realismo",
            foto_de_perfil: NikPerfil,
            foto_tattoo: NikTattoo,
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 9
        }, {
            nombre_real: "Natalia Marín Rico",
            nombre: "Nana Tattoo",
            id: 8,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Blackwork",
            foto_de_perfil: NanaPerfil,
            foto_tattoo: NanaTattoo,
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 0
        }
    ],
    tatuadores2: [
        {
            nombre_real: "Andres Arenas",
            nombre: "Aregui",
            id: 1,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Anime",
            foto_de_perfil: AregiPerfil,
            foto_tattoo: AregiTattoo,
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 2568542
        },
        {
            nombre_real: "Sebastian Moncada",
            nombre: "Moncada ink",
            id: 2,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Blackwork",
            foto_de_perfil: MoncadaPerfil,
            foto_tattoo: MoncadaTattoo,
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 6
        }, {
            nombre_real: "Valeria Sanchez",
            nombre: "Valeria S. ink",
            id: 3,
            pais: "Colombia",
            ciudad: "Bogota",
            estilos: "Full color",
            foto_de_perfil: ValeriaPerfil,
            foto_tattoo: ValeriaTattoo,
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 35
        }, {
            nombre_real: "Cristian Castañeda",
            nombre: "Boky",
            id: 4,
            pais: "Mexico",
            ciudad: "Leon",
            estilos: "Full color",
            foto_de_perfil: BokyPerfil,
            foto_tattoo: BokyTattoo,
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 12
        },  {
            nombre_real: "Nikoll Lopez",
            nombre: "Nik ink",
            id: 7,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Realismo",
            foto_de_perfil: NikPerfil,
            foto_tattoo: NikTattoo,
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 9
        }, {
            nombre_real: "Natalia Marín Rico",
            nombre: "Nana Tattoo",
            id: 8,
            pais: "Colombia",
            ciudad: "Medellín",
            estilos: "Blackwork",
            foto_de_perfil: NanaPerfil,
            foto_tattoo: NanaTattoo,
            galeria: ["https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg", "https://findink.com.co/wp-content/uploads/2021/08/0D32CB44-3F67-4922-A40F-324AFA6EF399-576x1024.jpeg"],
            rate: 5,
            visitas: 0
        }
    ]
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TATUADORES:
            return {
                ...state
            }
        case FILTER_BY_COUNTRY:
            let paises = state.tatuadores
            let pais = action.payload
            let paisesFiltered = pais === 'all' ? paises : paises.filter((e) => e.pais === pais)

            return {
                ...state,
                tatuadores: paisesFiltered
            }
        case FILTER_BY_CITY:
            let ciudades = state.tatuadores
            let ciudad = action.payload
            let ciudadesFiltered = ciudad === 'all' ? ciudades : ciudades.filter((e) => e.ciudad === ciudad)

            return {
                ...state,
                tatuadores: ciudadesFiltered
            }
        case FILTER_BY_STYLE:
            let estilos1 = state.tatuadores
            let estilos = action.payload
            let cestilosFiltered = estilos === 'all' ? estilos1 : estilos1.filter((e) => e.estilos === estilos)

            return {
                ...state,
                tatuadores: cestilosFiltered
            }
        case ALL_TATUADORES:
            let allTatuadores = state.tatuadores2
            return {
                ...state,
                tatuadores: allTatuadores
            }
        default: return { ...state }

    };
};

export default rootReducer;
