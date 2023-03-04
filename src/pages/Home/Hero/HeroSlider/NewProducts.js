import { v4 as GeneratorId } from "uuid";
import KotyolAristonCardImg1 from "./../../../../assets/images/Kotyol/KotyolAriston-card-img-1.png"
import KotyolAristonCardImg2 from "./../../../../assets/images/Kotyol/KotyolAriston-card-img-2.png"
import RadiatorCardImg1 from "./../../../../assets/images/Radiator/radiator-card-img-1.png"
import RadiatorCardImg2 from "./../../../../assets/images/Radiator/radiator-card-img-2.png"
import BoylerCardImg1 from "./../../../../assets/images/Boyler/boyler-card-img-1.png"
import BoylerCardImg2 from "./../../../../assets/images/Boyler/boyler-card-img-2.png"
import NasosCardImg1 from "./../../../../assets/images/nasos/nasos-card-img-1.png"
import NasosCardImg2 from "./../../../../assets/images/nasos/nasos-card-img-2.png"
import ArmaturaCardImg1 from "./../../../../assets/images/Арматура/armatura-card-img-1.jpg"
import ArmaturaCardImg2 from "./../../../../assets/images/Арматура/armatura-card-img-2.jpg"



const NewProducts = [
  {
    id: GeneratorId(),
    productName: "Котлы",
    productCode: "New Котлы",
    productPrice: 6400000,
    productBrand: "Artel",
    productImg: [KotyolAristonCardImg1, KotyolAristonCardImg2],
    OsType: "OS type",
    displayType: "Retina",
    diagonal: "6.7",
    camera: "12 Mpx",
  },

  {
    id: GeneratorId(),
    productName: "Радиатор",
    productCode: "New Радиатор",
    productPrice: 6400000,
    productBrand: "Artel",
    productImg: [RadiatorCardImg1, RadiatorCardImg2],
    OsType: "OS type",
    displayType: "Retina",
    diagonal: "6.7",
    camera: "12 Mpx",
  },

  {
    id: GeneratorId(),
    productName: "Бойлеры и баки",
    productCode: "New Бойлеры и баки",
    productPrice: 2300000,
    productBrand: "Artel",
    productImg: [BoylerCardImg1, BoylerCardImg2],
    OsType: "OS type",
    displayType: "Retina",
    diagonal: "6.7",
    camera: "12 Mpx",
  },

  {
    id: GeneratorId(),
    productName: "Насосы",
    productCode: "New Насосы",
    productPrice: 6400000,
    productBrand: "Artel",
    productImg: [NasosCardImg1, NasosCardImg2],
    OsType: "OS type",
    displayType: "Retina",
    diagonal: "6.7",
    camera: "12 Mpx",
  },

  {
    id: GeneratorId(),
    productName: "Арматура",
    productCode: "New Арматура",
    productPrice: 6400000,
    productBrand: "Artel",
    productImg: [ArmaturaCardImg1, ArmaturaCardImg2],
    OsType: "OS type",
    displayType: "Retina",
    diagonal: "6.7",
    camera: "12 Mpx",
  },
]

export default NewProducts;