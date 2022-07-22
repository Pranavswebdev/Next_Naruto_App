import { Card, Space } from "antd";
import Meta from "antd/lib/card/Meta";
import axios from "axios";
import { CharacterEncoding } from "crypto";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import imageLoader from "../imageLoader";
import styles from "../styles/Home.module.css";
import { Character, GetCharacterResults } from "../types";


const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
  const { Meta } = Card;
  return (
    <div className={styles.container}>
      <img
        style={{ marginLeft: "32rem", top: "5", borderRadius: "15px" }}
        src="https://img.icons8.com/color/96/000000/naruto-sign.png"
      />
      <a
        style={{
          left: "10rem",
          top: "5",
          marginTop: "5rem",
          marginBottom: "10rem",
          borderRadius: "15px",
        }}
        href="https://www.freepnglogos.com/pics/naruto"
        title="Image from freepnglogos.com"
      >
        <img
          src="https://www.freepnglogos.com/uploads/naruto/naruto-advenimiento-los-animes-cortos-2.png"
          width="200"
          alt="naruto advenimiento los animes cortos"
        />
      </a>

 
      <Space style={{ marginTop: "10rem" }} size={40} wrap>
        {characters.map((character) => {
          return (
            <div key={character.id}>
              <Link href={`/characters/${character.id}`}>
                <a
                  href=" "
                >
                  <Card
                    headStyle={{ border: "1 px solid red" }}
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <Image
                        loader={imageLoader}
                        unoptimized
                        src={character.images[0]}
                        alt={character.name}
                        width="300"
                        height="300"
                      />
                    }
                  >
                    <Meta style={{ color: "white" }} title={character.name} />
                  </Card>
                </a>
              </Link>
            </div>
          );
        })}
      </Space>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://naruto-api.herokuapp.com/api/v1/characters");
  console.log(res);

  const results: GetCharacterResults = await res.json();

  console.log(results);

  return {
    props: {
      characters: results,
    },
  };
};

export default Home;
