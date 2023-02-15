import React from 'react'
import { Outlet } from 'react-router-dom'
import "./style.scss"

export default function Main() {
  return (
    <main className="main">
      <div className="container">
        <Outlet />
      </div>
    </main>
  );
}
