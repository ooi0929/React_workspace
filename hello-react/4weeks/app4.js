import './app1.css'; // 불러와서 사용

function App() {
    const name = '리액트'; 
    // JSX에서는 class 사용시 오류
    // className을 이용

    // JSX에서는 태그를 반드시 닫아줘야 한다.
    // <input> 만 있을 경우 오류
    return ( 
        <div className="react">
            {name}
            <input></input>
        </div>
    )
}

export default App;