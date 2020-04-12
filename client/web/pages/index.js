import Head from 'next/head'
import fetch from 'node-fetch'
import { useState, useEffect } from 'react'

const Home = ({ data }) => {
  return (
    <>
      <h1>posts</h1>
      <br />
      {data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <small>{post.created_at}</small>
          <h2>{post.content}</h2>
          <hr />
        </div>
      ))}
    </>
  )
}

Home.getInitialProps = async ctx => {
  const res = await fetch('http://api.hhar.com/posts')
  const json = await res.json()
  return { data: json }
}

export default Home
