import styled from 'styled-components';

interface Props {
  width: number | undefined;
  height?: number | undefined;
  errorMsg?: string | boolean | undefined;
}

export const Container = styled.div`
  font-family: 'Pretendard Variable';
  width: ${({ width }: Props) => (width ? width + 'rem' : '31.1rem')};
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;
export const Wapper = styled.div`
  display: flex;
`;
export const Label = styled.label`
  height: 1.4rem;
  flex-shrink: 0;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.005em;
  color: #2f2f33;
  display: inline-block;
  margin-bottom: 0.4rem;
`;
export const Description = styled.div`
  flex-grow: 1;
  height: 14px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  letter-spacing: 0.005em;
  color: #424242;
`;
export const ErrorMsg = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.005em;
  color: #d86145;
  margin-top: 0.8rem;
`;
export const Input = styled.input<Props>`
  font-family: 'PretendardRegular';
  width: ${({ width }) => (width ? width + 'rem' : '31.1rem')};
  height: ${({ height }) => (height ? height + 'rem' : '4rem')};
  border: ${({ errorMsg }) => (errorMsg ? '1px solid #D86145' : '1px solid #cfcfcf')};
  background-color: ${({ errorMsg }) => errorMsg && 'rgba(216, 97, 69, 0.04)'};

  position: relative;

  &::placeholder {
    position: absolute;
    width: 112px;
    height: 18px;
    left: 17px;
    top: 16px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 0.005em;
    color: #505050;
  }
`;
