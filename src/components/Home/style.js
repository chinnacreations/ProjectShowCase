import styled from 'styled-components'

export const ListItem = styled.ul`
  padding-left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  border-radius: 10px;
`
export const ProjectList = styled.li`
  width: 22%;
  list-style-type: none;
  margin-bottom: 20px;
`
export const ProjectImage = styled.img`
  height: 180px;
  width: 100%;
  border-radius: 10px;
`
export const ProjectName = styled.p`
  font-size: 14px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #475569;
  text-align: center;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  padding-bottom: 64px;
`
export const FailureImage = styled.img`
  height: 50%;
  width: 50%;
`
export const Heading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  text-align: center;
`
export const Description = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  width: 90%;
  max-width: 288px;
  line-height: 1.3;
`
export const Button = styled.button`
  background-color: #4656a1;
  color: #ffffff;
  padding: 14px;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  border: none;
`
export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`
export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px;
`
export const Select = styled.select`
  width: 200px;
  height: 30px;
  border-radius: 5px;
`
