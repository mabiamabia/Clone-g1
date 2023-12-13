import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import ModalComponent from "./ModalComponent"
import '@testing-library/jest-dom'

describe("ModalComponent", () => {

    it("Verificar funcionamento do botao", async () => {

        // render
        render(
            <ModalComponent />
        )
        // user action
        await userEvent.click(screen.getByTestId("modal-button"))

        // assertions
        expect(screen.getByTestId("modal")).toBe(true)

    })
})