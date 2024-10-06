// ES6 문법
// 객체에서 값을 추출하는 문법 
// 비구조화 할당 (destructuring assignment)

const MyComponent = props => {
    const {name, children} = props;

    return (
        <div>
            안녕하세요, 제 이름은 {name}입니다. <br />
            children 값은 {children}
            입니다.
        </div>
    );
};

MyComponent.defaultProps = {
    name: '기본 이름'
};

export default MyComponent;