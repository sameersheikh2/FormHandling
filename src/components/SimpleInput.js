import { useState} from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid , setEnteredNameIsValid] = useState(false)
  const [enteredNameIsTouced , setEnteredNameTouched] = useState(false)

  const formSubmitHandler = event =>{
    event.preventDefault();
    
    setEnteredNameTouched(true)

    if(
      enteredName.trim() !== ''){
      setEnteredNameIsValid(false)
    }
    setEnteredNameIsValid(true)

    console.log(enteredName , 'state')
  }
  
  const enteredNameChangeHandler = event =>{
    setEnteredName(event.target.value);
    if(
      event.target.value.trim() !== ''){
      setEnteredNameIsValid(true)
    }
  }

  const inputNameBlurHandler = (event) =>{
    setEnteredNameTouched(true)
    if (enteredName.trim() === ''){
      setEnteredNameIsValid(false);
    }
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouced;

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control '

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={enteredNameChangeHandler}
        onBlur={inputNameBlurHandler}
        />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
