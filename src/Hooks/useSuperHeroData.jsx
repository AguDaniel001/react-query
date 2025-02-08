import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHero = async ({ queryKey }) => {
    const heroId = queryKey[1];
    const response = await axios.get(`http://localhost:4000/superheroes/${heroId}`)
  return response.data;
}

export const useSuperHeroData = (heroId) => {
  return useQuery(['super-hero', heroId], fetchSuperHero);
}