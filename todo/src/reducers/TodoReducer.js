export const initialState = { 
    todo: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589

        
    },{
        item: 'Cook dinner',
        completed: false,
        id: 3892987590
        
    },{
        item: 'Feed and walk the dogs',
        completed: false,
        id: 3892987591
        
    }
]}

export const todoReducer = (state, action) => {
    // console.log(action);
    switch (action.type){
        case "ADD_TODO":
            return {
                ...state, 
                todo:[ ...state.todo, {id: Date.now(), item: action.text, completed: false}
                ]
            }
        case "TOGGLE_COMPLETED":
            return {
                ...state,
                todo: state.todo.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)
            }
        case "CLEAR_COMPLETED":
            return{
            ...state,
            todo: state.todo.filter(todo => !todo.completed) 
            }
        default:
            return state;
    }
}