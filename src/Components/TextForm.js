import { func } from 'prop-types';
import {useState} from 'react'

export default function TextForm() {
  const [text, settext] = useState("This is default text");
  function onbtnclick() {
    settext("Text has been changed");
  }
    function onChangeFunc(event) {
        settext(event.target.value);
    }
  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={text}
        ></textarea>
        <button className="btn btn-primary" onClick={onbtnclick} onChange={onChangeFunc}>Submit</button>
      </div>
    </>
  );
}
