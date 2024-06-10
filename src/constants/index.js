import { send, shield, star, rubezh, bolid, sonar, rvi, hikvision, argusspector, interm, pozhtehtika, perco, shtemenkoVideo, shtemenkoImg, poliklinnikaImg, komissariatVideo, komissariatImg, mchs1, mchs2, sro1, sro2, sro3, sro4 } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Главная",
  },
  {
    id: "services",
    title: "Услуги",
  },
  {
    id: "products",
    title: "Объекты",
  },
  {
    id: "license",
    title: "Разрешения",
  },
  {
    id: "contacts",
    title: "Контакты",
  },
];

export const quality = [
  {
    id: "quality-1",
    icon: star,
    title: "Подготовка",
    content:
      "рабочей зоны и оснастки для монтажа. Использование качественных материалов и оборудования",
  },
  {
    id: "quality-2",
    icon: shield,
    title: "Соблюдение",
    content:
      "проектных решений и норм строительства",
  },
  {
    id: "quality-3",
    icon: send,
    title: "Тестирование",
    content:
      "систем после монтажа для выявления возможных проблем и дефектов",
  },
];


export const services = [
  {
    id: "service-1",
    icon: star,
    title: "Электромонтаж",
    content:
      "услуги монтажа и пусконаладки наружных и внутренних систем электроснабжения, систем электроосвещения, заземления  и  молниезащиты",
    details:
      ["монтаж наружного электроснабжения согласно проектной документации - кабельные линии 35-10-0,4 кВ, трансформаторные подстанции, опоры наружного освещения, фасадное освещение, архитектурная подсветка",
        "монтаж внутреннего электроснабжения - вводно-распределительных устройств, распределительных щитов, групповых сетей электроснабжения и электроосвещения, конечного оборудования (выключателей, розеток, осветительных приборов)",
        "электролаборатория"
      ],
  },
  {
    id: "service-2",
    icon: shield,
    title: "Слаботочные системы",
    content:
      "монтаж и интеграция систем оповещения о пожаре, монтаж систем контроля доступа и систем видеонаблюдения",
    details:
      ["монтаж автоматической системы пожарной сигнализации (АПС), автоматической установки газового пожаротушения (АГПТ)",
        "установка, настройка и проверка систем контроля доступа (СКУД), монтаж системы охранного телевидения (СОТ), монтаж охранной сигнализации (ОС)",
        "монтаж структурированной кабельной системы СКС",],
  },
  {
    id: "service-3",
    icon: send,
    title: "Диспетчеризация",
    content:
      "Поставка средств связи. Сборка и программирование АРМ диспетчеров. Пуско-наладочные работы. ",
    details: [
      "Вентиляция и кондиционирование (ОВ), теплоснабжение (ИТП), холодоснабжение (ХС), холодильные машины (Чиллеры), насосные станции (ВК), электроснабжение, освещение, прочие инженерные системы"
    ],
  },
];

export const product = [
  {
    id: "product-1",
    title: "Объект культурного наследия Кригскомиссариат на Космодамианской набережной",
    name: "Москва",
    content:
      "Проведены работы: электроснабжения, электроосвещения, СКУД, АПС, ОС",
    img: komissariatImg,
    video: komissariatVideo,
  },
  {
    id: "product-2",
    title: "Краснодарское высшее военное училище имени генерала армии С.М.Штеменко",
    name: "Краснодар",
    content:
      "Проведены работы: вынос инженерных сетей из пятна застройки, наружное электроснабжение, фасадное освещение, монтаж кабельной канализации",
    img: shtemenkoImg,
    video: shtemenkoVideo,
  },
  {
    id: "product-3",
    content:
      "Проведены работы по устройству систем вентиляции, кондиционирования, а также слаботочных систем, в том числе пожарной сигнализации, дымоудаления и оповещения.",
    name: "Москва",
    title: "Объект культурного наследия Кригскомиссариат на Космодамианской набережной",
    img: poliklinnikaImg,
    video: poliklinnikaImg,
  },
  // {
  //   id: "product-4",
  //   content:
  //     "Проведены работы по устройству систем вентиляции, кондиционирования, а также слаботочных систем, в том числе пожарной сигнализации, дымоудаления и оповещения.",
  //   name: "Москва",
  //   title: "Объект культурного наследия Кригскомиссариат на Космодамианской набережной",
  //   img: komissariatImg,
  //   video: komissariatVideo,
  // },
];

export const license = [
  {
    id: "licence-1",
    title: "Лицензия МЧС",
    img: [mchs1, mchs2],
  },
  {
    id: "licence-2",
    title: "Допуск СРО монтаж",
    img: [sro1, sro2, sro3, sro4],
  },
  // {
  //   id: "licence-3",
  //   title: "Допуск СРО проектирование",
  //   img: sro,
  // },
];

export const manufacturers = [
  {
    id: "manufacturer-1",
    logo: rubezh,
  },
  {
    id: "manufacturer-2",
    logo: bolid,
  },
  {
    id: "manufacturer-3",
    logo: sonar,
  },
  {
    id: "manufacturer-4",
    logo: rvi,
  },
  {
    id: "manufacturer-5",
    logo: argusspector,
  },
  {
    id: "manufacturer-6",
    logo: interm,
  },
  {
    id: "manufacturer-7",
    logo: pozhtehtika,
  },
  {
    id: "manufacturer-8",
    logo: perco,
  },
  {
    id: "manufacturer-9",
    logo: hikvision,
  },
];

export const footerLists = [
  // {
  //   title: "Useful Links",
  //   links: [
  //     {
  //       name: "Content",
  //       link: "https://www.hoobank.com/content/",
  //     },
  //     {
  //       name: "How it Works",
  //       link: "https://www.hoobank.com/how-it-works/",
  //     },
  //     {
  //       name: "Create",
  //       link: "https://www.hoobank.com/create/",
  //     },
  //     {
  //       name: "Explore",
  //       link: "https://www.hoobank.com/explore/",
  //     },
  //     {
  //       name: "Terms & Services",
  //       link: "https://www.hoobank.com/terms-and-services/",
  //     },
  //   ],
  // },
  // {
  //   title: "Community",
  //   links: [
  //     {
  //       name: "Help Center",
  //       link: "https://www.hoobank.com/help-center/",
  //     },
  //     {
  //       name: "Partners",
  //       link: "https://www.hoobank.com/partners/",
  //     },
  //     {
  //       name: "Suggestions",
  //       link: "https://www.hoobank.com/suggestions/",
  //     },
  //     {
  //       name: "Blog",
  //       link: "https://www.hoobank.com/blog/",
  //     },
  //     {
  //       name: "Newsletters",
  //       link: "https://www.hoobank.com/newsletters/",
  //     },
  //   ],
  // },
  {
    title: "Контакты",
    items: [
      {
        name: "Адрес",
        details: "105118, город Москва, ш Энтузиастов, д. 34, помещ. 10п",
      },
      {
        name: "Телефон",
        details: "+7 981 551 49 04",
      },
      {
        name: "E-mail",
        details: "tz@trizons.ru",
      },
    ],
  },
];

// export const socialMedia = [
//   {
//     id: "social-media-1",
//     icon: instagram,
//     link: "https://www.instagram.com/",
//   },
//   {
//     id: "social-media-2",
//     icon: facebook,
//     link: "https://www.facebook.com/",
//   },
//   {
//     id: "social-media-3",
//     icon: twitter,
//     link: "https://www.twitter.com/",
//   },
//   {
//     id: "social-media-4",
//     icon: linkedin,
//     link: "https://www.linkedin.com/",
//   },
// ];