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

            {/* <tr>
              <td width="50%">Computador</td>
              <td>
                <PriceHighLight variant="income">
                R$ 5.400,00
                </PriceHighLight>
              </td>
              <td>Venda</td>
              <td>10/01/2023</td>
            </tr>

            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">
                R$ 8.000,00
                </PriceHighLight>
              </td>
              <td>Venda</td>
              <td>08/01/2023</td>
            </tr>

            <tr>
              <td width="50%">Fone de ouvido</td>
              <td>
              <PriceHighLight variant="outcome">
              - R$ 150,00
              </PriceHighLight>
              </td>
              <td>Itens</td>
              <td>60/01/2023</td>
            </tr>

            <tr>
              <td width="50%">Despesa mensal</td>
              <td>
              <PriceHighLight variant="outcome">
                - R$ 1.500,00
              </PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>05/01/2023</td>
            </tr>

            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">
                  R$ 3.000,00
                </PriceHighLight>
              </td>
              <td>Venda</td>
              <td>03/01/2023</td>
            </tr> */}

          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}