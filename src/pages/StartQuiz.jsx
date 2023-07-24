import React, { useState } from 'react'

const StartQuiz = () => {
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleRadio = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="border max-w-[70vw] flex flex-col justify-center p-6">
      <div>
        Progress Bar
      </div>
      

      <div className="border rounded-lg my-4">
        <p>
          What is your favorite programming language?
        </p>
      </div>

      <div>
        {/* <div className="flex gap-4 items-center border rounded-lg py-2 px-1 cursor-pointer hover:bg-blue-50 active:bg-white shadow my-2">
          <h3 className="border px-4 py-2 rounded-lg bg-blue-200 shadow-sm">A</h3>
          <p>Thor</p>
        </div> */}
        
        <div>
          <div>
            <input type="radio" id="html" name="fav_language" value="HTML" className="hidden w-full" onChange={handleRadio}/>
            <label htmlFor="html" className={`flex gap-4 items-center border rounded-lg py-2 px-1 cursor-pointer hover:bg-blue-50 active:bg-white ${selected === 'HTML' ? 'bg-blue-50' : ''} shadow my-2`}>
              <span className="border px-4 py-2 rounded-lg bg-blue-200 shadow-sm">A</span>
              HTML
            </label>
          </div>
          <div>
            <input type="radio" id="css" name="fav_language" value="CSS" className="hidden w-full" onChange={handleRadio}/>
            <label htmlFor="css" className={`flex gap-4 items-center border rounded-lg py-2 px-1 cursor-pointer hover:bg-blue-50 active:bg-white ${selected === 'CSS' ? 'bg-blue-50' : ''} shadow my-2`}>
              <span className="border px-4 py-2 rounded-lg bg-blue-200 shadow-sm">B</span>
              CSS
            </label>
          </div>
          <div>
            <input type="radio" id="javascript" name="fav_language" value="JAVASCRIPT" className="hidden w-full" onChange={handleRadio}/>
            <label htmlFor="javascript" className={`flex gap-4 items-center border rounded-lg py-2 px-1 cursor-pointer hover:bg-blue-50 active:bg-white ${selected === 'JAVASCRIPT' ? 'bg-blue-50' : ''} shadow my-2`}>
              <span className="border px-4 py-2 rounded-lg bg-blue-200 shadow-sm">C</span>
              JAVASCRIPT
            </label>
          </div>
          <div>
            <input type="radio" id="python" name="fav_language" value="PYTHON" className="hidden w-full" onChange={handleRadio}/>
            <label htmlFor="python" className={`flex gap-4 items-center border rounded-lg py-2 px-1 cursor-pointer hover:bg-blue-50 active:bg-white ${selected === 'PYTHON' ? 'bg-blue-50' : ''} shadow my-2`}>
              <span className="border px-4 py-2 rounded-lg bg-blue-200 shadow-sm">C</span>
              PYTHON
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartQuiz
