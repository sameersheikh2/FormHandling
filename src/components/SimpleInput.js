import { useState, useRef} from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const nameInputRef = useRef('')
  const [enteredNameIsValid , setEnteredNameIsValid] = useState(true)

  const formSubmitHandler = event =>{
    event.preventDefault();

    if(
      enteredName.trim() <= 0){
      setEnteredNameIsValid(false)
      return;
    }
    setEnteredNameIsValid(true)

    const enteredValue = nameInputRef.current.value;
    console.log(enteredName , 'state')
    console.log(enteredValue , 'ref')
  }
  
  const enteredNameChangeHandler = event =>{
    setEnteredName(event.target.value);
  }

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={enteredNameChangeHandler}
        ref={nameInputRef}/>
        {!enteredNameIsValid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
