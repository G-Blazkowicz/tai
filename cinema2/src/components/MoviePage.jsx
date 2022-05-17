import React from 'react'
import styled from 'styled-components'

//TODO zrobic to tak jak na filmwebie, czyli kazdy wiersz powinien byc klasa table-movie-row, zeby to jakos ladnie wygladalo
// to też trzeba będzie z bazy danych brac
function MoviePage() {
  return (
      <Card>
          <FillerPoster />
          <Info>
              <Title>
                  Tytuł: Avengers
              </Title>
              <Description>
                  Opis: Grupa superbohaterów, na czele z Thorem, Iron Manem i Hulkiem, łączy siły, by obronić Ziemię przed inwazją kosmitów.
              </Description>
              <Description>
                  Gatunek: Przygodowy, Fantasy
              </Description>
              <Description>
                  Obsada: Robert Downey Jr., Chris Hemsworth, Chris Evans, Mark Ruffalo, Scarlett Johansson, Jeremy Renner, Tom Hiddleston
              </Description>
              <Description>
                  Reżyser: John Whedon
              </Description>
              <ButtonRow>
                <Button>             
                    11:40
                </Button>  
                <Button>             
                    14:20
                </Button> 
                <Button>             
                    17:30
                </Button> 
                <Button>             
                    21:30
                </Button> 
              </ButtonRow>
                   
          </Info>
      </Card>
  )
}

const Card = styled.section`
    display:flex;
    width: 100%;
    max-width: 1300px;
    height: 445px;
    overflow: hidden;
    position: relative;
    border: 0;
    margin-left:17%;
    margin-top:2%;
   // outline: red solid;
`

const FillerPoster = styled.div`
    min-width: 300px;
    min-height: 445px;
    max-width: 300px;
    max-height: 445px;
    background-color: #dbdada;
    border-radius: 5px;
    margin-right: 2%;
    //margin-right: 15px;
    display: block;
    color: transparent;
`
const Info = styled.div`
    display: table;
    flex-wrap: wrap;
    //outline: blue solid;
    //margin-left: 10px;
    padding-left: 14px;
    padding-right: 14px;
    max-width: 100%;
    grid-template-rows:80px;
    background-color: black;
`
const Title = styled.h1`
    font-size: 1.25rem;
    font-weight: 600;
    margin: 2px;
    margin-bottom: 20px;
    padding-bottom: 6px;
    border-bottom: solid 1px;
`

const Description = styled.p`
    font-size: 1rem;
    font-weight: 600;
    margin: 2px;
    max-height: 60%;
    margin-bottom:8px;
    padding-bottom: 8px;
    border-bottom: solid 1px;
`

const ButtonRow=styled.section`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 18%;
 
`

const Button = styled.button`
    background-color: #d34d18;
    position: right;
    color: #000;
    height: 50px;
    width: 150px;
    font-size: 20px;
    border-radius: 20px;
    cursor: pointer;
    border: none;
    margin: 0 10px 0px 10px;
    //outline: red solid;
    transition: color 0.4s;
    &:hover {
    color: #ffffff;
    }
`;

export default MoviePage