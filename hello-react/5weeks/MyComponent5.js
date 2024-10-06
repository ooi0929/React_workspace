// propTypes
// 필수 props를 지정하거나 타입을 지정할 때에 사용한다.
// defaultProps를 설정하는 것과 비슷하며 import 구문을 통해 코드를 불러와야 한다.

import PropTypes from 'prop-types';

const MyComponent = ({name, children}) => {
    return (
        <div>
            안녕하세요, 제 이름은 {name}입니다. <br />
            children 값은 {children}
            입니다.
        </div>
    );
}

MyComponent.defaultProps = {
    name: '기본 이름'
};

MyComponent.propTypes = {
    name: PropTypes.string
};

export default MyComponent;