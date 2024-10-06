import React, { Component } from 'react';

class App extends Component {
    render() {
        const name = 'react';
        return <div className='react'>{name}</div>
    }
}

export default App;

// 클래스형 컴포넌트 생성방법
// state 기능 및 라이프사이클 기능을 사용할 수 있다는 것과 임의의 메서드를 정의할 수 있다는 것이 장점.

// 함수형 컴포넌트
// 
// 1. 선언하기 편하다.
// 2. 메모리 자원을 클래스형보다 덜 사용한다.
// 3. 프로젝트 완성하고 빌드 작업을 거친 후 배포할 때 크기가 작다.
//
// state와 라이프사이클 API의 사용이 불가하다. -> Hooks 기능이 생기면서 해결
//
// 리액트 공홈 -> 함수 컴포넌트와 Hooks를 사용하여 새로운 컴포넌트를 작성하도록 권장