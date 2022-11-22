import { CategoryItem } from "../categories";

export enum CART_ACTION_TYPES {
  SET_CART_ITEMS = "cart/SET_CART_ITEMS",
  SET_IS_CART_OPEN = "cart/SET_IS_CART_OPEN",
  SET_CART_COUNT = "cart/SET_CART_COUNT",
  SET_CART_TOTAL = "cart/SET_CART_TOTAL",
}
//adds quantity to category items
export type CartItem = CategoryItem & { quantity: number };
