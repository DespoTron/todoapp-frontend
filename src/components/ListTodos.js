import React, { Fragment, useState, useEffect } from 'react'

const ListTodos = () => {
  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td>Mary@example.com</td>
          </tr>
          <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>July@example.com</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  )
}

export default ListTodos
