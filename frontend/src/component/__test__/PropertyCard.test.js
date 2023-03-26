import { render, screen } from '@testing-library/react';
import PropertyCard  from '../PropertyCard';



      test('ImageLink is present', () => {
        render(<PropertyCard  property="imagelink"/>);
        const linkElement = screen.getByRole("img",{ImageLink:'imagelink'})
        expect(linkElement).toBeInTheDocument()
      })

      
        