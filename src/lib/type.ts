
export type menuItems = {
    _id: string
    category: string,
    name: string,
    recipe: string,
    price: number,
    image: string
}

export type cardProps = {
    item: menuItems
}

export type PopularMenuProps = menuItems[]

export type ReviewItemProps = {
    _id: string,
    name: string,
    details: string,
    rating?: number 
}

export type reviewProp = {
    review: ReviewItemProps
}
export type ReviewProps = ReviewItemProps[]

export type menuCoverProp = {
    bgImage: string
    title: string
    subTitle: string
}

export type menuCategoriesProps = {
    items: PopularMenuProps
    title: string
    subTitle: string
    img: string
}