import React from 'react'
import NavBook from './NavBook'

const ViewAll = () => {
  return (
    <div>
        <NavBook/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Book Title</th>
      <th scope="col">Author</th>
      <th scope="col">Publisher Year</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">To Kill a Mockingbird</th>
      <td>krishtra</td>
      <td>2014</td>
      <td>400</td>
    </tr>
    <tr>
      <th scope="row">The Night Circus</th>
      <td>Jacob</td>
      <td>2012</td>
      <td>300</td>
    </tr>
    <tr>
      <th scope="row">David Copperfield </th>
      <td >Larry</td>
      <td>2015</td>
      <td>800</td>
    </tr>
    <tr>
      <th scope="row">Pride and Prejudice</th>
      <td >Larry the Bird</td>
      <td>2006</td>
      <td>700</td>
    </tr>
    <tr>
      <th scope="row">Wuthering Heights</th>
      <td >Larry the Bird</td>
      <td>2005</td>
      <td>100</td>
    </tr>
    <tr>
      <th scope="row">The Sun Also Rises</th>
      <td >Larry the Bird</td>
      <td>2000</td>
      <td>200</td>
    </tr>
    <tr>
      <th scope="row">Frankenstein</th>
      <td >Larry the Bird</td>
      <td>2001</td>
      <td>600</td>
    </tr>
    <tr>
      <th scope="row">East of Eden</th>
      <td >Larry the Bird</td>
      <td>2015</td>
      <td>300</td>
    </tr>
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll