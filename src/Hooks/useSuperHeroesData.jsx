import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}
export const useSuperHeroesData = (onSuccess, onError) => {
 return useQuery(
    'super-heroes', fetchSuperHeroes, {
      // cacheTime: 5000,  
      // staleTime: 0, 
      // enabled: true,
      // refetchOnMount: true,
      // refetchOnWindowFocus: true,
      // refetchInterval: false,
      // refetchIntervalInBackground: false,
      onSuccess: onSuccess,
      onError: onError,
      // select: (data) => {
      //   return data.data.map((hero) => ({
      //     name: hero.name,
      //   }))
      //   return superHeroNames
      // }
    }
  )
}