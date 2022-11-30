import { configureStore } from '@reduxjs/toolkit'
import  pokeSlice  from './slices/pokemon.slice'//recuerda dejar el estado (state) sin {}

export default configureStore({
  reducer: {
    pokemon: pokeSlice
	}
})