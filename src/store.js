import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  students: [],
};

export const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return { ...state, students: [...state.students, action.payload] };
    case "DELETE_STUDENT":
      return {
        ...state,
        students: state.students.filter(
          (student) => student.maSV !== action.payload.maSV
        ),
      };
    case "UPDATE_STUDENT":
      let updatedStudents = state.students.map((student) => {
        if (student.maSV === action.payload.maSV) {
          return action.payload;
        }
        return student;
      });
      return { ...state, students: updatedStudents };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: studentsReducer,
});
