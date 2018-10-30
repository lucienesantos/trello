import styled from "styled-components";

export const ColumnDiv = styled.div`
  width: 260px;
  min-height: 95px;
  height: max-content;
  background-color: #dfe3e6;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  position: relative;
  white-space: normal;
  padding: 5px !important;
  margin-left: 10px;
`;

export const Header = styled.div`
  min-height: 52px;
  padding: 6px;
`;

export const TitleColumn = styled.h2`
  padding-right: 68px;
  font-size: 20px;
  line-height: 24px;
  margin: 0 0 8px;
  font-weight: bold;
  font-family: Helvetica Neue, Arial, Helvetica, sans-serif;
`;

export const TitleColumnNormal = styled.h2`
  padding-right: 68px;
  font-size: 14px;
  line-height: 24px;
  margin: 0 0 8px;
  font-family: Helvetica Neue, Arial, Helvetica, sans-serif;
  font-weight: 400;
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 3px;
`;

export const TextareaEdit = styled.textarea`
  overflow: hidden;
  overflow-wrap: break-word;
  resize: none;
  background: none;
  height: auto;
  max-height: 162px;
  min-height: 58px;
  overflow-y: auto;
  width: 100%;
  border: 1px solid #dfe3e6;
  box-sizing: border-box;
  padding: 5px 7px;
  color: #17394d;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 45, 66, 0.25);
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
  max-width: 300px;
  position: relative;
  z-index: 0;
  font-family: Helvetica Neue, Arial, Helvetica, sans-serif;
`;

// export * from './button'
