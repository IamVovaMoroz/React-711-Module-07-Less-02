import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://api.escuelajs.co/api/v1/',
})

// setToken запускаем, когда прлучаем login -> const { data } = await instance.post('/auth/login', body)
// без редакса, делаем запрос на логин, получаем данные и set токен
const setToken = (token) => {
	instance.defaults.headers.common['Authorization'] = token 

}

export const login = async (body) => {
    const { data } = await instance.post('/auth/login', body)
return data
}



export const signUp = async (body) => {
	return await instance.post('/users', body)
}




// export const login = async (body) => {
// 	const { data } = await instance.post('/auth/login', body)
// 	if ('access_token' in data) setToken(`Bearer ${data.access_token}`)
// 	return data
// }

// export const login = async (body) => {
//     try {
//       const { data } = await instance.post('/auth/login', body)
//       if ('access_token' in data) {
//         setToken(`Bearer ${data.access_token}`)
//       }
//       console.log("data login = asyn",data) // Выводим данные в консоль
//       return data
//     } catch (error) {
//       console.error("error login = asyn",error)
//       throw error
//     }
//   }

export const getProfile = async () => {
	const { data } = await instance('/auth/profile')
	return data
}