import React from 'react';
import photoquiz from '../images/photo-quiz.jpg';

const Home = () => {

  return (
    <div className='flex justify-between flex-col p-10 font-[Poppins]'>
      <div className="w-[] border-2 p-4 rounded-3xl">
        <img src={photoquiz} alt="quiz pic" className='rounded-3xl md:h-[500px] w-full h-1/2' />
      </div>

      <div className='border-2 rounded-3xl p-6 '>
        <form className='rounded-3xl flex flex-col md:flex-row gap-4 md:items-center justfiy-center md:justify-between'>
          <div>
            <label for="categories" className='block text-sm text-[#767268] my-2 md:text-center'>Choose a category:</label>
            <select id="categories" name="category" className='border rounded-md p-2 w-full'>
                <option value="any category">Any Category</option>
                <option value="general knowledge">General Knowledge</option>
                <option value="entertainment">Entertainment</option>
                <option value="science">Science</option>
                <option value="mythology">Mythology</option>
                <option value="Sports">Sports</option>
                <option value="geography">Geography</option>
                <option value="history">History</option>
            </select>
          </div>

          <div>
            <label for="difficulty" className='block text-sm text-[#767268] my-2 md:text-center'>Select difficuty:</label>
            <select id="difficulty" name="difficulty" className='border rounded-md p-2 w-full'>
                <option value="any difficulty">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
          </div>

          <div>
            <label for="categories" className='block text-sm text-[#767268] my-2 md:text-center'>Number of Questions:</label>
            <input type="number" min="1" max="10" className='border rounded-md p-2 w-full'/>
          </div>
          


          <div className="text-right">
            <input type="submit" value="Start Quiz &rarr;" className='cursor-pointer border rounded-lg p-4'/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home
