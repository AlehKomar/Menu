import { useState } from 'react'
import menu from './data'
import Title from './Title'
import Menu from './Menu'

const allCategories = ['all', ...new Set(menu.map((item) => item.category))]

const App = () => {
  const [menuItems, SetMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)
  return (
    <main>
      <section className='menu'>
        <Title text='our menu' />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App
