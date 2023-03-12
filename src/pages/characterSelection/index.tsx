import { useEffect, useState } from "react";
import { IHero } from "@/api/models/IHero";
import HeroCard from "@/components/HeroCard";
import { addHero, getHeros } from "@/api/routes/characterSelection";

export default function CharacterSelection() {
  const [heroList, setHeroList] = useState<IHero[]>([]);

  console.log(heroList);
  const getHeross = async () => {
    try {
      const allHeros = await getHeros();
      setHeroList(allHeros);
    } catch (error) {
      console.log(error);
    }
  };

  const postSelectedHero = async (id:string) => {
    addHero(id);
  };

  useEffect(() => {
    getHeross();
  }, []);

  return (
    <div className="page">
      <div className="characterSelectionPage">
        <div className="characterSelectionPageHeader">
          <h1>Character Selection</h1>
        </div>
        <div className="characterSelectionPageContent">
          {heroList.map((hero) => (
            <HeroCard 
            hero={hero}
            onClick= {() =>{
              postSelectedHero(hero._id);
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
