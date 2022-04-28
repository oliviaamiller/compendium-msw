export async function fetchAnimals() {
  const res = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10');
  const results = await res.json();
  return results.map((animal) => ({
    img: animal.image_link,
    name: animal.name,
    latin: animal.latin_name,
    lifespan: animal.lifespan,
    habitat: animal.habitat,
  }));
}
