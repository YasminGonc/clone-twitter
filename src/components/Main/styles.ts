import styled from 'styled-components';

export const Container  = styled.div`
    display: flex;
    flex-direction: column;

    width: min(601px, 100% /* comparação entre 601px e 100%, se a tela for menor que 601px, o container vai pegar 100% da largura da tela*/);

    @media (min-width: 500px) {
        border-left: 1px solid var(--outline);
        border-right: 1px solid var(--outline);
    }
`;

export const Header = styled.div`
    position: static;
    top: 0;
    background-color: var(--primary);

    display: flex;
    align-items: center;

    text-align: left;

    padding: 8px 0 9px 13px;
    border-bottom: 1px solid var(--outline);

    > button {
        padding: 8px;
        border-radius: 50%;

        outline: 0;
        cursor: pointer;

        &:hover {
            background-color: var(--twitter-dark-hover);
        }
    }
`;

//min 32:52


export const BackIcon = styled.div``;

export const ProfileInfo = styled.div``;