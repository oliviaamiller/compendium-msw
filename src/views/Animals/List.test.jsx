import { render, screen } from '@testing-library/react';
import AnimalsList from './List';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const animals = [
  {
    name: 'Siamang',
    latin_name: 'Hylobates syndactylus',
    animal_type: 'Mammal',
    active_time: 'Diurnal',
    length_min: '1.90',
    length_max: '2.00',
    weight_min: '20',
    weight_max: '23',
    lifespan: '23',
    habitat: 'Tropical rainforest',
    diet: 'Primarily fruit and leaves, some invertebrates',
    geo_range: 'Malaysia and Sumatra',
    image_link:
      'https://upload.wikimedia.org/wikipedia/commons/a/a4/DPPP_5348.jpg',
    id: 162,
  },
  {
    name: 'Naked Mole-rat',
    latin_name: 'Heterocephalus glaber',
    animal_type: 'Mammal',
    active_time: 'Diurnal',
    length_min: '0.25',
    length_max: '0.33',
    weight_min: '0.06',
    weight_max: '0.13',
    lifespan: '30',
    habitat: 'Savannah',
    diet: 'Roots and tubers',
    geo_range: 'Eastern Africa',
    image_link:
      'https://upload.wikimedia.org/wikipedia/commons/0/02/Nacktmull.jpg',
    id: 122,
  },
];

const server = setupServer(
  rest.get(
    'https://zoo-animal-api.herokuapp.com/animals/rand/10',
    (req, res, ctx) => res(ctx.json([animals]))
  )
);

beforeAll(() => server.listen());

afterAll(() => server.close());

describe('animals list - component test', () => {
  it('should render animal images', async () => {
    render(<AnimalsList />);

    await screen.findAllByAltText('zoo animal');

    const nameTest = await screen.findByText('Siamang');

    expect(nameTest).toBeInTheDocument();
  });
});
