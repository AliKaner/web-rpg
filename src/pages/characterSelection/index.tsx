import { useEffect, useState } from "react";
import { IHero } from "@/api/models/IHero";
import HeroCard from "@/components/HeroCard";
import { getHeros } from "@/api/routes/characterSelection";

export default function CharacterSelection() {
  const [heroList, setHeroList] = useState<IHero[]>([]);

  const getHeross = async () => {
    try {
      const allHeros = await getHeros();
      setHeroList(allHeros);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHeross();
  },[]);

  return (
    <div
      className="page">
      <div className="characterSelectionPageContentContainer">
        <div className="characterSelectionPageTitle">
          <h1>Character Selection</h1>
        </div>
        <div className="flexThree"></div>
        <div className="characterSelectionPageHeroCardsContainer">
          {heroList.map((heroList) => (
            <HeroCard {...heroList} />
          ))}
        </div>
      </div>
      <div className="flexOne"></div>
    </div>
  );
}
