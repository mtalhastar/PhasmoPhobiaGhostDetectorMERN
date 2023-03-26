import { render, screen } from '@testing-library/react';
import PropertyForm  from '../PropertyForm';



      test('Button is present in the form', () => {
        render(<PropertyForm/>);
        const linkElement = screen.getByRole("button",{name:'Publish'})
        expect(linkElement).toBeInTheDocument()
      })

      test('Input field 1 is present', () => {
        render(<PropertyForm/>);
        const linkElement = screen.getByTestId("i1")
        expect(linkElement).toBeInTheDocument()
      })

      
      test('Input field 2 is present', () => {
        render(<PropertyForm/>);
        const linkElement = screen.getByTestId("i2")
        expect(linkElement).toBeInTheDocument()
      })

       
      test('Input field 3 is present', () => {
        render(<PropertyForm/>);
        const linkElement = screen.getByTestId("i3")
        expect(linkElement).toBeInTheDocument()
      })

       
      test('Input field 4 is present', () => {
        render(<PropertyForm/>);
        const linkElement = screen.getByTestId("i4")
        expect(linkElement).toBeInTheDocument()
      })

       
      test('Input field 5 is present', () => {
        render(<PropertyForm/>);
        const linkElement = screen.getByTestId("i5")
        expect(linkElement).toBeInTheDocument()
      })

       
      test('Input field 6 is present', () => {
        render(<PropertyForm/>);
        const linkElement = screen.getByTestId("i6")
        expect(linkElement).toBeInTheDocument()
      })

      test('label are present is present', () => {
        render(<PropertyForm/>);
        const linkElement = screen.getByTestId("l1")
        expect(linkElement).toBeInTheDocument()
      })
 
      test('label are present is present', () => {
        render(<PropertyForm/>);
        const linkElement = screen.getByTestId("l2")
        expect(linkElement).toBeInTheDocument()
      })

  
      test('label are present is present', () => {
        render(<PropertyForm/>);
        const linkElement = screen.getByTestId("l3")
        expect(linkElement).toBeInTheDocument()
      })

  
      test('label are present is present', () => {
        render(<PropertyForm/>);
        const linkElement = screen.getByTestId("l4")
        expect(linkElement).toBeInTheDocument()
      })

  

  

        
        