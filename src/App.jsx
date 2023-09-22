


import './App.css';
import Menu from './components/Menu';
import useToggle from './hooks/useToggle';
import Button from './components/Button';
import Books from './components/Books';
import useLocalStorage from './hooks/useLocalStorage';

const books = [
  { id: 1, title: 'React' },
  { id: 2, title: 'JavaScript' },
  { id: 3, title: 'TypeScript' }
]


function App() {

  const [order, setOrder] = useLocalStorage([], 'order')
  const [isMenu, setMenu] = useToggle(false)
  const addToOrder = (id) => {
    const newItem = books.find(el => el.id === id)

    setOrder( [...order , newItem])
  }
  return (
    <div className="conteiner">
      <Button isMenu={isMenu} setMenu={setMenu} />
      {isMenu ? <Menu /> : <> </>}

      <Books books={books} addToOrder={addToOrder} />

    </div>
  );
}

export default App;
