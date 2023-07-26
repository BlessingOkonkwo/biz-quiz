import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useAxios from '../hooks/useAxios';
import { useNavigate } from 'react-router-dom';
import ClickAwayListener from 'react-click-away-listener';
import { setScore, resetScore } from '../redux/features/questionSlice';
import {decode} from 'html-entities';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    width: '70vw',
    height: '60vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Poppins',
    boxShadow: '11px 9px 34px -12px rgba(0,0,0,0.75)',
  },
};

Modal.setAppElement(document.getElementById('questions'));

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const StartQuiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState();
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);

  console.log(options);

  const { 
    question_category,
    question_difficulty,
    question_type,
    amount_of_questions,
    score
  } = useSelector((state) => state.question);

  let apiUrl = `api.php?amount=${amount_of_questions}&category=${question_category}&difficulty=${question_difficulty}&type=${question_type}`;


  const { response, loading } = useAxios({ url: apiUrl });
  console.log(response);

  useEffect(() => {
    if(response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length), 0, question.correct_answer
      );
      setOptions(answers);
      console.log(question);
    }
  }, [response, questionIndex]);


  if (loading) {
    return (
      <div role="status" className="flex flex-col h-[300px] items-center justify-center">
        <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    )
  };

  const handleNext = () => {
    if(questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
      setSelected()
    } else {
      return
    }
  };

  const handleSelect = (data, id) => {
    setSelected(id);
    const question = response.results[questionIndex];
    if(data === question.correct_answer) {
      dispatch(setScore({questionIndex: questionIndex, point: 1}));
    } else {
      dispatch(setScore({questionIndex: questionIndex, point: 0}));
    }
  //  console.log(`score: ${score}`);
  //  console.log(selected);
  };
  console.log(`score: ${JSON.stringify(score)}`);

  const totalPoints = score.reduce((acc, current) => acc + current.point, 0);

  console.log('totalPoints', totalPoints)


  const handleReset = () => {
    setQuestionIndex(0);
    dispatch(resetScore());
    setSelected();
  };
  
  return (
    <div id='questions' className="font-['Poppins] flex flex-col items-center justify-center my-10">
      <div className="border shadow w-[70vw] md:w-[500px] flex flex-col justify-center p-8 rounded-xl">
        <div className="text-blue-500 font-bold text-xl">
          Question {questionIndex + 1}/{response.results.length}
        </div>
        

        <div className="border rounded-lg my-4 p-4 shadow">
          <p>
            {decode(response?.results[questionIndex]?.question)}
          </p>
        </div>

        <div>
          {
            options.map((data, id) => (
              <div onClick={() => handleSelect(data, id)} key={id} className={`flex gap-4 items-center border rounded-lg p-2 cursor-pointer hover:bg-blue-50 active:bg-white shadow my-2 ${selected === id ? 'bg-blue-400' : ''}`}>
                <h3 className="border px-4 py-2 rounded-lg bg-blue-200 shadow-sm">{String.fromCharCode(id + 1 + 64)}</h3>
                <p>{decode(data)}</p>
              </div>              
            ))
          }
        </div>
        <div className="flex flex-row justify-between">
          <div className=" my-4">
            <button onClick={handleReset} className="border py-2 px-6 rounded-md cursor-pointer bg-pink-700 text-white hover:bg-pink-800 active:bg-pink-700 shadow">Restart Quiz</button>
          </div>
          {
            questionIndex + 1 === response.results.length ? 
            <div className=" my-4">
              <button onClick={() => setIsOpen(true)} className="border py-2 px-6 rounded-md cursor-pointer bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-500 shadow">View Result!</button>
            </div> :
            <div className=" my-4">
              <button onClick={handleNext} className="border py-2 px-6 rounded-md cursor-pointer bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-500 shadow">Next &rarr;</button>
            </div>
          }
        </div>
          
      </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 className="text-[30px] text-blue-500 font-semibold ">Your Result</h2>
          
          <div className="text-[25px]">{totalPoints}/{response.results.length}</div>
          <button className=' border shadow-md text-white py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-500' onClick={() => setIsOpen(false)}>Close</button>
        </Modal>
    </div>
  )
}

export default StartQuiz
