import { render, screen, waitFor } from '@testing-library/react';
import ZooAnimals from './List';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { mockData } from '../../services/Animals/mockdata';

const server = setupServer(
  rest.get(
    'https://zoo-animal-api.herokuapp.com/animals/rand/10',
    (req, res, ctx) => res(ctx.json(mockData))
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());

describe('animals list - component test', () => {
  it('should render animal images', async () => {
    render(<ZooAnimals />);

    await screen.findAllByAltText('zoo animal');

    waitFor(() => {
        const nameTest = screen.getByText('Alligator Snapping Turtle');
    })

    const nameTest = await screen.findByText('Alligator Snapping Turtle');

    expect(nameTest).toBeInTheDocument();
  });
});
