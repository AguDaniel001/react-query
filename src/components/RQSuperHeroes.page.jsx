import { Link } from 'react-router-dom'
import { useSuperHeroesData } from "../hooks/useSuperHeroesData"

export const RQSuperHeroesPage = () => {
  
  const onSuccess = (data) => {
    console.log('Perform side effect after data fetching', data)
  }

  const onError = (error) => {
    console.log('Perform side effect after encountering error', error)
  }

  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError)

  console.log({isLoading, isFetching})

  if(isLoading || isFetching) {
    return <h2>Loading...</h2>
  }

  if(isError) {
    return <h2>{error.message}</h2>
  }
  
  return (
    <>
    <h2>RQ Super Heroes Page</h2>
    <button onClick={refetch}>Refresh</button>
    {
      data?.data.map(hero => {
        return <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </div>
      })

      //Data Transformation
      // data.map((hero) => {
      //   return <div key={hero.name}>{hero.name}</div>
      // })
    }
    
    </>
  )
  
}
