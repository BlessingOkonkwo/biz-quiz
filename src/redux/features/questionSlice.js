import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    question_category: "",
    question_difficulty: "",
    question_type: "",
    amount_of_questions: 10,
    score: []
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setCategory: (state, action) => {
        state.question_category = action.payload
    },
    setDifficulty: (state, action) => {
        state.question_difficulty = action.payload
    },
    setType: (state, action) => {
        state.question_type = action.payload
    },
    setAmount: (state, action) => {
        state.amount_of_questions = action.payload
    },
    setScore: (state, action) => {
        const existingQuest = state.score.find(item => item.questionIndex === action.payload.questionIndex)

        console.log('quest', existingQuest)
        if(existingQuest) {
            state.score = state.score.map(item => 
                item.questionIndex === action.payload.questionIndex
                  ? { ...item, point: action.payload.point }
                  : item
              );
        } else {
            state.score = [...state.score, action.payload]
        }
    },
    resetScore: (state) => {
        state.score = []
    }
  }
});

export const { setCategory, setDifficulty, setType, setAmount, setScore, resetScore } = questionSlice.actions;

export default questionSlice.reducer;