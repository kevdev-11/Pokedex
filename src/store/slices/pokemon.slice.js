import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const pokeSlice = createSlice({
		name: 'pokemon',
    initialState: '',
    reducers: {
        changeName: (state, action)=>{
          const enter = action.payload;
          return enter;
        }
    }
})

export const { changeName } = pokeSlice.actions;

export default pokeSlice.reducer;