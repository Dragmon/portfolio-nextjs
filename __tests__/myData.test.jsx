import '@testing-library/jest-dom';
import { getByRole, render, screen } from '@testing-library/react';
import MyData from '../components/MyData';

describe('<MyData />', () => {
  it('renders a user data', () => {
    /*
    render(<MyData />);

    const nameUser = screen.getByRole('heading', { level: 1 });
    const positionHeld = screen.getByRole('heading', { level: 2 });
    const imagesDescription = screen.getByRole('img');

    console.log('namUder', nameUser);

    expect(nameUser).toBeInTheDocument();
    expect(positionHeld).toBeInTheDocument();
    expect(imagesDescription).toBeInTheDocument();
    */
    //expect(container.querySelector('.myDescription'));

    /*
    const { container, getByRole } = render(<MyData />);
    const nameUser = getByRole('heading', { level: 1 });
    const positionHeld = getByRole('heading', { level: 2 });
    const imagesDescription = getByRole('img');

    console.log('container', container);

    expect(nameUser).toBeInTheDocument();
    expect(positionHeld).toBeInTheDocument();
    expect(imagesDescription).toBeInTheDocument();
    expect(container.querySelector('.myDescription'));
    */

    const component = render(<MyData />);

    component.getByRole('heading', { level: 1 });
    component.getByRole('heading', { level: 2 });
    component.getByRole('img');
    component.container.querySelector('.myDescription');
  });
});
