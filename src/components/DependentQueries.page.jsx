import React from 'react'
import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`)
}
const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`)
}
const fetchCourses = () => {
  return axios.get("http://localhost:4000/channels")
}

export const DependentQueriesPage = ({ email }) => {

  const { data: user } = useQuery(["user", email], () => 
    fetchUserByEmail(email))

  const channelId = user?.data.channelId
  const userId = user?.data.id

  useQuery(['courses', channelId], () => fetchCoursesByChannelId(channelId), {
    enabled: !!channelId,
  })

  return  <div>
            <h3>DependentQueries Page</h3>
            <p>User: {userId}</p>
            <p>Channel Name: {channelId}</p>
            <p>Courses: {channelId}</p>
            {/* <p>Courses: {data?.courses}</p> */}
  </div> 
  
}