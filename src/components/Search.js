import React, { useState } from 'react'
import SearchList from './SearchList'
// import './style.css'

function Search({ details }) {
  const [searchField, setSearchField] = useState('')

  const filteredPersons = details.filter((person) => {
    return person.candidate.toLowerCase().includes(searchField.toLowerCase())
  })

  const handleChange = (e) => {
    setSearchField(e.target.value)
  }

  function searchList() {
    return <SearchList filteredPersons={filteredPersons} />
  }

  return (
    <div>
      <div className="header">
        <h1>Referral Status</h1>
        <input
          type="search"
          placeholder="Search Candidate"
          onChange={handleChange}
          className="input"
        />
      </div>
      <section className="section1">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Referred</th>
              <th>Interviewed</th>
              <th>Hired</th>
              <th>Joined</th>
              <th>Reward</th>
            </tr>
          </thead>
        </table>
        {searchList()}
      </section>
    </div>
  )
}

export default Search
