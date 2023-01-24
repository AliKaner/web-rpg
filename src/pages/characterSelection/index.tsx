import { Grid,Box,Text, color, Center} from "@chakra-ui/react";
import { FC,useEffect,useState } from "react";
import { IHero } from "api/models/IHero";
import HeroCard from "components/HeroCard";
import { heros } from "api/routes/characterSelection";

export default function CharacterSelection() {
    const [heroList,setHeroList] =useState<IHero[]>([]);
    const [selectedHero,setSelectedHero] = useState<IHero>();

    const getHeros = async () => {
        try{
            const allHeros = await heros();
            setHeroList(allHeros);
        }catch (error) {
            console.log(error)
        }
    }
    useEffect(() =>{
        getHeros();
    })
    
    const erdeminGötü: IHero[]= [
        {
            name:' wqeqwe',
            stats:{
                def:10,
                atk:10,
                hp:10,
            },
            img:'https://i1.sndcdn.com/artworks-000190299555-vimz9r-t500x500.jpg',
            desc:'adkapsokdpaskdmpasdmapmd'
        },
        {
            name:' wqeqwe',
            stats:{
                def:10,
                atk:10,
                hp:10,
            },
            img:'https://i1.sndcdn.com/artworks-000190299555-vimz9r-t500x500.jpg',
            desc:'adkapsokdpaskdmpasdmapmd'
        },
        {
            name:' wqeqwe',
            stats:{
                def:10,
                atk:10,
                hp:10,
            },
            img:'https://i1.sndcdn.com/artworks-000190299555-vimz9r-t500x500.jpg',
            desc:'adkapsokdpaskdmpasdmapmd'
        }
    ]
     return(
        <Box alignContent={'center'} width={'100%'} height={'100%'} bgColor={'red'}>
            <Center>
                <Text>
                    
                </Text>
            </Center>
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        {
            erdeminGötü.map((hero)=> (
                <HeroCard 
                 {...hero}/>
            ))
        }
        </Grid>
        </Box>
    )
}