import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile, login } from "../../api/auth";

export const loginThunk = createAsyncThunk(
    "/auth/login",
     async(body, {rejectWithValue})=> {
    try{ 
        const data =  await login(body)
        console.log('data', data)
        return data
    }catch(error){
        console.log('error', error)
      return  rejectWithValue(error.response.data.message)
    }
}


)

// Результат выполнения функции login возвращается из createAsyncThunk, чтобы быть доступным в обработчиках состояния.

export const profileThunk = createAsyncThunk(
    "/auth/profile",
     async(_, {rejectWithValue})=> {
    try{ 
        const data =  await getProfile()
       
        return data
    }catch(error){
       
      return  rejectWithValue(error.response.data.message)
    }
}


)