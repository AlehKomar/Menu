import { useState } from 'react'
import menu from './data'
import Title from './Title'
import Menu from './Menu'
import Categories from './Categories'

const allCategories = ['all', ...new Set(menu.map((item) => item.category))]

const App = () => {
  const [menuItems, SetMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)
  return (
    <main>
      <section className='menu'>
        <Title text='our menu' />
        <Categories categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App
