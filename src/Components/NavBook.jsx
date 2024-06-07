import React from 'react'
import { Link } from 'react-router-dom'

const NavBook = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LIBRARY</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Add Book</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/search">Search</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/delete">Delete</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/viewall">View All</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBook