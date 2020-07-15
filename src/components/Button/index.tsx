import styled from 'styled-components';

interface props {
    outlined?:boolean; 
}

export default styled.button<props> `
    background: ${(props) => (props.outlined ? 'transparent' : 'var(--twitter)')};
    color: ${(props) => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
    border: ${props => props.outlined ? '1px solid var(--twitter)' : 'none'};

    padding: 15px;
    border-radius: 24px;

    font-weight: bold;
    font-size: 15px;

    cursor: pointer;
    outline: 0;

    &:hover {
        background: ${props => props.outlined ? 'var (--twitter-dark-hover)' : 'var(--twitter-light-hover)'}
    }
`; 