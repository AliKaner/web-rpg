import {
  Grid,
  Box,
  Text,
  color,
  Center,
  Flex,
  background,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { IHero } from "api/models/IHero";
import HeroCard from "components/HeroCard";
import { heros } from "api/routes/characterSelection";

export default function CharacterSelection() {
  const [heroList, setHeroList] = useState<IHero[]>([]);
  const [selectedHero, setSelectedHero] = useState<IHero>();

  const getHeros = async () => {
    try {
      const allHeros = await heros();
      setHeroList(allHeros);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHeros();
  });

  const data: IHero[] = [
    {
      name: " wqeqwe",
      stats: {
        def: 10,
        atk: 10,
        hp: 10,
      },
      img: "https://i1.sndcdn.com/artworks-000190299555-vimz9r-t500x500.jpg",
      desc: "adkapsokdpaskdmpasdmapmd",
    },
    {
      name: " wqeqwe",
      stats: {
        def: 4,
        atk: 10,
        hp: 10,
      },
      img: "https://i1.sndcdn.com/artworks-000190299555-vimz9r-t500x500.jpg",
      desc: "adkapsokdpaskdmpasdmapmd",
    },
    {
      name: " wqeqwe",
      stats: {
        def: 7,
        atk: 10,
        hp: 10,
      },
      img: "https://i1.sndcdn.com/artworks-000190299555-vimz9r-t500x500.jpg",
      desc: "adkapsokdpaskdmpasdmapmd",
    },
  ];
  return (
    <div
      className="page"
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#778da9",
        height: "100vh",
      }}
    >
      <div style={{ flex: "1" }}></div>
      <div
        style={{ display: "flex", flexDirection: "column", flex: "2", gap: 40 }}
      >
        <div
          style={{
            flex: "1",
            textAlign: "center",
            border: "1px #778da9 solid",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            borderRadius: "20px",
            padding: "10px",
            marginTop: "50px",
            backgroundColor: "#415a77",
          }}
        >
          <h1>Character Selection</h1>
        </div>
        <div
          style={{ flex: "15", display: "flex", flexDirection: "row", gap: 20 }}
        >
          {heroList.map((hero) => (
            <HeroCard {...hero} />
          ))}
        </div>
      </div>
      <div style={{ flex: "1" }}></div>
    </div>
  );
}
