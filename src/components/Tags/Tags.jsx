import styled ,{css}from "styled-components";
import { useContext } from "react";
import { StateContext } from "../StateProvider";

const Tags = () => {
    const { activeTag, setActiveTag } = useContext(StateContext);

    const handleTagClick = (i) => {
        setActiveTag(i);
    };
  return (
   <TagsContainer>
    {["WORK", "SHORT BREAK", "LONG BREAK"].map((tag,i) => (
        <Tag onClick={() => handleTagClick(i)} activeTag={activeTag === i } key={i}>{tag}</Tag>
    ))}
   </TagsContainer>
  );
}
export default Tags

const TagsContainer = styled.div`
    background-color:${props => props.theme.colors.third};
    height:5rem;
    width:40rem;
    padding:0 1rem;
    margin:0 auto;
    border-radius:1rem;
    display:flex;
    gap:1rem;
    align-items:center;
`;

const Tag = styled.button`
    all:unset;
    height:3rem;
    text-align:center;
    border-radius:1rem;
    flex:1;
    font-size:1.4rem;
    font-weight:600;
    color:#000000;
    


    ${({activeTag}) => activeTag && css`
    background-color:${props => props.theme.colors.primary};
        color:${props => props.theme.colors.bg};
        font-weight:400;
        ;`}

`;