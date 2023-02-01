import { Header } from "../../components/Header";
import { Sumarry } from "../../components/Sumarry";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Sumarry />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">
                  R$ 12.000,00
                </PriceHighLight>
              </td>
              <td>Venda</td>
              <td>31/01/2023</td>
            </tr>

            <tr>
              <td width="50%">Aluguel do apartamento</td>
              <td>
              <PriceHighLight variant="outcome">
                - R$ 1.200,00
              </PriceHighLight>
              </td>
              <td>Casa</td>
              <td>20/01/2023</td>
            </tr>

          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}