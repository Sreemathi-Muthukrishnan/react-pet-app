import { Pet } from "./Pet";

export const Pets = ({ pets }) => {
  return (
    <div className="search">
      {pets && pets.length > 0 ? (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            id={pet.id}
            animal={pet.animal}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
          />
        ))
      ) : (
        <h1>No Pets Found</h1>
      )}
    </div>
  );
};
