import { useState, useRef} from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const nameInputRef = useRef('')

  const formSubmitHandler = event =>{
    event.preventDefault();
    const enteredValue = nameInputRef.current.value;
    console.log(enteredName , 'state')
    console.log(enteredValue , 'ref')
  }
  
  const enteredNameChangeHandler = event =>{
    setEnteredName(event.target.value);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={enteredNameChangeHandler}
        ref={nameInputRef}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
