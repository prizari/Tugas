import React from 'react'
import './assets/CSS/todolist.css'
import ProfileCard from './components/ProfileCard'
import ProfileTodo from './components/ProfileTodo'


export default function Todolist() {
  return <>
  <section className="app-container">
    <ProfileCard />
    <ProfileTodo />
    </section>
    </>

}
