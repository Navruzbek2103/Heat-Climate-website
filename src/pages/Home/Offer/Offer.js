import { v4 as GeneratorId } from "uuid";
import OfferImg from "./../../../assets/images/section-offer-setting-icon.svg"

const offerData = [
  {
    id: GeneratorId(),
    title: "ВСЕ ВИДЫ УСЛУГ РЕМОНТ КОТЛОВ",
    icon: {OfferImg},
  },
  {
    id: GeneratorId(),
    title: "ДАЕМ ГАРАНТИЮ РЕМОНТ КОТЛОВ",
    icon: { OfferImg },
  },
  {
    id: GeneratorId(),
    title: "ВЫГОДНЫЕ ЦЕНЫ РЕМОНТ КОТЛОВ И УСТАНОВКА КОТЛОВ",
    icon: { OfferImg },
  },
  {
    id: GeneratorId(),
    title: "БЕСПЛАТНЫЕ УСЛУГИ",
    icon: { OfferImg },
  },
  {
    id: GeneratorId(),
    title: "РАБОТАЕМ ПО ДОГОВОР",
    icon: { OfferImg },
  },
  {
    id: GeneratorId(),
    title: "КАЧЕСТВЕННЫЕ РАСХОДНЫЕ МАТЕРИАЛЫ",
    icon: { OfferImg },
  },
]

export default offerData;