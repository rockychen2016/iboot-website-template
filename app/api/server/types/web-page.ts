import { Metadata } from "next";


interface PageContent {
    metadata: Metadata,
}

export interface HomePageContent extends PageContent {
    content: Website
}

export interface ChannelPageContent extends PageContent {
    content: WebChannel
}

export interface ProductPageContent extends PageContent {
    content: ProductContent
}
