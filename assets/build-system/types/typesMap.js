const typesMap = {
    KirazImage: {
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
};
export default typesMap;
//# sourceMappingURL=typesMap.js.map