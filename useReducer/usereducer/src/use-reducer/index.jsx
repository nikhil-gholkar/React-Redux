import {useReducer} from 'react'

export const ReducerComp=()=>{
     const reducer=(state,action)=>{
    
        switch(action.type){
                case 'increament':
                     return state+1;
                    
                case 'decrement':
                    return state-1;
                    

        }

     }

    const [count,dispatch]= useReducer(reducer, 0 )
return(
    <>
    <h1>hello usereducer hook</h1>
    <h2>Count is {count}</h2>
    <button onClick={()=>dispatch({type:"increament"})}>
    Increament
    </button>
    <button onClick={()=>dispatch({type:"decrement"})} style={{marginLeft:"15px"}}>
        Decrement
    </button>
    </>
)
}