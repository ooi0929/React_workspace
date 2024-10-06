// 카멜 표기법
// background-color -> backgroundColor
// font-size -> fontSize

function App() {
    // 인라인으로 지정
    // const name = '리액트';
    // const style = {
    //     backgroundColor: 'black',
    //     color: 'aqua',
    //     fontSize: '48px',
    //     fontWeight: 'bold',
    //     padding: 16, // 단위 생략시 px로 지정
    // };
    // return (
    //     <div style={style}>
    //         {name}
    //     </div>
    // );
    const name = '리액트';
    return (
        <div
            style={
                {
                    backgroundColor: 'black',
                    color: 'aqua',
                    fontSize: '48px',
                    fontWeight: 'bold',
                    padding: 16, // 단위 생략시 px로 지정
                }
            }
        >
            {name}
        </div>
    );
}

export default App;