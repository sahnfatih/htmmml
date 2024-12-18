export type KirazImage = {
    url: string | undefined;
    src: string;
    alt?: string;
    width?: number;
    height?: number;
};
export type KirazNavigationLink = {
    href: string;
    label: string;
    sublinks: KirazNavigationLink[];
};
export type HeaderProps = {
    logo: KirazImage;
    links?: KirazNavigationLink[];
};
export type StatisticBox = {
    stat: string;
    title: string;
    description: string;
};
export type ColProps = {
    name: string;
    colSize: 'col-3' | 'col-6' | 'col-12';
    props: Record<string, any>;
};
export type SliderSlide = {
    image: KirazImage;
    title?: string;
    description?: string;
    link?: string;
};
export type SliderProps = {
    slides: SliderSlide[];
    autoPlay?: boolean;
    interval?: number;
};
export interface ProductBoxProps {
    imageUrl: string;
    title: string;
    slug: string;
    productUrl: string;
    price: number;
    delPrice?: number;
}
//# sourceMappingURL=types.d.ts.map