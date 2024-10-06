function App() {
    const name = undefined;

    // null을 렌더링하게 되면 아무 화면도 보여주지 않음.
    // false는 0으로서 화면에 보여짐.
    // undefined일 경우 렌더링하게 되면 오류 발생. 따라서 따로 분기를 처리해줘야 한다. 
    // return (
    //     <div>
    //         {
    //             name === '리액트'
    //             ? <h1>리액트입니다.</h1>
    //             : null
    //         }
    //     </div>
    // );
    return (
        <div>
            {
                name || '값이 undefined입니다.'
            }
        </div>
    );
}

export default App;