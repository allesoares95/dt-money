import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Sumarry } from "../../components/Sumarry";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";


export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

    return (
    <div>
      <Header />
      <Sumarry />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map(transactions => {
              return (
                <tr key={transactions.id}>
                  <td width="50%">{transactions.description}</td>
                  <td>
                    <PriceHighLight variant={transactions.type}>
                      {transactions.price}
                    </PriceHighLight>
                  </td>
                  <td>{transactions.category}</td>
                  <td>{transactions.createAt}</td>
                </tr>
              )
            })}

          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}