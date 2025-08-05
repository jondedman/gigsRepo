import { render, screen } from "@testing-library/react";
import Gig from "../src/components/Gig";


test("renders with the correct props", () => {
  // Setup - rendering the component on the page
  render(<Gig band="AATE"
altText="Amaya and three other band members stare into distance in an urban setting" 
image="src/assets/AATE.jpg"
description="A great band"
date="09/07/25"
location="Balham"
 />);

  // Assert
expect(screen.getByRole("heading")).toHaveTextContent("AATE");
const bandImage = screen.getByAltText("Amaya and three other band members stare into distance in an urban setting");
expect(bandImage).toHaveAttribute("src", "src/assets/AATE.jpg");
expect(screen.getByText("A great band")).toBeInTheDocument();
expect(screen.getByText("09/07/25")).toBeInTheDocument();
expect(screen.getByText("Balham")).toBeInTheDocument();
});

