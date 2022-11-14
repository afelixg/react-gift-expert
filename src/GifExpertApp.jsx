import {useState} from 'react';
import { AddCategory, GifGrid } from './Components';


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball Z']);

    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory)) return;
        // setCategories(['valorant', ...categories]);
        setCategories([newCategory, ...categories]);
    }
  
  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
        onNewCategory = {(value) => onAddCategory(value)}
        />
            {
                categories.map((category) => (
                     <GifGrid 
                     key={category} 
                     category={category}/>
                ))
            }
    
    </>
  )
}
