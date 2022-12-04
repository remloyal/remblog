import { atom } from 'recoil'

// 商品 state
export const productAtom = atom({
    key: 'productState',
    default: (async () => {
        // const res: any = await getProductList()
        // return res.data.products 
        return ''
    })() // 返回 promise
})

// 购物车 state
export const cartAtom = atom({
    key: 'cartState',
    default: []
})

// 订单 state
export const orderAtom = atom({
    key: 'orderState',
    default: []
})