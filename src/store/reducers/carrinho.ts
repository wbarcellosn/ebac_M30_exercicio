import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarPro: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((item) => item.id === produto.id)) {
        alert('Este produto já foi adicionado ao carrinho.')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionarPro } = carrinhoSlice.actions
export default carrinhoSlice.reducer
