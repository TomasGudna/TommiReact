import React from "react";
import { notFound } from "next/navigation";

type Character = {
  name: string;
  description: string;
  imageUrl: string;
};

const characterData: Record<string, Character> = {
  shrek: {
    name: "Shrek",
    description: "A lovable ogre.",
    imageUrl:
      "https://ironusa.vtexassets.com/arquivos/ids/200260-800-1067?v=637971340212270000&width=800&height=1067&aspect=true",
  },
  fiona: {
    name: "Princess Fiona",
    description: "A princess with an ogre form.",
    imageUrl:
      "https://static.miraheze.org/greatcharacterswiki/5/5a/Fiona_Ogre_Forever_After_Portrait.png",
  },
  donkey: {
    name: "Donkey",
    description: "Shrek's loyal (and talkative) friend.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/6c/Donkey_%28Shrek%29.png",
  },
};

export default function CharacterPage({
  params,
}: {
  params: { slug: string };
}) {
  const character = characterData[params.slug];

  if (!character) {
    return notFound();
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <img
        src={character.imageUrl}
        alt={character.name}
        className="w-48 h-48 object-cover rounded-full mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{character.name}</h1>
      <p className="text-gray-600 text-center">{character.description}</p>
    </div>
  );
}
