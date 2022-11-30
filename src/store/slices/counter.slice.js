import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const counterSlice = createSlice({
		name: 'counter',
    initialState: '1',
    reducers: {//el action es lo que está dentro del reducers
        increment: () =>{
            return 2
        }
    }
})

export const { increment } = counterSlice.actions;//esto exportaria al action desde el slice

export default counterSlice.reducer;