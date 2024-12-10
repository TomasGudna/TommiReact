import React from "react";
import Link from "next/link";

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

export default function CharactersPage() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen text-green-500">
      <h1 className="text-3xl font-bold text-center mb-8">Characters</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(characterData).map(([slug, character]) => (
          <Link key={slug} href={`/characters/${slug}`} className="group">
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center group-hover:shadow-lg transition-shadow">
              <img
                src={character.imageUrl}
                alt={character.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 group-hover:text-green-600">
                {character.name}
              </h2>
              <p className="text-gray-600 text-center">
                {character.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
