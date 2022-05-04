import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const FormValidation = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm() 
  const customSubmit = (data) => {
      //console.log(data)
      alert("¡Validación exitosa!")
  }

  const [colorInput, setColorInput] = useState('#fff7f7')
  useEffect( ()=> {
      let words = watch('prueba')
      if(words === 'react'){setColorInput('#614ad3')}
  } )
  
  return (
    <>
        <h2>Form Validation</h2>
        <form onSubmit={ handleSubmit(customSubmit) } className='form-react'>
            <div className='form-control'>
                <label>Name</label>
                <input type="text" {...register('name',{ 
                    required:true,
                    maxLength:5
                })} />
                {errors.name?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                {errors.name?.type === 'maxLength' && <small className='fail'>El máximo de caracteres es 5</small>}
            </div>
            <div className='form-control'>
                <label>Age</label>
                <input type="number" {...register('age', {
                    required:true,
                    min:10,
                    max:100
                })} />
                {errors.age?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                {errors.age?.type === 'min' && <small className='fail'>La edad mínima es de 10 años</small>}
                {errors.age?.type === 'max' && <small className='fail'>La edad máxima es de 100 años</small>}
            </div>
            <div className='form-control'>
                <label>Country</label>
                <input type="text" {...register('country', {
                    required: {
                        value:true,
                        message:"Custom Message: Ingrese los datos"
                    }
                })} />
                {errors.country && <small className='fail'>{errors.country.message}</small>}
            </div>
             <div className='form-control'>
                 <input {...register('prueba')} style={{ backgroundColor:colorInput }} />
             </div>   
            <button type='submit'>Send</button>
        </form>
    </>
  )
}

export default FormValidation