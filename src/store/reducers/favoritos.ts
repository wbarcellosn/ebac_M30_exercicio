import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFav: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((item) => item.id === produto.id)) {
        const favoritosSemProduto = state.itens.filter(
          (item) => item.id !== produto.id
        )
        state.itens = favoritosSemProduto
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionarFav } = favoritosSlice.actions
export default favoritosSlice.reducer
