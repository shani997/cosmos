import { Container, Global } from './WrapperStyles';

const Wrapper = ({ children }) => {
    return (<Global>
        <Container>{children}</Container>
    </Global>);
};

export default Wrapper;
