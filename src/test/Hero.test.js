import React from "react";

import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../../public/landing_page/home/Hero"

describe("HEro component",()=>{
    test("renders hero image",()=>{
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero Image")
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/homeHero.png");
    })
}) 