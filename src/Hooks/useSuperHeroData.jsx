import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperHero = async ({ queryKey }) => {
    const heroId = queryKey[1];
    const response = await axios.get(`http://localhost:4000/superheroes/${heroId}`);
  return response.data;
}
export const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(['super-hero', heroId], fetchSuperHero, {
    initialData: () => {
      const heroes = queryClient.getQueryData('super-heroes')?.data;
      const hero = heroes?.find((hero) => hero.id === parseInt(heroId));

      if (hero) {
        return hero;
      } else {
        return undefined;
      }
    },
  });
}