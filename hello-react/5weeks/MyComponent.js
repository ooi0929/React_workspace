// props (=properties) 
// 컴포넌트 속성을 설정
// 부모 컴포넌트에서 해당 컴포넌트를 불러와 props의 값을 설정할 수 있다.

const MyComponent = props => {
    return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
};

export default MyComponent;