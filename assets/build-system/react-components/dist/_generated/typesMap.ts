const typesMap: Record<string, Record<string, string>> = {
  KirazImage: {
    url: "string",
    src: "string",
    alt: "string",
    width: "number",
    height: "number",
  },
  KirazNavigationLink: {
    href: "string",
    label: "string",
    sublinks: "KirazNavigationLink[]",
  },
  HeaderProps: {
    logo: "KirazImage",
    links: "KirazNavigationLink[]",
  },
  StatisticBox: {
    stat: "string",
    title: "string",
    description: "string",
  },
  ColProps: {
    name: "string",
    colSize: "'col-3' | 'col-6' | 'col-12'",
    props: "Record<string, any>",
  },
  SliderSlide: {
    image: "KirazImage",
    title: "string",
    description: "string",
    link: "string",
  },
  SliderProps: {
    slides: "SliderSlide[]",
    autoPlay: "boolean",
    interval: "number",
  },
};

export default typesMap;