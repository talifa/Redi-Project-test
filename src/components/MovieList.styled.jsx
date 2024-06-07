import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
margin-bottom: 20px;


.image-gallery{
    list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
   .movie_card{
    position: relative;
  flex: 1 1 calc(25% - 1rem);

    img {
  width: 100%;
  height: auto;
  border-radius: 8px;
 
}
&:hover {
    transform: scale(1.1); 
    .overlay {
  opacity: 1;
  color:white;
}
  }
    

    @media (max-width: 768px){
    flex: 1 1 calc(50% - 1rem);
  }
    @media (max-width: 320px){
    flex: 1 1 100%;
  }
    
   }
   .overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
   }

`;

export const Wrapper = styled.div`
padding:20px;
width:320px;
margin:0 auto;
@media (min-width: 768px) {
    padding:32px;
width:768px;
margin:0 auto;
}
@media (min-width: 1280px) {
    width:1280px;
    padding:32px;
    margin:0 auto;
}
    
`;

