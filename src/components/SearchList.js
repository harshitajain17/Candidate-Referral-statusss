import Table from './Table'

function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map((candidate) => (
    <Table key={candidate.id} Data={candidate} />
  ))
  return <div>{filtered}</div>
}

export default SearchList
