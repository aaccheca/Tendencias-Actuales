import{CategoryModel} from "./category.model"

export interface ProductModel{
    id:number;
    title:string;
    price:number;
    description:string;
    category:CategoryModel;
    images:string[];
}

export interface createProduct extends Omit<ProductModel,'id'|'category'>{
    categoryId:number;
}

export interface updateProduct extends  Partial<ProductModel>{
    categoryId:number;
}