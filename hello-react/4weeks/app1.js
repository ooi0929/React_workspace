function App() {
    const name = '리액트';
    return (
        <div>
            {
                name === '리액트' 
                ? (<h1>리액트입니다.</h1>) 
                : (<h2>리액트가 아닙니다.</h2>)
            }
        </div>
    );
}

export default App;
// 표현식은 {} 안에 작성
// 삼항연산자 -> (조건) ? 참 : 거짓