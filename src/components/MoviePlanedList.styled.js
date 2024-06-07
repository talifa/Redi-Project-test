import styled from "styled-components";

export const ContainerPlaned = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  
   .button-wrapper{ 
    display: flex;
    flex-direction:column;
    gap:20px;
> button{
    display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid #000;
  background-color: #fff;
  color: #000;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;
  
  &:hover {
    transform: scale(1.1); 
    background-color: blue;
    color: #fff;
  
}
}}



.film-list{
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

 }
.film-li{
   border: 1px solid white;
   background-color: blue; 
   flex: 1 1 calc(25% - 1rem);
    &:hover {
    transform: scale(1.1); 
  
     }
     @media (max-width: 768px){
    flex: 1 1 calc(50% - 1rem);
  }
    @media (max-width: 320px){
    flex: 1 1 100%;
  }
    
  }

`;


    
