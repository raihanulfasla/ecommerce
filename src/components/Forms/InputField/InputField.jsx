

function InputField({type,placeholder,className,onChange,name,accept}) {
  return (
    <div className={className}>
      {
        accept ? <input accept={accept} name={name} onChange={onChange} type={type} placeholder={placeholder}  /> :
        <input name={name} onChange={onChange} type={type} placeholder={placeholder}  /> 
      }
      
    </div>
  )
}

export default InputField
