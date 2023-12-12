import {render, screen} from "@testing-library/react";
import {FooterComponent} from "../footer/FooterComponent"

describe("FooterComponent", () => {
    it("should render correctly", () => {

        render(<FooterComponent/>)

        expect(screen.getByText("g1"))
    })
    
})
