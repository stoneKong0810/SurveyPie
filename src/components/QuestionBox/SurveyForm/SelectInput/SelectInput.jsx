import styled from 'styled-components';

function SelectInput({ answer = [], setAnswer, options }) {
  const handleChange = (isChecked, idx) => {
    if (isChecked) {
      setAnswer([...answer, idx]);
    } else {
      setAnswer(answer.filter((item) => item !== idx));
    }
  };

  return (
    <SelectInputWrapper>
      {options.items.map((item, idx) => {
        return (
          <Item
            key={idx}
            onChange={(e) => {
              handleChange(e.target.checked, idx);
            }}
          >
            {item}
          </Item>
        );
      })}
    </SelectInputWrapper>
  );
}

function Item({ children, onChange }) {
  return (
    <ItemWrapper>
      <label>
        <input type={'checkbox'} onChange={onChange} />
        <span />
        <div>{children}</div>
      </label>
    </ItemWrapper>
  );
}

const SelectInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ItemWrapper = styled.div`
  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox'] ~ span {
    width: 24px;
    height: 24px;
    border: 3px solid #e2dfdf;
    box-sizing: border-box;
    display: inline-block;
    border-radius: 100%;
    vertical-align: middle;
    transition: all 0.2s ease;
  }

  input[type='checkbox']:checked ~ span {
    border: 8px solid #6542f1;
    transition: all 0.2s ease;
  }

  input[type='checkbox'] ~ div {
    font-size: 16px;
    line-height: 24px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    position: relative;
    bottom: 1px;
  }

  input[type='checkbox']:checked ~ div {
    font-weight: bold;
  }
`;

export default SelectInput;
