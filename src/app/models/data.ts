import { Article } from "./article";

export interface Data {
    data:Article[],
    total:number,
    page:number,
    last_page:number
}
