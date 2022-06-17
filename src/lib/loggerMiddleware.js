const loggerMiddleware = store => next => action =>{
    console.log('현재 상태',store.getState());


    console.log('액션',action);

    const result = next(action); // 액션 진행 -> 리듀서 전달 -> store 변경 발생 -> 

    console.log('다음 상태',store.getState()); // 앤션이 진행 되었고 리듀서로 저
    console.log('\n');

    return result;
}

export default loggerMiddleware;