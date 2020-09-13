import React, {useState} from 'react'
import PropTypes from  'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputvalue] = useState('');
    
    const handleImputChange = ( e ) => {
        setInputvalue(e.target.value);
    }

    const handleSubmit = ( e ) => {
        e.preventDefault()
        
        if( inputValue.trim().length > 2 ) {
            setCategories( cats => [inputValue, ...cats ] );
            setInputvalue('');

        }
        
       
    
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
             type='text'
             value = { inputValue }
             onChange={ handleImputChange }
             />
        </form>
           
        
    )
}

AddCategory.prototype ={
    setCategories: PropTypes.func.isRequired
}
